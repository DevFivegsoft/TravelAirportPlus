import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section className="topbar">
                <div className="container">
                    <div className="row  desktop-row">
                        <div className="col-lg-6 col-md-5 col-sm-6 col-xs-6">
                            <div className="social-icon float-start">
                                <span className="footer-para">Follow Us: </span>
                                <span id="facebook" className="fa-brands fa-facebook-f"></span>
                                <span className="fa-brands fa-square-instagram"></span>
                                <span className="fa-brands fa-linkedin"></span>
                                <span className="fa-brands fa-twitter"></span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 nav-detail">
                            <div className="nav-number">
                                <div className="d-flex align-items-center text-white-50 rounded box-shadow"> 
                                    <i className="fa-regular fa-clock" style={{ color: "#fff", paddingRight: "10px" }} />
                                    <div className="lh-100">
                                        <h6 className="mb-0 box-title lh-100" style={{ color: "#fff", fontWeight: "600" }}> Mon-Fri 9:00 To 17:00</h6> 
                                        </div> 
                                        <i className="fa fa-phone" style={{ color: "#fff", paddingRight: "10px" }} />
                                    <div className="lh-100">
                                        <h6 className="mb-0 box-title lh-100" style={{ color: "#fff", fontWeight: "600" }}> 01283 899947</h6> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header id="desktop-header">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3">
					<nav class="navbar navbar-expand-lg">
						<div class="container">
							<a class="navbar-brand" href="#"> <img src="assets/images/logo.png" alt="Travel Airport Plus" class="img-fluid logo" /> </a>
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
							<div class="collapse navbar-collapse" id="navbarNavDropdown">
								<ul class="navbar-nav m-auto">
									<li class="nav-item"> <a class="nav-link active" aria-current="page" href="/">Home</a> </li>
									<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="/all-airports" data-bs-toggle="dropdown"> Airport Parking </a>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="/airport-parking">Birmingham Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">Bristol Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">Edinburgh Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">East Midlands Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">Gatwick Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">Glasgow Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking">Heathrow Airport Parking</a></li>
											<li><a class="dropdown-item" href="/airport-parking"> 7 More Choices </a></li>
										</ul>
									</li>
									<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript:void(0);" data-bs-toggle="dropdown">  Hotels  </a>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#"> UK &raquo; </a>
												<ul class="submenu dropdown-menu">
													<li> <a class="dropdown-item" href="/hotel">London</a> </li>
													<li> <a class="dropdown-item" href="/hotel">BlackPool</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Edinburgh</a> </li>
													<li> <a class="dropdown-item" href="/hotel">LiverPool</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Glasgow</a> </li>
												</ul>
											</li>
											<li><a class="dropdown-item" href="#"> USA &raquo; </a>
												<ul class="submenu dropdown-menu">
													<li> <a class="dropdown-item" href="/hotel">NewYork</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Les Vegas</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Orlando</a> </li>
													<li> <a class="dropdown-item" href="/hotel">All USA</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Florida</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Sans Francisco</a> </li>
												</ul>
											</li>
											<li><a class="dropdown-item" href="#"> Asia &raquo; </a>
												<ul class="submenu dropdown-menu">
													<li> <a class="dropdown-item" href="/hotel">Dubai</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Singapore</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Maldives</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Thailand</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Pattaya</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Phuket</a> </li>
												</ul>
											</li>
											<li><a class="dropdown-item" href="#"> Europe &raquo; </a>
												<ul class="submenu dropdown-menu">
													<li> <a class="dropdown-item" href="/hotel">Amsterdam</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Disneyland</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Paris</a> </li>
													<li> <a class="dropdown-item" href="/hotel">France</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Portugal</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Albufrira</a> </li>
												</ul>
											</li>
											<li><a class="dropdown-item" href="#"> Mediterranean &raquo; </a>
												<ul class="submenu dropdown-menu">
													<li> <a class="dropdown-item" href="/hotel">Benidorm</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Barcelona</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Spain</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Tenerife</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Majorca</a> </li>
													<li> <a class="dropdown-item" href="/hotel">Malta</a> </li>
												</ul>
											</li>
										</ul>
									</li>
									<li class="nav-item"> <a class="nav-link" href="/parking-types">Parking Types</a> </li>
									<li class="nav-item"> <a class="nav-link" href="/faqs">Faqs</a> </li>
									<li class="nav-item">
										<a class="nav-achr" href='/help-desk'>
											<button class="btn btn-primary" type="button">Customer Support</button>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
            <Outlet />
        </>
    )
}

export default Header;