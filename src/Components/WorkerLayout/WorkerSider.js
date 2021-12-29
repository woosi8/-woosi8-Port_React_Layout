import {
	HomeOutlined,
	CalendarTodayOutlined,
	RateReviewOutlined,
	AssignmentOutlined,
} from "@mui/icons-material";
import { Drawer, styled, Box, List, Hidden } from "@mui/material";
import WorkerNavItem from "./WorkerNavItem";

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
	width: `calc(${theme.spacing(8)} + 1px)`,
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
	marginTop: "62px",
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
		href: "/worker/schedule",
		icon: <CalendarTodayOutlined />,
		title: "작업일정",
	},
	{
		index: 2,
		href: "/worker/request",
		icon: <RateReviewOutlined />,
		title: "요청",
	},
	{
		index: 3,
		href: "/worker/report",
		icon: <AssignmentOutlined />,
		title: "리포트",
	},
];
