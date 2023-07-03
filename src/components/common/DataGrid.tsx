import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { ReactElement, useState } from "react";
import { getColumnTitle } from "../../utils/DataGridUtil";
import React from "react";
import { DataFunction } from "../data-items/DataFunction";

interface IProps {
  data: any;
  children: ReactElement[];
}
export const DataGrid = ({ data, children }: IProps) => {
  const [orderDirection, setOrderDirection] = useState<any>("asc");
  const [functionToOrderBy, setFunctionToOrderBy] = useState<
    ((row: any) => any) | null
  >(null);
  const [valueToOrderBy, setValueToOrderBy] = useState<string>("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  function descendingComparator(a: any, b: any) {
    let aa;
    let bb;

    if (functionToOrderBy) {
      aa = functionToOrderBy(a);
      bb = functionToOrderBy(b);
    } else {
      aa = _.get(a, valueToOrderBy);
      bb = _.get(b, valueToOrderBy);
    }

    if (bb < aa) return -1;
    if (bb > aa) return 1;
    return 0;
  }

  const getComparator = (order: any) => {
    return order === "desc"
      ? (a: any, b: any) => descendingComparator(a, b)
      : (a: any, b: any) => -descendingComparator(a, b);
  };

  const sortedRowInformation = (rowArray: any, comparator: any) => {
    const stabilizedRowArray = rowArray.map((el: any, index: number) => [
      el,
      index,
    ]);
    stabilizedRowArray.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedRowArray.map((el: any) => el[0]);
  };

  const handleRequestSort = (
    event: any,
    property: string,
    propertyFunction?: any
  ) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
    if (propertyFunction) {
      setFunctionToOrderBy(() => propertyFunction);
    } else {
      setFunctionToOrderBy(() => null);
    }
  };

  const createSortHandler =
    (property: string, propertyFunction?: any) => (event: any) => {
      handleRequestSort(event, property, propertyFunction);
    };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {children.map((column) => {
              const actualColumn = column.props.wrapper
                ? column.props.children
                : column;
              const columnHeading = getColumnTitle(actualColumn);
              return (
                <TableCell key={columnHeading}>
                  <TableSortLabel
                    active={
                      functionToOrderBy === actualColumn.props.fn ||
                      valueToOrderBy === actualColumn.props.children
                    }
                    direction={orderDirection}
                    onClick={createSortHandler(
                      actualColumn.props.children,
                      actualColumn.type === DataFunction
                        ? actualColumn.props.fn
                        : null
                    )}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {columnHeading}
                    </Typography>
                  </TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRowInformation(data, getComparator(orderDirection))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: any, index: number) => {
              return (
                <TableRow key={index}>
                  {children.map((child: ReactElement, index: number) => {
                    if (child.props.wrapper) {
                      const clonedChild = React.cloneElement(
                        child.props.children,
                        { data: row }
                      );
                      return (
                        <TableCell key={index}>
                          {React.cloneElement(child, { children: clonedChild })}
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={index}>
                          {React.cloneElement(child, { data: row })}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
        </TableBody>

        <TableFooter>
          <TablePagination
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[
              1,
              25,
              50,
              100,
              250,
              { label: "All", value: -1 },
            ]}
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
