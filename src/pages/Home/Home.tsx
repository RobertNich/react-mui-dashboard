import { UpcomingEvents } from "./UpcomingEvents";
import { UnresolvedWagers } from "./UnresolvedWagers";
import { UpcomingTickets } from "./UpcomingTickets";

export const Home = () => {
  return (
    <>
      <UpcomingTickets />
      <UpcomingEvents />
      <div style={{ height: "10px" }}></div>
      <UnresolvedWagers />
    </>
  );
};

export default Home;
