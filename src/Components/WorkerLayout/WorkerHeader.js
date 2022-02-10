import {
	HelpOutlined,
	LogoutOutlined,
	MenuOutlined,
	PersonOutline,
	SettingsOutlined,
} from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Divider,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useState } from "react";

const StyledHeader = styled(AppBar)(({ theme }) => ({
	// boxShadow: theme.CustomShadow.first,
	zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
	},
}));

const WorkerHeader = ({ open, setOpen }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const menuopen = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<StyledHeader>
			<StyledToolbar variant="dense">
				<IconButton
					edge="start"
					color="inherit"
					onClick={() => setOpen((prev) => !prev)}
				>
					<MenuOutlined />
				</IconButton>
				<Typography component="div" variant="h5" ml={2.5}>
					AI SQUARE
				</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit">
					<HelpOutlined />
				</IconButton>
				<IconButton color="inherit" size="large" onClick={handleClick}>
					<Avatar
						sx={{
							width: 30,
							height: 30,
							bgcolor: deepOrange[500],
							fontSize: 12,
						}}
					>
						CH
					</Avatar>
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					open={menuopen}
					onClose={handleClose}
					onClick={handleClose}
				>
					<MenuItem>
						<ListItemIcon>
							<PersonOutline fontSize="small" />
							<ListItemText sx={{ marginLeft: 1 }}>내 계정</ListItemText>
						</ListItemIcon>
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<SettingsOutlined fontSize="small" />
							<ListItemText sx={{ marginLeft: 1 }}>설정</ListItemText>
						</ListItemIcon>
					</MenuItem>
					<Divider />
					<MenuItem>
						<ListItemIcon>
							<LogoutOutlined fontSize="small" />
							<ListItemText sx={{ marginLeft: 1 }}>로그아웃</ListItemText>
						</ListItemIcon>
					</MenuItem>
				</Menu>
			</StyledToolbar>
		</StyledHeader>
	);
};

export default WorkerHeader;
