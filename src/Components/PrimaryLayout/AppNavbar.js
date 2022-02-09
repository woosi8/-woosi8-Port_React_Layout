import PropTypes from "prop-types";
import { AppBar, Box, Toolbar, Hidden, Button } from "@mui/material";
// import {
//   DashboardCustomizeOutlined,
//   AccountTreeOutlined,
//   TaskOutlined,
//   AnalyticsOutlined,
//   GroupWorkOutlined,
//   SettingsOutlined,
//   DesignServicesOutlined
// } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import {
	useLocation,
	matchPath,
	NavLink as RouterLink,
} from "react-router-dom";

import { Users as UsersIcon } from "react-feather";

// import SquareButton from '../SquareComponents/Button/Button';

import { ThreeDRotation } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CreateIcon from "@mui/icons-material/Create";
import EastIcon from "@mui/icons-material/East";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AppsIcon from "@mui/icons-material/Apps";
import TableRowsIcon from "@mui/icons-material/TableRows";

const items = [
	{
		href: "/app/team",
		icon: <TableRowsIcon />,
		title: "CRUD",
	},
	{
		href: "/app/t_create",
		icon: <UsersIcon />,
		title: "Team_Create",
	},

	{
		href: "/app/annotorious",
		icon: <CreateIcon />,
		title: "Annotorious",
	},

	{
		href: "/app/maptouchs",
		icon: <AppsIcon />,
		title: "MapTouchs",
	},
	{
		href: "/app/imgstpes",
		icon: <EastIcon />,
		title: "ImgSteps",
	},

	// {
	//   href: '/app/workspace',
	//   icon: <DashboardCustomizeOutlined />,
	//   title: 'WorkSpace'
	// },

	// {
	//   href: '/app/project',
	//   icon: <AiOutlineProject />,
	//   title: 'Project'
	// },

	{
		href: "/app/loading",
		icon: <ImageIcon />,
		title: "ImgLoading",
	},

	{
		href: "/app/plusform",
		icon: <AddCircleIcon />,
		title: "PlusForm",
	},
	{
		href: "/app/drag_drop",
		icon: <ArchiveIcon />,
		title: "Drag_drop",
	},
	{
		href: "/app/t_card",
		icon: <RecentActorsIcon />,
		title: "Team_Maker",
	},
	{
		href: "/app/table_making",
		icon: <AppRegistrationIcon />,
		title: "Table_making",
	},
	{
		href: "/app/pagenation",
		icon: <ThreeDRotation />,
		title: "Pagenation",
	},

	// {
	// 	href: "/app/settings",
	// 	icon: <ThreeDRotation />,
	// 	title: "Settings",
	// },
];

const useStyles = makeStyles((theme) => ({
	root: {
		background: "white",
		// color: theme.palette.primary.main
		color: theme.palette.grey.main,
		// boxShadow: theme.bottomShadows.first,
	},
}));

const AppNavbar = ({ onMobileNavOpen, ...rest }) => {
	const location = useLocation();
	const classes = useStyles();

	return (
		<AppBar
			className={classes.root}
			elevation={0}
			sx={{
				mt: "60px",
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
			{...rest}
		>
			<Hidden lgDown>
				<Toolbar variant="dense">
					{items.map((item, index) => {
						const active = item.href
							? !!matchPath(
									{
										path: item.href,
										end: false,
									},
									location.pathname
							  )
							: false;

						return (
							<Box key={index} sx={{ flexGrow: 0.1 }}>
								<Button
									component={RouterLink}
									to={item.href}
									variant="text"
									color="primary"
									startIcon={item.icon}
									sx={{
										textTransform: "none",
										...(active && {
											color: "secondary.main",
										}),
									}}
								>
									{item.title}
								</Button>
							</Box>
						);
					})}
				</Toolbar>
			</Hidden>
		</AppBar>
	);
};

AppNavbar.prototypes = {
	onMobileNavOpen: PropTypes.func,
};

export default AppNavbar;
