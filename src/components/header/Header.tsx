import Logo from "../../../public/assets/img/Torche_Logo-01_White.png";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/Header.module.css";
import {useState} from 'react';
import Link from 'next/link'
import { useNavigate } from "react-router-dom";


const Header = () => {

	// const [toggle, setToggle] = useState(false);
	// const klik = () => {
	// 	setToggle(!toggle);
	// }


	return (
		<header id={styles.header}>
			<div className="d-flex justify-content-around">
				<div className={styles.logo}>
						<Link href="/">
							<Image src={Logo} alt="test" />
						</Link>
				</div>
				<nav id="navbar" className={`d-flex ${styles.navbar}`}>
					<ul>
						<li>
							<Link href="/" className={`nav-link scrollto ${styles.active}`}>Beranda</Link>
						</li>
						<li>
							<Link className="nav-link scrollto" href="/#about">Tentang Kami</Link>
						</li>
						<li>
							<Link className="nav-link scrollto" href="/#services">Layanan</Link>
						</li>
						<li>
							<Link className="nav-link scrollto" href="/tutors">Tutor</Link>
						</li>
						<li>
							<Link className="nav-link scrollto" href="/events">Event</Link>
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
									<Link href="/courses">Mata Kuliah</Link>
								</li>
								<li>
									<Link href="/registration">Mendaftar Kelas</Link>
								</li>
								<li>
									<Link href="/pricing">Harga</Link>
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
									<Link href="/che-calculator">Web Calculator</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/careers">Karir</Link>
						</li>
						<li className={styles.dropdown}>
							<a href="#">
								<i>
									<Icon.Globe />
								</i>
							</a>
							<ul>
								<li>
									<Link href="/en">English</Link>
								</li>
								<li>
									<Link className={styles.active} href="/"></Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className={`dropdown navbarMobile ${styles.mobileNavToggle}`}>
						<button className="">
							<Icon.List />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
