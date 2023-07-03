import { Card, Typography, colors } from "@mui/material";
import { DataGrid } from "../../components/common/DataGrid";
import { testData } from "../../assets/testData";
import { DataCurrency } from "../../components/data-items/DataCurrency";
import { DataDate } from "../../components/data-items/DataDate";
import { ChipWrapper } from "../../components/data-items/ChipWrapper";
import { DataText } from "../../components/data-items/DataText";
import { DataLink } from "../../components/data-items/DataLink";

export const UnresolvedWagers = () => {
  return (
    <Card
      sx={{
        padding: 10,
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20, textAlign: "left" }}>
        Unresolved Wagers
      </Typography>
      <DataGrid data={testData.items}>
        <DataCurrency header="ya mum">amount</DataCurrency>
        <DataDate format="DD/MM/YY HH:mm">deadline</DataDate>
        <ChipWrapper
          wrapper
          color="error"
          children={<DataText>display_description</DataText>}
        />
        <DataLink url="event/{value}" useValue>
          event_id
        </DataLink>
      </DataGrid>
    </Card>
  );
};
