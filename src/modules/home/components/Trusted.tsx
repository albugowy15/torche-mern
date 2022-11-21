import Image, { StaticImageData } from "next/image";
import { ListClients } from "../dummy-data";

function ClientBox({ name, image }: { name: string; image: StaticImageData }) {
	return (
		<div className="bg-white flex items-center justify-center border mx-auto p-4 w-full my-auto h-[200px] overflow-hidden max-h-48">
			<Image src={image} alt={name} />
		</div>
	);
}

export default function Trusted() {
	return (
		<section className="py-10 bg-[#ecf5ff] text-center px-3">
			<h2 className="font-bold">Trusted by Academics & Professionals</h2>
			<p className="text-sm font-light">Dipercaya oleh mahasiswa, insinyur, praktisi dan organisasi chemical engineering dari seluruh Indonesia yang juga mencakup lingkup internasional</p>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:w-[80%] mx-auto">
				{ListClients.map((client, index) => (
					<ClientBox {...client} key={index} />
				))}
			</div>
		</section>
	);
}
