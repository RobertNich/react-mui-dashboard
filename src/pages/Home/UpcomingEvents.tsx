import { Card, Typography, colors } from "@mui/material";
import { DataGrid } from "../../components/common/DataGrid";
import { testData } from "../../assets/testData";
import { DataCurrency } from "../../components/data-items/DataCurrency";
import { DataDate } from "../../components/data-items/DataDate";
import { ChipWrapper } from "../../components/data-items/ChipWrapper";
import { DataText } from "../../components/data-items/DataText";
import { DataFunction } from "../../components/data-items/DataFunction";
import { DataLink } from "../../components/data-items/DataLink";

export const UpcomingEvents = () => {
  const getWagerWinner = (wager: any) => {
    let winner = "";
    if (wager.wager_status_id === 4) {
      const isYamoBet = wager.wager_options[0].blob.back_or_lay === 2;
      const isWinner = wager.wager_options[0].wager_option_status_id === 3;
      if ((isYamoBet && isWinner) || (!isYamoBet && !isWinner))
        winner = "System";
      else winner = "User";
    }
    return winner;
  };

  return (
    <Card
      sx={{
        padding: 10,
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20, textAlign: "left" }}>
        Upcoming Events
      </Typography>
      <DataGrid data={testData.items}>
        <DataCurrency header="Total Cash">amount</DataCurrency>
        <DataDate format="DD/MM/YY HH:mm">deadline</DataDate>
        <ChipWrapper
          wrapper
          color="error"
          children={<DataText>display_description</DataText>}
        />
        <ChipWrapper
          wrapper
          color="primary"
          children={<DataFunction header="winner" fn={getWagerWinner} />}
        />
        <DataLink url="event/{value}" useValue>
          event_id
        </DataLink>
      </DataGrid>
    </Card>
  );
};
