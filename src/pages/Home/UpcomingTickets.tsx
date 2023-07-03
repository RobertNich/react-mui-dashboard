import { Card, Typography, colors } from "@mui/material";
import { DataGrid } from "../../components/common/DataGrid";
import { testData } from "../../assets/testData";
import { DataCurrency } from "../../components/data-items/DataCurrency";
import { DataDate } from "../../components/data-items/DataDate";
import { ChipWrapper } from "../../components/data-items/ChipWrapper";
import { DataText } from "../../components/data-items/DataText";
import { DataLink } from "../../components/data-items/DataLink";
import { upcomingTickets } from "../../assets/test-data/UpcomingTickets";
import { DataCountdown } from "../../components/data-items/DataCountdown";

export const UpcomingTickets = () => {
  return (
    <Card
      sx={{
        padding: 10,
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20, textAlign: "left" }}>
        Upcoming Tickets
      </Typography>
      <DataGrid data={upcomingTickets}>
        <DataLink url="ticket/{value}" useValue>
          ticket_id
        </DataLink>
        <ChipWrapper
          wrapper
          color="error"
          children={<DataText>priority_level</DataText>}
        />
        <DataCountdown format="HH:mm">deadline</DataCountdown>

        <DataLink url="agent/{value}" otherValue="agent_id">
          assigned_agent
        </DataLink>
      </DataGrid>
    </Card>
  );
};
