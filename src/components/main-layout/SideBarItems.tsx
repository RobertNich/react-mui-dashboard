import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import {
  FaAddressCard,
  FaAward,
  FaBell,
  FaBolt,
  FaCalendar,
  FaCalendarAlt,
  FaChartLine,
  FaCogs,
  FaFileAlt,
  FaFlask,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaListAlt,
  FaMailBulk,
  FaMoneyBillWave,
  FaShareSquare,
  FaSignOutAlt,
  FaTags,
  FaTicketAlt,
  FaTrophy,
  FaUser,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface Props {
  open: boolean;
}

export const SideBarItems = ({ open }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const menuModel = [
    {
      title: t("home"),
      id: "Home",
      route: "/app/home",
      routeRegx: /^\/app\/home$/,
      icon: <FaHome />,
      childRoutesRegx: [
        /^\/app$/,
        /^\/app\/$/,
        /^\/app\/home$/,
        /^\/app\/home\/$/,
      ],
    },
    {
      title: t("calendars"),
      id: "Calendars",
      route: "/app/calendars",
      routeRegx: /^\/app\/calendars$/,
      icon: <FaCalendar />,
      childRoutesRegx: [/^\/app\/calendars\/.*$/],
    },
    {
      title: t("results"),
      id: "Results",
      route: "/app/results",
      routeRegx: /^\/app\/results$/,
      icon: <FaListAlt />,
      childRoutesRegx: [
        /^\/app$/,
        /^\/app\/$/,
        /^\/app\/results$/,
        /^\/app\/results\/$/,
        /^\/app\/results\/events$/,
        /^\/app\/results\/wagers$/,
        /^\/app\/results\/transactions$/,
      ],
    },
    {
      title: t("events"),
      id: "Events",
      route: "/app/events",
      routeRegx: /^\/app\/events$/,
      icon: <FaCalendarAlt />,
      childRoutesRegx: [
        /^\/app\/event\/[0-9]+$/,
        /^\/app\/event\/[0-9]+\/$/,
        /^\/app\/new\/event$/,
        /^\/app\/new\/event\/$/,
        /^\/app\/event\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("competitions"),
      id: "Competitions",
      route: "/app/competitions",
      routeRegx: /^\/app\/competitions$/,
      icon: <FaTrophy />,
      childRoutesRegx: [
        /^\/app\/competition\/[0-9]+$/,
        /^\/app\/competition\/[0-9]+\/$/,
        /^\/app\/new\/competition$/,
        /^\/app\/new\/competition\/$/,
        /^\/app\/competition\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("tournaments"),
      id: "Tournaments",
      route: "/app/tournaments",
      routeRegx: /^\/app\/tournaments$/,
      icon: <FaAward />,
      childRoutesRegx: [
        /^\/app\/tournaments\/.*$/,
        /^\/app\/tournament\/[0-9]+$/,
        /^\/app\/tournament\/[0-9]+\/$/,
        /^\/app\/tournament\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("users"),
      id: "Users",
      route: "/app/users",
      routeRegx: /^\/app\/users$/,
      icon: <FaUser />,
      childRoutesRegx: [
        /^\/app\/new\/user$/,
        /^\/app\/new\/banned\/user$/,
        /^\/app\/user\/[0-9]+$/,
        /^\/app\/user\/[0-9]+\/$/,
        /^\/app\/user\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("groups"),
      id: "Groups",
      route: "/app/groups",
      routeRegx: /^\/app\/groups$/,
      icon: <FaUsers />,
      childRoutesRegx: [
        /^\/app\/new\/group$/,
        /^\/app\/group\/[0-9]+$/,
        /^\/app\/group\/[0-9]+\/$/,
        /^\/app\/group\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("wagers"),
      id: "Wagers",
      route: "/app/wagers",
      routeRegx: /^\/app\/wagers$/,
      icon: <FaMoneyBillWave />,
      childRoutesRegx: [
        /^\/app\/wager\/[0-9]+$/,
        /^\/app\/wager\/[0-9]+\/$/,
        /^\/app\/wager\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("multis"),
      id: "Multis",
      route: "/app/multis",
      routeRegx: /^\/app\/multis$/,
      icon: <FaLayerGroup />,
      childRoutesRegx: [
        /^\/app\/multi\/[0-9]+$/,
        /^\/app\/multi\/[0-9]+\/$/,
        /^\/app\/multi\/[0-9]+\/.*$/,
      ],
    },
    {
      title: t("categories"),
      id: "Categories",
      route: "/app/categories",
      routeRegx: /^\/app\/categories$/,
      icon: <FaTags />,
      childRoutesRegx: [
        /^\/app\/category\/[0-9]+$/,
        /^\/app\/category\/[0-9]+\/$/,
        /^\/app\/category+$/,
        /^\/app\/category\/$/,
        /^\/app\/category-associations$/,
        /^\/app\/category-associations\/$/,
      ],
    },
    {
      title: t("notifications"),
      id: "Notifications",
      route: "/app/notifications",
      routeRegx: /^\/app\/notifications$/,
      icon: <FaBell />,
      childRoutesRegx: [/^\/app\/notifications\/.*$/],
    },
    {
      title: t("auditing"),
      id: "Auditing",
      route: "/app/auditing",
      routeRegx: /^\/app\/auditing$/,
      icon: <FaUserShield />,
      childRoutesRegx: [/^\/app\/auditing\/.*$/],
    },
    {
      title: t("analytics"),
      id: "Analytics",
      route: "/app/analytics",
      routeRegx: /^\/app\/analytics$/,
      icon: <FaChartLine />,
      childRoutesRegx: [/^\/app\/analytics\/.*$/],
    },
    {
      title: t("sys_ops"),
      id: "Sys Ops",
      route: "/app/sys-ops",
      routeRegx: /^\/app\/sys-ops$/,
      icon: <FaCogs />,
      childRoutesRegx: [/^\/app\/sys-ops\/.*$/],
    },
    {
      title: t("admin"),
      id: "Admin",
      route: "/app/admin",
      routeRegx: /^\/app\/admin$/,
      icon: <FaUserShield />,
      childRoutesRegx: [/^\/app\/admin\/.*$/],
    },
    {
      title: t("wager_templates"),
      id: "Wager Templates",
      route: "/app/custom-wager-templates",
      routeRegx: /^\/app\/custom\-wager\-templates$/,
      icon: <FaFileAlt />,
      childRoutesRegx: [/^\/app\/custom\-wager\-templates\/.*$/],
    },
    {
      title: t("bonus_bets"),
      id: "Bonus Bets",
      route: "/app/bonus-bets",
      routeRegx: /^\/app\/bonus\-bets$/,
      icon: <FaBolt />,
      childRoutesRegx: [/^\/app\/bonus\-bets\/.*$/],
    },
    {
      title: t("feature_cards"),
      id: "Feature Cards",
      route: "/app/feature-cards",
      routeRegx: /^\/app\/feature\-cards$/,
      icon: <FaAddressCard />,
      childRoutesRegx: [/^\/app\/feature\-cards\/.*$/],
    },
    {
      title: t("shortcuts"),
      id: "Shortcuts",
      route: "/app/shortcuts",
      routeRegx: /^\/app\/shortcuts$/,
      icon: <FaShareSquare />,
      childRoutesRegx: [/^\/app\/shortcuts\/.*$/],
    },
    {
      title: t("emails"),
      id: "Emails",
      route: "/app/emails",
      routeRegx: /^\/app\/emails$/,
      icon: <FaMailBulk />,
      childRoutesRegx: [/^\/app\/emails\/.*$/],
    },
    {
      title: t("promotions"),
      id: "Promotions",
      route: "/app/promotions",
      routeRegx: /^\/app\/promotions$/,
      icon: <FaTicketAlt />,
      childRoutesRegx: [/^\/app\/promotions\/.*$/],
    },
    {
      title: t("recommendations"),
      id: "Recommendations",
      route: "/app/recommendations",
      routeRegx: /^\/app\/recommendations$/,
      icon: <FaFlask />,
      childRoutesRegx: [/^\/app\/recommendations\/.*$/],
    },
    {
      title: t("customer_support"),
      id: "Customer Support",
      route: "/app/cs",
      routeRegx: /^\/app\/cs$/,
      icon: <FaInfoCircle />,
      childRoutesRegx: [/^\/app\/cs\/.*$/],
    },
  ];

  return (
    <Box>
      <List>
        {menuModel.map((item) => (
          <ListItem key={item.id} disablePadding>
            <NavLink
              to={item.route}
              style={{
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Stack
                direction={open ? "row" : "column"}
                alignItems="center"
                sx={{ px: 2 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </Stack>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
