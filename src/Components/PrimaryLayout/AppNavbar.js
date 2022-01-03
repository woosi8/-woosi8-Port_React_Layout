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

// import SquareButton from '../SquareComponents/Button/Button';

import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const items = [
	{
		href: "/app/team",
		icon: <AccessAlarm />,
		title: "CRUD",
	},
	{
		href: "/app/table_making",
		icon: <AccessAlarm />,
		title: "table_making",
	},

	// {
	//   href: '/app/workspace',
	//   icon: <DashboardCustomizeOutlined />,
	//   title: 'WorkSpace'
	// },
	{
		href: "/app/team_card",
		icon: <ThreeDRotation />,
		title: "team_card",
	},
	// {
	//   href: '/app/project',
	//   icon: <AiOutlineProject />,
	//   title: 'Project'
	// },
	{
		href: "/app/team_create",
		icon: <ThreeDRotation />,
		title: "team_create",
	},
	{
		href: "/app/loading",
		icon: <ThreeDRotation />,
		title: "loading",
	},
	{
		href: "/app/drag_drop",
		icon: <ThreeDRotation />,
		title: "drag_drop",
	},

	{
		href: "/app/annotorious",
		icon: <ThreeDRotation />,
		title: "Annotorious",
	},
	{
		href: "/app/pagenation",
		icon: <ThreeDRotation />,
		title: "Pagenation",
	},
	{
		href: "/app/settings",
		icon: <ThreeDRotation />,
		title: "Settings",
	},
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
