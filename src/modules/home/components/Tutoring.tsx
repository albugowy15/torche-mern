import { ListBenefits } from "../dummy-data";

function BenefitBox({ title, desc, Icon }: { title: string; desc: string; Icon: any }) {
	return (
		<div className="rounded-xl w-full flex flex-col justify-center gap-1 p-6 text-center items-center bg-[#0b122a]">
			<div className="mb-4 text-slate-300">
				<Icon size={50} />
			</div>
			<h3 className="font-bold my-0">{title}</h3>
			<p className="my-0 text-sm">{desc}</p>
		</div>
	);
}

export default function Tutoring() {
	return (
		<section className="py-16 px-3 bg-[#121d42] text-white">
			<h2 className="font-bold text-center">Kenapa tutoring bareng Torche</h2>
			<p className="text-center my-6 text-sm">Tidak hanya memberikan kurikulum teknik kimia dengan kualitas terbaik, Torche juga memberikan benefit lain yang tidak diberikan oleh kompititor kami.</p>
			<div className="flex flex-col lg:flex-row w-[80%] mx-auto gap-6 lg:gap-10">
				{ListBenefits.map((b, index) => (
					<BenefitBox key={index} title={b.title} desc={b.description} Icon={b.icon} />
				))}
			</div>
			<div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-4 my-7 lg:my-14">
				<div className="mx-auto text-center">
					<p className="font-bold text-5xl my-0 mb-3">864</p>
					<p className="text-sm">Unique Students*</p>
				</div>
				<div className="mx-auto text-center">
					<p className="font-bold text-5xl my-0 mb-3">1552</p>
					<p className="text-sm">Classes*</p>
				</div>
				<div className="mx-auto text-center">
					<p className="font-bold text-5xl my-0 mb-3">9/10</p>
					<p className="text-sm">Ratings from students*</p>
				</div>
				<div className="mx-auto text-center">
					<p className="font-bold text-5xl my-0 mb-3">22</p>
					<p className="text-sm">High Quality Tutors</p>
				</div>
			</div>
			<p className="text-center text-sm">*data from 2021</p>
		</section>
	);
}
