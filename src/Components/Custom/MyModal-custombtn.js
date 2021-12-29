import {
	Button,
	Container,
	Fab,
	FormControlLabel,
	// FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import MuiAlert from "@mui/lab/Alert";
import Divider from "@mui/material/Divider";

import { Theme1 } from "../Theme/Theme1";

import FormButton from "../Custom/FormButton";
import Input from "../Custom/Input";
import { useForm, Form } from "../Custom/UserForm";
import request from "../../axios";

const useStyles = makeStyles((theme) => ({
	fab: {
		// position: "fixed",
		// bottom: 1,
		// left: 20,
	},
	container: {
		width: 800,
		// height: 550,
		height: "90%",
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		padding: 0,
		[Theme1.breakpoints.down("md")]: {
			width: "80vw",
			// height: "50vh",
		},
		border: "1px solid black",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		"& .makeStyles-root-25": {
			height: "80%",
		},
	},
	form: {
		// padding: Theme1.spacing(),
		padding: "0 38px",
		height: "80%",
		overflow: "overlay",
		"&Typography": {
			marginBottom: "0",
		},
	},
	item: {
		marginBottom: Theme1.spacing(1),
		marginTop: Theme1.spacing(1),
		display: "flex",
		alignItems: "center",
	},
	itemBtn: {
		marginBottom: Theme1.spacing(1),
		marginTop: Theme1.spacing(1),
		display: "flex",
		// alignItems: "center",
		justifyContent: "center",
		// position: "absolute",
		// bottom: "3%",
		[Theme1.breakpoints.down("lg")]: {
			// bottom: 25,
			// right: 50,
			// position: "inherit",
		},
		[Theme1.breakpoints.down("md")]: {
			// position: "inherit",
			// position: "absoulte",
		},
	},
	typo: {
		width: "15%",
		marginBottom: "0",
		[Theme1.breakpoints.down("md")]: {
			width: "20%",
		},
	},
	subtypo: {
		backgroundColor: "#b2ebf2",
		padding: "15px 10px",
		textAlign: "center",
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
	},
}));

// function Alert(props) {
// 	return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
const initialValues = {
	id: 0,
	user_id: "",
	password: "",
	passwordConfirm: "",
	username: "",
	email: "",
};
const MyModal = () => {
	const { values, error, setErrors, handleInputChange } =
		useForm(initialValues);
	const TYPE = [
		{
			id: 1,
			name: "품질기준미준수",
		},
		{
			id: 2,
			name: "품질기준미준수2",
		},
		{
			id: 3,
			name: "품질기준미준수3",
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// values.ir_id = record.uuid;
			const response = await request(
				"post",
				`/api/go/inspection_report/create_inspection_report/${window.location.pathname.replace(
					"/makereport/",
					""
				)}`,
				initialValues
			);
			if (response.status === "ok") {
				alert("회원가입이 완료되었습니다");
				window.location.replace("/report");
			}
		} catch (err) {
			alert(err);
		}
	};

	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
		setOpenAlert(false);
	};
	return (
		<>
			<Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
				<Fab color="primary" className={classes.fab}>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal open={open} onClose={handleClose}>
				<Container className={classes.container}>
					<Typography
						variant="h3"
						component="h2"
						color="primary"
						className={classes.subtypo}
						sx={{}}
					>
						그룹 생성
					</Typography>
					<Divider />

					<Form onSubmit={handleSubmit} autoComplete="off">
						<Input
							required
							fullWidth
							name="user_id"
							label="ID"
							type="user_id"
							value={values.user_id}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							value={values.password}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="passwordConfirm"
							label="Confirm password"
							type="password"
							value={values.passwordConfirm}
							onChange={handleInputChange}
							error={error.passwordConfirm}
						/>
						<Input
							required
							fullWidth
							name="username"
							label="Username"
							type="username"
							value={values.username}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="email"
							label="E-mail"
							value={values.email}
							onChange={handleInputChange}
							error={error.email}
						/>
						{/* <FormButton
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							text="Register"
						/> */}
					</Form>
					<div className={classes.itemBtn}>
						<Button
							variant="outlined"
							color="primary"
							style={{ marginRight: 20 }}
							onClick={() => setOpen(false)}
							type="button"
						>
							Create
						</Button>
						<Button
							variant="outlined"
							color="warning"
							onClick={() => setOpen(false)}
							type="button"
						>
							Cancel
						</Button>
					</div>
				</Container>
			</Modal>
			<Snackbar
				open={openAlert}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				{/* <Alert onClose={handleClose} severity="success">
					This is a success message!
				</Alert> */}
			</Snackbar>
		</>
	);
};

export default MyModal;
