import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import NavHeader from './NavHeader';
import { useNavigate } from 'react-router-dom';


function SigninForm() {

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event, property) => {
		setData({ ...data, [property]: event.target.value });
	};
	const resetData = () => {
		setData({
			email: "",
			password: "",
		});
	};
	
	const submitForm = async (event) => {
		event.preventDefault();
		// axios.post("http://localhost:8891/api/signin", data)


		try {
			const response = await axios.post('http://localhost:8891/api/signin', data);
			console.log(response.data);
			// Handle successful login (e.g., redirect or show success message)
		  } catch (error) {
			console.error(error);
			// Handle login error (e.g., display an error message)
		  }

		// .then((response) => {
		// 	console.log(response.data);
		// 	Swal.fire({
		// 		title: "Login Successfull",
		// 		text: "You have successfully logged in!",
		// 		icon: "success",
		// 	});
		// }).catch((error) => {
		// 	console.log(error);
		// 	if (error.response.status === 401) {
		// 	toast.error("Invalid Credentials!", {
		// 		position: "top-right",
		// 		autoClose: 5000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 	});
		// 	resetData();
		// }

		// });
		
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
			<NavHeader value="Sign In" />
			<section>
				<div className="container pt-4 pb-4">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<div className="card shadow border-0 rounded-0 ">
								<div className="card-header border-0 bg-white pt-3">
									<h3>Sign <b>In</b></h3>
									<p className="text-muted">Sign for seller and buyer</p>
								</div>
								<div className="card-body pt-0">
									<form className="login-form" name="signup" action="" method="post"
										// onSubmit={handleSubmit}
										onSubmit={submitForm}>
										<input type="hidden" name="user_type" value="buyer" />
										<div className="form-floating mb-3">
											<select className="form-select" id="floatingseller" aria-label="join us" fdprocessedid="xv32jk">
												<option value="">Choose user type</option>
												<option value="seller">Seller</option>
												<option value="buyer" disabled="" >Buyer</option>
												<option value="seller">Admin</option>
											</select>
											<label htmlFor="floatingseller">Join as</label>
										</div>

										<div className="form-floating mb-3">
											<input id="email" name="email" type="text" className="form-control" placeholder="Email"
												// value={email}
												// onChange={e => setEmail(e.target.value)}

												onChange={(e) => handleChange(e, "email")}
												value={data.email}
											/>
											<label htmlFor="email">Email Address</label>
										</div>

										<div className="form-floating mb-3">
											<input id="password" name="password" type="password" className="form-control" placeholder="Password"
												// value={password}
												// onChange={e => setPassword(e.target.value)}
												onChange={(e) => handleChange(e, "password")}
												value={data.password}
											/>
											<label htmlFor="password">password</label>
										</div>
										<div className="form-floating mb-3">
											<button type='submit' style={{ backgroundColor: "#AC7E64", border: 'none', padding: '8px 240px', color: 'white' }}>
												JOIN
											</button>
										</div>


									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SigninForm