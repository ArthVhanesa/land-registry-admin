import React from "react";
import { TextField, FormControl, Autocomplete, Button } from "@mui/material";

const Register = () => {
	const styles = {
		form: {
			padding: "3rem",

			width: "50%",
			display: "flex",
			justifyContent: "space-between",
		},
	};

	const cities = [
		{ label: "Bharuch" },
		{ label: "Surat" },
		{ label: "Ahmedabad" },
		{ label: "Vadodara" },
		{ label: "Kutchh" },
	];

	return (
		<div className='flex justify-center h-screen'>
			<FormControl margin='normal' style={styles.form}>
				<p className='text-3xl w-full text-center mt-2'>Register</p>
				{/* form code goes here */}
				<TextField id='outlined-basic' label='Full Name' variant='outlined' />
				<TextField id='outlined-basic' label='Email' variant='outlined' />
				<TextField
					id='outlined-basic'
					label='Phone_no'
					variant='outlined'
					type='number'
				/>
				<TextField
					id='outlined-basic'
					label='Aadhar No'
					variant='outlined'
					type='number'
				/>
				<TextField
					id='outlined-basic'
					label='Pan No'
					variant='outlined'
					type='number'
				/>
				<TextField id='outlined-basic' label='Address' multiline maxRows={4} />
				<Autocomplete
					disablePortal
					options={cities}
					sx={{ width: 300 }}
					renderInput={(params) => <TextField {...params} label='City' />}
				/>
				{/* <Button variant='contained' component='label'>
					Upload
					<input hidden accept='image/*' multiple type='file' />
				</Button> */}
				<Button variant='contained' component='label'>
					Submit
				</Button>
			</FormControl>
		</div>
	);
};

export default Register;
