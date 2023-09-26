import React from 'react'
import '../components/Common.css';

const Common = () => {
  return (
    <div>
      <section class="nav-header">
		<div class="nav-cover">
			
				<div class="row pt-5 pb-5 text-white">
					<h1 class="text-center">Sign Up</h1>
					<nav aria-label="breadcrumb ">
						<ol class="breadcrumb d-flex justify-content-center">
							<li class="breadcrumb-item"><a href="/front" class="text-white text-decoration-none">Home</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page"><a href="#" class="text-light text-decoration-none">Sign Up</a></li>
						</ol>
					</nav>
				</div>
			
		</div>
	</section>
    <section>
		<div class="container pt-4 pb-4">
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<div class="card shadow border-0 rounded-0 ">
						<div class="card-header border-0 bg-white pt-3">
							<h3>Sign <b>Up</b></h3>
							<p class="text-muted">Create new account for seller and buyer</p>
						</div>
						<div class="card-body pt-0">
							<form class="login-form" onsubmit="return doValidate();" name="signup" action="" method="post">
								
																<input type="hidden" name="user_type" value="buyer"/>
								<div class="form-floating mb-3">
									<select class="form-select" id="floatingseller" aria-label="join us" fdprocessedid="xv32jk">
										<option value="">Choose user type</option>
										<option value="seller">Seller</option>
										<option value="buyer" disabled="" selected="">Buyer</option>
									</select>
									<label for="floatingseller">Join as</label>
								</div>
								
								<div class="form-floating mb-3">
									<input id="name" name="name" type="text" class="form-control" placeholder="Name" required="" fdprocessedid="3be72r"/>
									<label for="name">Name</label>
								</div>

								<div class="form-floating mb-3">
									<input id="username" name="username" type="text" class="form-control" placeholder="Email" required="" fdprocessedid="rizadj"/>
									<label for="username">Email</label>
								</div>

								<div class="form-floating mb-3">
									<input id="mobile" name="mobile" type="number" class="form-control" placeholder="Mobile" required="" fdprocessedid="gtpg2d"/>
									<label for="mobile">Mobile</label>
								</div>

								<div class="form-floating mb-3">
									<input id="password" name="password" type="password" class="form-control" placeholder="Password" required="" fdprocessedid="r52st7"/>
									<label for="password">password</label>
								</div>

								<div class="common" style={{height:"50px", backgroundColor:"#AC7E64", width:"605px", borderRadius:"2px"}}>
								    <input type="hidden" name="submit_type" value="signup"/>
									<button type="submit" class="btn bg-c-main text-white rounded-0 " fdprocessedid="n02h2" style={{marginLeft:"45%"}}>
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
    </div>
  )
}

export default Common
