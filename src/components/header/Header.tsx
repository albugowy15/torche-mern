import Logo from "../../../public/assets/img/Torche_Logo-01_White.png";
import Image from "next/image";
import { Globe2 } from "react-bootstrap-icons";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";

const ListMenu = [
	{ name: "Beranda", url: "/" },
	{ name: "Tentang Kami", url: "/about" },
	{ name: "Layanan", url: "/services" },
	{ name: "Tutor", url: "/tutors" },
	{ name: "Event", url: "/events" },
	{
		name: "Kursus",
		sub: [
			{ name: "Mata Kuliah", url: "/courses" },
			{ name: "Mendaftar Kelas", url: "/register" },
			{ name: "Harga", url: "/pricing" },
		],
	},
	{ name: "Apps", sub: [{ name: "Web Calculator", url: "/calculator" }] },
	{ name: "Karir", url: "/careers" },
];

const Header = () => {
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
						<li>
							<Link className="hover:text-blue-700 transition-colors duration-500" href="/">
								<Globe2 />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
