import Image from "next/image";

export default function HomePage() {
	return (
		<>
			<div className="bg-darkBlue text-white p-7 px-32 rounded-b-md" style={{ borderRadius: "0 0 60% 60% / 10%" }}>
				<div className="flex gap-3 justify-between items-center">
					<div>
						<h1 className="font-bold text-6xl">
							Menjadi Expert di <span className="text-blue-500">Bidang Teknik</span>
						</h1>
						<p className="font-light text-xl">Bersama Torche, Learning Engineering with No Speed Limit</p>
						<div className="flex gap-2 text-lg">
							<button className="py-2 px-4 bg-blue-500 rounded-full text-sm font-rajdhani font-semibold">Register fo Class</button>
							<button className="py-2 px-4 bg-white text-black rounded-full text-sm font-rajdhani font-semibold">Services</button>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[500px] w-full"></div>
		</>
	);
}
