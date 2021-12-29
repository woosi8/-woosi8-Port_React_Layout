// import "react-perfect-scrollbar/dist/css/styles.css";
import { RecoilRoot } from "recoil";
import { useRoutes } from "react-router-dom";
import {
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
} from "@mui/material";
import Routes from "./Routes/Routes";
import { Theme } from "./Theme/Theme1";
const App = () => {
	const content = useRoutes(Routes);

	return (
		<RecoilRoot>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={Theme}>
					<CssBaseline />
					{content}
				</ThemeProvider>
			</StyledEngineProvider>
		</RecoilRoot>
	);
};

export default App;
