import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAtom } from "jotai";
import { testData } from "../assets/testData";
import { sideBarOpenAtom, isDarkModeAtom } from "../services/UiService";
import { DataGrid } from "../components/common/DataGrid";
import { DataCurrency } from "../components/data-items/DataCurrency";
import { DataDate } from "../components/data-items/DataDate";
import { ChipWrapper } from "../components/data-items/ChipWrapper";
import { DataText } from "../components/data-items/DataText";
import { DataFunction } from "../components/data-items/DataFunction";
import { DataLink } from "../components/data-items/DataLink";

export const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useAtom(sideBarOpenAtom);
  const [darkMode, setDarkMode] = useAtom(isDarkModeAtom);

  function clickFn() {
    setSideBarOpen(!sideBarOpen);
  }

  function darkFn() {
    setDarkMode(!darkMode);
  }

  const getWagerWinner = (wager: any) => {
    let winner = "";
    if (wager.wager_status_id === 4) {
      const isYamoBet = wager.wager_options[0].blob.back_or_lay === 2;
      const isWinner = wager.wager_options[0].wager_option_status_id === 3;
      if ((isYamoBet && isWinner) || (!isYamoBet && !isWinner))
        winner = "YamoBet";
      else winner = "User";
    }
    return winner;
  };

  return (
    <>
      <Card
        sx={{
          padding: 24,
          minHeight: 360,
        }}
      >
        <Typography
          variant="h2"
          style={{ marginBottom: 20, textAlign: "left" }}
        >
          Data Grid
        </Typography>
        <DataGrid data={testData.items}>
          <DataCurrency header="ya mum">amount</DataCurrency>
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
    </>
  );
};

export default Home;
