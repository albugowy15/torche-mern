import Logo from "../../../public/assets/img/Torche_Logo-01_White.png";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/Header.module.css";
import {useEffect, useState} from 'react';
import Link from 'next/link'
import { useNavigate } from "react-router-dom";


const Header = () => {

	// const [toggle, setToggle] = useState(false);
	// const klik = () =	// }

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	},[])

	return (
		<header className=" bg-[#0b122a] drop-shadow-xl shadow-white text-white">
			<div className="max-w-6xl flex justify-between items-center mx-auto">
				<Image src={Logo} alt="Logo Torche" width={130} />
				<nav>
					<ul className="flex justify-around gap-8 font-light items-center">
						{ListMenu.map((menu, index) => (
							<li key={index} className="group relative">
								<Link className="group-hover:text-blue-700 transition-colors duration-500" href={menu.url ? menu.url : ""}>
									{menu.name}
									{menu.sub && <ChevronDown className="inline-block ml-1" size={10} />}
								</Link>
								{menu.sub && (
									<ul className="hidden group-hover:block absolute bg-[#0b122a] shadow-lg p-3 w-52 space-y-3 transition-all">
										{menu.sub.map((item, index) => (
											<li className="group-hover:block" key={index}>
												<Link href={item.url}>{item.name}</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
		<header id={styles.header} className="w-full">
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
							<Link className="hover:text-blue-700 transition-colors duration-500" href="/">
								<Globe2 />
							</Link>
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
									<Link className={styles.active} href="/">Indonesia</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className={`${styles.mobileNavToggle}`}>
						<button className="mobileNavToggle navbarMobile ">
							<Icon.List />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
