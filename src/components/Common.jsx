
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

function Common(props) {



	const [data, setData] = useState({
		userName: "",
		fullName: "",
		email: "",
		password: "",
		dob: "",
		gender: "",
	});

	const handleChange = (event, property) => {
		setData({ ...data, [property]: event.target.value });
	};

	const submitForm = (event) => {
		event.preventDefault();

		axios.post("http://localhost:8891/api/users", data).then((response) => {
			console.log(response.data);
			console.log("User Registered Successfully")
			Swal.fire({
				title: "Success",
				text: "User Registered Successfully",
				icon: "success",
			});

		}).catch((error) => {
			console.log(error);
			console.log("Invalid Credentials!");
			toast.error(" Invalid Credentials!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
			});

		});
	};




	return (
		<>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="form-container" style={{ width: '500px', padding: '20px', margin: '50px auto' }}>

				<form onSubmit={submitForm} class="login-form" name="signup" action="" method="post">
					<div class="mb-3">
						<label for="username" class="form-label">User Name</label>
						<input type="text" class="form-control" id="username"
							onChange={(e) => handleChange(e, "userName")}
							value={data.userName} />
					</div>
					<div class="mb-3">
						<label for="fullName" class="form-label">Full Name</label>
						<input type="text" class="form-control" id="fullName"
							onChange={(e) => handleChange(e, "fullName")}
							value={data.fullName} />
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1"
							onChange={(e) => handleChange(e, "email")}
							value={data.email} />
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input type="password" class="form-control" id="password"
							onChange={(e) => handleChange(e, "password")}
							value={data.password} />
					</div>
					<div class="mb-3">
						<label for="dob" class="form-label">DOB</label>
						<input type="date" class="form-control" id="dob"
							onChange={(e) => handleChange(e, "dob")}
							value={data.dob} />
					</div>
					<div class="mb-3">
						<label for="gender" class="form-label">Gender</label>
						<select class="form-select" id='gender' onChange={(e) => handleChange(e, "gender")}
							value={data.gender}>
							<option selected>Select</option>
							<option value="M">Male</option>
							<option value="F">Female</option>
						</select>
					</div>



					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</>
	)
}

export default Common