import { Card, Typography, colors } from "@mui/material";
import { DataGrid } from "../../components/common/DataGrid";
import { DataText } from "../../components/data-items/DataText";
import { DataLink } from "../../components/data-items/DataLink";
import { upcomingTickets } from "../../assets/test-data/UpcomingTickets";
import { DataCountdown } from "../../components/data-items/DataCountdown";
import { ChipEnum } from "../../components/data-items/ChipEnum";
import { DataDate } from "../../components/data-items/DataDate";
import { DataEnum } from "../../components/data-items/DataEnum";

export const UpcomingTickets = () => {
  enum SeverityColour {
    error = 1,
    warning = 2,
    secondary = 3,
    primary = 4,
    success = 5,
  }

  enum TicketStatus {
    on_hold = 1,
    created = 2,
    pending = 3,
    finalising = 4,
    complete = 5,
  }

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
        <ChipEnum
          wrapper
          enumData={SeverityColour}
          children={<DataText>priority_level</DataText>}
        />
        <DataDate format="DD/MM/YY HH:mm">created_date</DataDate>
        <DataCountdown>deadline</DataCountdown>
        <DataLink url="agent/{value}" otherValue="agent_id">
          assigned_agent
        </DataLink>
        <ChipEnum
          wrapper
          enumData={SeverityColour}
          children={<DataEnum enumData={TicketStatus}>ticket_status</DataEnum>}
        />
      </DataGrid>
    </Card>
  );
};
