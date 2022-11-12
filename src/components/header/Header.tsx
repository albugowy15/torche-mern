import Logo from "../../../public/assets/img/Torche_Logo-01_White.png";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/Header.module.css";

const Header = () => {
	return (
		<header id={styles.header}>
			<div className="d-flex justify-content-around">
				<div className={styles.logo}>
					<a href="https://torche.app">
						<Image src={Logo} alt="test" />
					</a>
				</div>

				<nav id="navbar" className={styles.navbar}>
					<ul>
						<li>
							<a className={`nav-link scrollto ${styles.active}`} href="https://torche.app">
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
						<li className={styles.dropdown}>
							<a className="nav-link scrollto" href="#">
								<span>Kursus</span>{" "}
								<i>
									<Icon.ChevronDown />
								</i>
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
						<li className={styles.dropdown}>
							<a className="nav-link scrollto" href="#">
								<span>Apps</span>{" "}
								<i>
									<Icon.ChevronDown />
								</i>
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
						<li className={styles.dropdown}>
							<a href="#">
								<i>
									<Icon.Globe />
								</i>
							</a>
							<ul>
								<li>
									<a href="https://torche.app/en">English</a>
								</li>
								<li>
									<a className={styles.active} href="https://torche.app">
										Indonesia
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<i className={styles.mobileNavToggle}>
						<Icon.List />
					</i>
				</nav>
			</div>
		</header>
	);
};

export default Header;
