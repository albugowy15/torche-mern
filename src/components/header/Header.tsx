import Logo from "../../../public/assets/img/Torche_Logo-01_White.png";
import Image from "next/image";
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
	return (
		<header id="header">
			<div className="d-flex justify-content-between">
				<div className="logo">
					<a href="https://torche.app">
						<Image src={Logo} alt="test" />
					</a>
				</div>

				<nav id="navbar" className="navbar">
					<ul>
						<li>
							<a className="nav-link scrollto active" href="https://torche.app">
								Beranda
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="https://torche.app/#about">
								Tentang Kami
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="https://torche.app/#services">
								Layanan
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="https://torche.app/tutors">
								Tutor
							</a>
						</li>
						<li>
							<a className="nav-link scrollto" href="https://torche.app/events">
								Event
							</a>
						</li>
						<li className="dropdown">
							<a className="nav-link scrollto" href="#">
								<span>Kursus</span> <i className="bi bi-chevron-down"></i>
							</a>
							<ul>
								<li>
									<a href="https://torche.app/courses">Mata Kuliah</a>
								</li>
								<li>
									<a href="https://torche.app/registration">Mendaftar kelas</a>
								</li>
								<li>
									<a href="https://torche.app/pricing">Harga</a>
								</li>
							</ul>
						</li>
						<li className="dropdown">
							<a className="nav-link scrollto" href="#">
								<span>Apps</span> <i className="bi bi-chevron-down"></i>
							</a>
							<ul>
								<li>
									<a href="https://torche.app/che-calculator">Web Calculator</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="https://torche.app/careers">Karir</a>
						</li>
						<li className="dropdown">
							<a href="#">
								<i><Icon.Globe/></i>
							</a>
							<ul>
								<li>
									<a href="https://torche.app/en">English</a>
								</li>
								<li>
									<a className="active" href="https://torche.app">
										Indonesia
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<i className="mobile-nav-toggle"><Icon.List/></i>
				</nav>
			</div>
		</header>
	);
};

export default Header;
