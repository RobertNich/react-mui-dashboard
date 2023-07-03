import dayjs from "dayjs";

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const agents = [
  {
    name: "Mitch Connor",
    id: 1,
  },
  {
    name: "Shaun Samuel",
    id: 2,
  },
  {
    name: "Ebony White",
    id: 3,
  },
  {
    name: "Emily Little",
    id: 4,
  },
  {
    name: "Greg Shears",
    id: 5,
  },
  {
    name: "Bianca Palmers",
    id: 6,
  },
  {
    name: "Terry Nors",
    id: 7,
  },
  {
    name: "Timothy Bates",
    id: 8,
  },
  {
    name: "Helen Musket",
    id: 9,
  },
];

const randomTickets = () => {
  const randomHours = randomInt(5);
  const randomMinutes = randomInt(59);
  const randomAgent = randomInt(agents.length);

  const ticket_id = randomInt(10000);
  const priority_level = randomHours + 1;
  const deadline = dayjs
    .utc()
    .add(randomHours, "hours")
    .add(randomMinutes, "minutes");
  const assigned_agent = agents[randomAgent].name;
  const agent_id = agents[randomAgent].id;

  return { ticket_id, priority_level, deadline, assigned_agent, agent_id };
};

export const upcomingTickets = Array.from({ length: 10 }, () =>
  randomTickets()
);
