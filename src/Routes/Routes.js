import { Navigate } from "react-router-dom";
// import Login from "../Components/Login/Login";
import About from "../Views/About/About";
import Contact from "../Views/Contact/Contact";
import Count from "../Views/Count/Count";
import PrimaryLayout from "../Components/PrimaryLayout/PrimaryLayout";
import Login from "../Views/Login/Login";
import Register from "../Views/Login/Register";
import Dashboard from "../Views/Dashboard/Dashboard";
import MainLayout from "Components/PrimaryLayout/MainLayout";
import TeamManagers from "Components/Team/List/TeamAllUsers";
import TeamWorkers from "Components/Team/List/TeamWorkers";
import TableMaking from "Views/TableMaking/TableMaking";
import TeamSpecification from "Views/Team/TeamSpecification";
import TeamCreate from "Components/Team/TeamCreate";
import Team from "Views/Team/Team";
import Loading from "Views/Loading/Loading";
import DragDrop from "Components/DND_Workflow/WorkFlow";
import Annotorious from "Views/Annotorious/Annotorious";
// import Imgupload from "Views/ImgUpload/Imgupload";
import ImgSteps from "Views/ImgUpload/ImgStep";
import PlusForm from "Views/PlusForm/PlusForm";
import MapTouchs from "Views/MapTouchs/MapTouchs";
import WorkerLayout from "Components/WorkerLayout/WorkerLayout";
import Page from "Views/PageNation/Page";
import Account from "Views/Acount/Account";
const routes = [
	{
		path: "/",
		// element: <WorkerLayout />,
		children: [
			{ path: "/", element: <Login /> },
			{ path: "schedule", element: <Register /> },
		],
	},

	{
		path: "app",
		element: <WorkerLayout />,
		children: [
			{ path: "", element: <Navigate to="/expert/dashboard" /> },
			{ path: "team", element: <TeamManagers /> },
			{ path: "team/usersAccount", element: <Account /> },
			{ path: "table_making", element: <TableMaking /> },
			{ path: "t_card", element: <TeamSpecification /> },
			{ path: "t_create", element: <Team /> },
			{ path: "loading", element: <Loading /> },
			{ path: "drag_drop", element: <DragDrop /> },
			{ path: "annotorious", element: <Annotorious /> },
			// { path: "imgupload", element: <Imgupload /> },
			{ path: "imgstpes", element: <ImgSteps /> },
			{ path: "plusform", element: <PlusForm /> },
			{ path: "pagenation", element: <Page /> },
			{ path: "maptouchs", element: <MapTouchs /> },
		],
	},
];

export default routes;
