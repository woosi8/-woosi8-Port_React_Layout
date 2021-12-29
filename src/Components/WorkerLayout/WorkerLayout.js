import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "../../Theme/Theme1";
import WorkerHeader from "./WorkerHeader";
import WorkerSider from "./WorkerSider";
import AppNavbar from "Components/PrimaryLayout/AppNavbar";

const WorkerLayoutRoot = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	display: "flex",
	height: "100%",
	overflow: "hidden",
	width: "100%",
	marginTop: "8vh",
}));

const WorkerLayoutWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	overflow: "hidden",
}));

const WorkerLayoutContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	overflow: "hidden",
}));

const WorkerLayoutContent = styled("div")(({ theme }) => ({
	marginTop: theme.spacing(10),
	marginLeft: theme.spacing(4),
	marginRight: theme.spacing(4),
	flex: "1 1 auto",
	height: "100%",
	// overflow: 'auto',
	overflowX: "hidden",
	[theme.breakpoints.down("sm")]: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
}));

const WorkerLayout = () => {
	const [open, setOpen] = useState(false);

	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<WorkerLayoutRoot>
				<WorkerHeader open={open} setOpen={setOpen} />
				<AppNavbar />
				<WorkerLayoutWrapper>
					<WorkerLayoutContainer>
						<WorkerSider open={open} setOpen={setOpen} />
						<WorkerLayoutContent>
							<Outlet />
						</WorkerLayoutContent>
					</WorkerLayoutContainer>
				</WorkerLayoutWrapper>
			</WorkerLayoutRoot>
		</ThemeProvider>
	);
};

export default WorkerLayout;
