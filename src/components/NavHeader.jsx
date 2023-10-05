import React from 'react'

const NavHeader = (props) => {
  return (
   <>
   <section className="nav-header">
				<div className="nav-cover">

					<div className="row pt-5 pb-5 text-white">
						<h1 className="text-center">{props.value}</h1>
						<nav aria-label="breadcrumb ">
							<ol className="breadcrumb d-flex justify-content-center">
								<li className="breadcrumb-item"><a href="/front" className="text-white text-decoration-none">Home</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page"><a href="#" className="text-light text-decoration-none">{props.value}</a></li>
							</ol>
						</nav>
					</div>

				</div>
			</section>
   </>
  )
}

export default NavHeader