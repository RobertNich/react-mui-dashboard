import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
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
      title: t("tickets"),
      id: "Tickets",
      route: "/app/tickets",
      routeRegx: /^\/app\/tickets$/,
      icon: <FaLayerGroup />,
      childRoutesRegx: [
        /^\/app\/multi\/[0-9]+$/,
        /^\/app\/multi\/[0-9]+\/$/,
        /^\/app\/multi\/[0-9]+\/.*$/,
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
      title: t("calendars"),
      id: "Calendars",
      route: "/app/calendars",
      routeRegx: /^\/app\/calendars$/,
      icon: <FaCalendar />,
      childRoutesRegx: [/^\/app\/calendars\/.*$/],
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
