import aboutImg from "@/assets/about-img.svg";
import Image from "next/image";
import { CardChecklist, Check2, Wifi } from "react-bootstrap-icons";
import qualityTutor from "@/assets/quality-tutor.webp";

export default function Profile() {
	return (
		<div className="my-10 text-center px-3 ">
			<h2 className="font-bold text-center">Ahlinya di Bidang Teknik Kimia</h2>
			<p className="font-light">Torche Education adalah Start-Up Teknologi Pendidikan pertama yang membantu anda belajar dalam bidang teknik khususnya di bidang Teknik Kimia.</p>
			<Image src={aboutImg} alt="About Image" className="" width={400} height={300} />
			<p className="font-light text-left">
				Torche memiliki lebih dari 30 mata pelajaran teknik kimia, dengan 800 siswa unik yang tersebar di lebih dari 8 universitas. Kami berkomitmen untuk menyediakan pendidikan tinggi yang cepat, komprehensif, dan berstandar internasional
				di bidang teknik kimia, teknik bioproses, dan pada akhirnya semua siswa engineering di seluruh dunia.{" "}
			</p>
			<div className="flex flex-col gap-2 my-7">
				<div className="flex gap-2 w-full items-start">
					<div className="rounded-full border-2 border-blue-600 p-3 w-fit">
						<CardChecklist color="blue" size={25} />
					</div>
					<div className="font-light text-left">
						<p className="font-bold text-lg mb-2">Internationally Standardized Curriculum</p>
						<p>Torche menyediakan kurikulum teknik kimia terbaik dari 5 universitas terbaik di Indonesia yang digabungkan dengan 5 universitas terbaik di dunia.</p>
					</div>
				</div>
				<div className="flex gap-2 w-full items-start">
					<div className="rounded-full border-2 border-blue-600 p-3 w-fit">
						<Check2 color="blue" size={25} />
					</div>
					<div className="font-light text-left">
						<p className="font-bold text-lg mb-2">Full Online</p>
						<p>Torche mengadakan kelas sesuai permintaan dengan platform rapat premium (Google Meet dan Zoom Meetings) dan materi materi yang terintegrasi ke akun Google Workspace Anda.</p>
					</div>
				</div>
				<div className="flex gap-2 w-full items-start">
					<div className="rounded-full border-2 border-blue-600 p-3 w-fit">
						<Wifi color="blue" size={25} />
					</div>
					<div className="font-light text-left">
						<p className="font-bold text-lg mb-2">Trusted</p>
						<p>Semua tutor dari Torche merupakan praktisi yang berkualitas dan terlatih secara khusus di bidang teknik kimia dalam menyampaikan materi yang sesuai dengan kebutuhan siswa kami dari seluruh Indonesia. </p>
					</div>
				</div>
			</div>
			<Image src={qualityTutor} className="w-full" width={400} alt="Quality Tutor" />
			<div className="text-left my-4 font-light">
				<h2 className="font-bold">Tutors Background</h2>
				<p>Torche memiliki tutor yang ahli di bidang teknik kimia dan telah berpengalaman bekerja di perusahaan nasional maupun multinasional, baik di Indonesia maupun di luar negeri.</p>
				<p>Berikut beberapa perusahaan besar dimana para tutor dari Torche Education mendapatkan pengalaman dan menjadi expertise di bidang teknik kimia. </p>
			</div>
		</div>
	);
}
