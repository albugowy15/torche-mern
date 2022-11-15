import Image from "next/image";
import heroImage from "@/assets/hero-img.webp";
import heroBg from "@/assets/hero-bg.webp";

export default function HeroSection() {
	return (
		<>
			<div className="bg-darkBlue text-white p-7">
				<div className="flex gap-3 justify-between items-center mx-auto">
					<div>
						<Image className="mx-auto mb-4" src={heroImage} width={350} alt="Hero Image" />
						<h1 className="font-bold text-4xl px-4 text-center">
							Menjadi Expert di <span className="text-blue-500">Bidang Teknik</span>
						</h1>
						<p className="font-light text-lg text-center my-4">Bersama Torche, Learning Engineering with No Speed Limit</p>
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
