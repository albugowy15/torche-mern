import Image from "next/image";
import client1 from "@/assets/home/client-1.webp";
import client2 from "@/assets/home/client-2.webp";
import client3 from "@/assets/home/client-3.webp";
import client4 from "@/assets/home/client-4.webp";
import client5 from "@/assets/home/client-5.webp";
import client6 from "@/assets/home/client-6.webp";
import client7 from "@/assets/home/client-7.webp";
import client8 from "@/assets/home/client-8.webp";

export default function Trusted() {
	return (
		<section className="py-10 bg-[#ecf5ff] text-center px-3">
			<h2 className="font-bold">Trusted by Academics & Professionals</h2>
			<p className="text-sm font-light">Dipercaya oleh mahasiswa, insinyur, praktisi dan organisasi chemical engineering dari seluruh Indonesia yang juga mencakup lingkup internasional</p>
			<div className="grid grid-cols-1">
				<div className="bg-white border mx-auto p-4">
					<Image src={client1} alt="Universitas Indonesia" width={400} />
				</div>
				<div className="bg-white border mx-auto p-4">
					<Image src={client1} alt="Universitas Indonesia" width={400} />
				</div>
			</div>
		</section>
	);
}
