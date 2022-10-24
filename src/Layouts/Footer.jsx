import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="footer-logo">
								<Link className="navbar-brand" to="#">
									<img src="assets/images/logo.png" alt="Travel Airport Plus" className="img-fluid footer-logo" />
								</Link>
							</div>
							<div className="footer-content mt-4">
								<h3 className="footer-heading">Customer Support</h3>
								<p className="footer-para">Suite 34 , Anglesey Business Centre, Anglesey Road, <br></br> Burton upon Trent,
									DE14 3NT.</p>
							</div>
							<div className="footer-content mt-4">
								<h3 className="footer-heading">Phone Number</h3>
								<p className="footer-para">01283 899947</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="footer-sub">
								<h3 className="footer-heading">Don’t miss our  Exclusive offers</h3>
								<div className="row g-3">
									<div className="col-sm-6">
										<input type="email" className="form-control" placeholder="Subscribe to us" aria-label="City" />
									</div>
									<div className="col-sm">
										<button type="submit" className="btn btn-success mb-3">Subscribe</button>
									</div>
								</div>
							</div>
							<div className="row mt-4">
								<h3 className="footer-heading">Customer Support</h3>
								<div className="col">
									<ul className="footer-links">
										<li>
											<Link to="/blog">Blogs</Link>
										</li>
										<li>
											<Link to="/all-airports">All Airports</Link>
										</li>
										<li>
											<Link to="/terms-and-conditions">Terms & Conditions</Link>
										</li>
									</ul>
								</div>
								<div className="col">
									<ul className="footer-links">
										<li>
											<Link to="/faqs">FAQs</Link>
										</li>
										<li>
											<Link to="/policy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link to="/sitemap">Sitemap</Link>
										</li>
									</ul>
								</div>
								<div className="col">
									<ul className="footer-links">
										<li>
											<Link to="/airport-guide">Airport Guide</Link>
										</li>
										<li>
											<Link to="/about">About Us</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
							<div className="copy-right-text">
								<p className="footer-para">Copyright © 2017-2022 Travel Airport Plus Ltd. All Rights Reserved.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 copy-right-text">
							<span className="footer-para">Follow Us: </span>
							<span id="facebook" className="fa-brands fa-facebook-f"></span>
							<span className="fa-brands fa-instagram"></span>
							<span className="fa-brands fa-linkedin"></span>
							<span className="fa-brands fa-twitter	"></span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;