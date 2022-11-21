import Image from "next/image";
import heroImage from "@/assets/home/hero-img.webp";
import heroBg from "@/assets/home/hero-bg.webp";

export default function HeroSection() {
	return (
		<>
			<div className="bg-darkBlue text-white p-7">
				<div className="flex flex-col lg:flex-row items-center gap-6 justify-center">
					<Image className="mx-auto mb-4 w-3/4 lg:order-last lg:w-5/12" src={heroImage} alt="Hero Image" />
					<div className="text-center lg:text-left lg:w-[40%]">
						<h1 className="font-bold text-4xl px-4 lg:text-6xl">
							Menjadi Expert di <span className="text-blue-500">Bidang Teknik</span>
						</h1>
						<p className="font-light text-lg my-4">Bersama Torche, Learning Engineering with No Speed Limit</p>
						<div className="flex gap-4 text-lg my-6 justify-center">
							<button className="py-2.5 px-8 bg-blue-500 rounded-full text-sm font-rajdhani font-semibold">Register fo Class</button>
							<button className="py-2 px-4 bg-white text-black rounded-full text-sm font-rajdhani font-semibold">Services</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
