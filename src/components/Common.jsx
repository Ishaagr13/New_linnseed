
import React, { useState } from 'react'
import axios from 'axios';

function Common(props) {


	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event, property) => {
		setData({ ...data, [property]: event.target.value });
	};

	const submitForm = (event) => {
		event.preventDefault();

		axios.post("http://localhost:8891/api/users", data).then((response) => {
			console.log(response.data);
			console.log("User Registered Successfully")

		}).catch((error) => {
			console.log(error);
			console.log("Invalid Credentials!");
		});
	};




	return (
		<>
			<div className="form-container" style={{ width: '500px', height: '400px', margin: '50px auto' }}>

				<form onSubmit={submitForm} class="login-form" name="signup" action="" method="post">
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							onChange={(e) => handleChange(e, "email")}
							value={data.email} />
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1"
							onChange={(e) => handleChange(e, "password")}
							value={data.password} />
					</div>

					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</>
	)
}

export default Common