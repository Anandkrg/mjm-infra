import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<div className="main-con main-footer">
	<div className="container">
		<div className="footer-inner">
			<div className="navbar-brand">
				<Link to="/">
					<h3>MJM INFRA</h3>
				    <p>LAND ACQUISITION & HOLDING</p>
				</Link>
			</div>
			<div className="footer-nav">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Company</Link></li>
					<li><Link to="/service">Services</Link></li>
					<li><Link to="/contact-us">Contact</Link></li>
					<li><Link to="/konkan">Konkan Map</Link></li>
					<li><Link to="/road-map">Road Map</Link></li>
				</ul>
			</div>
			<div className="footer-nav copy-con">
				<ul>
					<li>&copy; <Link to="/">MJM infra</Link> all rights reserved</li>
					<li>Powered by <Link target="_blank" to="https://www.rajmith.com/">RAJMITH</Link></li>
				</ul>
			</div>
			<div className="social-nav">
				<ul>
					<li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
					<li><Link to="#"><i className="fa fa-tumblr" aria-hidden="true"></i></Link></li>
					<li><Link to="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
					<li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
				</ul>
			</div>
		</div>
	</div>
</div>
  );
};

export default Footer;
