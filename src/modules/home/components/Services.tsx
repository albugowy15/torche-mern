import { ListServices } from "../dummy-data";

function ServiceBox({ title, description, Icon, color }: { title: string; description: string; Icon: any; color: string }) {
	return (
		<div className="bg-white rounded-xl p-3 shadow-lg flex items-center gap-3">
			<div>
				<Icon color={color} size={60} />
			</div>
			<div>
				<p className="font-bold">{title}</p>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<section className="bg-[#ecf5ff] py-10 px-3">
			<h2 className="font-bold text-center text-4xl">Services</h2>
			<p className="text-center my-4">Torche menyediakan berbagai layanan edukasi yang mendukung kamu untuk menjadi seorang insinyur teknik kimia yang berkualitas tinggi. Pelajari lebih lanjut</p>
			<div className="flex flex-col gap-8 my-10">
				{ListServices.map((s, index) => (
					<ServiceBox key={index} title={s.title} description={s.description} Icon={s.Icon} color={s.color} />
				))}
			</div>
		</section>
	);
}
