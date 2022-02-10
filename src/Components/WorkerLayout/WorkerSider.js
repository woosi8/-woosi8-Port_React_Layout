import {
	HomeOutlined,
	CalendarTodayOutlined,
	RateReviewOutlined,
	AssignmentOutlined,
} from "@mui/icons-material";
import { Drawer, styled, Box, List, Hidden } from "@mui/material";
import WorkerNavItem from "./WorkerNavItem";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CreateIcon from "@mui/icons-material/Create";
import EastIcon from "@mui/icons-material/East";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AppsIcon from "@mui/icons-material/Apps";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Users as UsersIcon } from "react-feather";
import { ThreeDRotation } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	// width: `calc(${theme.spacing(8)} + 1px)`,
	width: "0",
});

const hiddenMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	width: 0,
});

const WorkerDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	"& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
		// borderColor: theme.palette.commonGrey.main
	},
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
	[theme.breakpoints.down("lg")]: {
		...(!open && {
			...hiddenMixin(theme),
			"& .MuiDrawer-paper": hiddenMixin(theme),
		}),
	},
	"& .css-palasp-MuiPaper-root-MuiDrawer-paper": {
		boxShadow: "none",
	},
}));

const WorkerDrawerMobile = styled(Drawer)(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	"& .css-palasp-MuiPaper-root-MuiDrawer-paper": {
		boxShadow: "none",
	},
}));

const StyledDiv = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "102px",
	[theme.breakpoints.down("lg")]: {
		width: 240,
	},
}));

const WorkerSider = ({ open, setOpen }) => {
	return (
		<>
			<Hidden lgDown>
				<WorkerDrawer variant="permanent" open={open}>
					<StyledDiv>
						<List>
							{items.map((item, index) => (
								<WorkerNavItem
									href={item.href}
									key={index}
									title={item.title}
									icon={item.icon}
								/>
							))}
						</List>
					</StyledDiv>
				</WorkerDrawer>
			</Hidden>
			<Hidden lgUp>
				<WorkerDrawerMobile open={open} onClose={() => setOpen(false)}>
					<StyledDiv>
						<List>
							{items.map((item, index) => (
								<WorkerNavItem
									href={item.href}
									key={index}
									title={item.title}
									icon={item.icon}
								/>
							))}
						</List>
					</StyledDiv>
				</WorkerDrawerMobile>
			</Hidden>
		</>
	);
};

export default WorkerSider;

const items = [
	{
		index: 0,
		href: "/worker/home",
		icon: <HomeOutlined />,
		title: "홈",
	},
	{
		index: 1,
		href: "/app/schedule",
		icon: <LoginIcon />,
		title: "로그인",
	},
	{
		index: 2,
		href: "/worker/home",
		icon: <LogoutIcon />,
		title: "로그아웃",
	},
	{
		index: 3,
		href: "/app/team",
		icon: <TableRowsIcon />,
		title: "CRUD",
	},

	{
		index: 4,
		href: "/app/t_create",
		icon: <UsersIcon />,
		title: "Team_Create",
	},
	{
		index: 5,
		href: "/app/annotorious",
		icon: <CreateIcon />,
		title: "Annotorious",
	},
	{
		index: 6,
		href: "/app/maptouchs",
		icon: <AppsIcon />,
		title: "MapTouchs",
	},
	{
		index: 7,
		href: "/app/imgstpes",
		icon: <EastIcon />,
		title: "ImgSteps",
	},
	{
		index: 8,
		href: "/app/loading",
		icon: <ImageIcon />,
		title: "ImgLoading",
	},
	{
		index: 9,
		href: "/app/plusform",
		icon: <AddCircleIcon />,
		title: "PlusForm",
	},
	{
		index: 10,
		href: "/app/drag_drop",
		icon: <ArchiveIcon />,
		title: "Drag_drop ",
	},
	{
		index: 11,
		href: "/app/t_card",
		icon: <RecentActorsIcon />,
		title: "Team_Maker ",
	},
	{
		index: 12,
		href: "/app/table_making",
		icon: <AppRegistrationIcon />,
		title: "Table_making ",
	},
	{
		index: 13,
		href: "/app/pagenation",
		icon: <ThreeDRotation />,
		title: "Pagenation ",
	},
];
