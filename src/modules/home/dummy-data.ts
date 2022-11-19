import { Easel2, People, PersonVideo3, Mortarboard, Pen, Book, Calendar4Week, CameraReels, ChatSquareText, Twitter, JournalAlbum, Linkedin, Instagram, Facebook } from "react-bootstrap-icons";

import team1 from "@/assets/home/team-1.webp";
import team2 from "@/assets/home/team-2.webp";
import team3 from "@/assets/home/team-3.webp";
import team4 from "@/assets/home/team-4.webp";

export const ListServices = [
	{
		Icon: Easel2,
		title: "Lecturing Class",
		description: "Kelas tutor terdiri dari penjelasan materi dari tutor kami disertai contoh pemecahan masalahnya khususnya di bidang teknik kimia.",
		color: "#FF6442",
	},
	{
		Icon: People,
		title: "Consultation Class",
		description: "Siswa dapat bertanya tentang materi, pekerjaan rumah, tugas, dan proyek yang berkaitan dengan topik yang dipilih.",
		color: "#FFAE5F",
	},
	{
		Icon: PersonVideo3,
		title: "Exam Preparation Class",
		description: "Kelas persiapan ujian difokuskan bagi siswa yang ingin mengikuti ujian dengan materi yang tersedia.",
		color: "#51C1CB",
	},
	{
		Icon: Mortarboard,
		title: "Kelas Khusus (Advanced)",
		description: "Torche menyediakan kelas custom yang materi pembelajarannya bisa mengikuti kebutuhan siswa.",
		color: "#41cf2e",
	},
	{
		Icon: Pen,
		title: "Kelas Penulisan Karya Ilmiah",
		description: "Kelas yang disediakan bagi siswa yang membutuhkan bimbingan untuk skripsi, thesis, atau penulisan karya ilmiah lainnya.",
		color: "#5885E9",
	},
	{
		Icon: Book,
		title: "Kelas Sekolah Menengah Pertama dan Atas",
		description: "Kelas yang disediakan bagi siswa sekolah menengah (SMP, SMA, dan SMK), termasuk persiapan SBMPTN dan A-Level Test.",
		color: "#0B122A",
	},
];

export const ListBenefits = [
	{
		icon: Calendar4Week,
		title: "Flexible Time",
		description: "Waktu bisa diatur berdasarkan kesepakatan antara siswa dan tutor.",
	},
	{
		icon: CameraReels,
		title: "Free Class Recordings",
		description: "Gratis tanpa dipungut biaya apapun.",
	},
	{
		icon: ChatSquareText,
		title: "After-class Consultation",
		description: "Berlaku selama 7 hari setelah kelas dengan bergabung ke server Discord kami.",
	},
];

export const ListTeams = [
	{
		name: "M Yusuf Arya Ramadhan",
		position: "CEO & CMO",
		role: "Co-founder",
		profilePic: team1,
		social: [
			{
				Icon: Twitter,
				url: "https://twitter.com/arya1302",
			},
			{
				Icon: JournalAlbum,
				url: "https://www.researchgate.net/profile/Muhammad-Ramadhan-27",
			},
			{
				Icon: Instagram,
				url: "https://www.instagram.com/ary.ramadhan/",
			},
			{
				Icon: Linkedin,
				url: "https://www.linkedin.com/in/arya-ramadhan/",
			},
		],
	},
	{
		name: "Felix Pratama",
		position: "COO",
		role: "Co-founder",
		profilePic: team2,
		social: [
			{
				Icon: Instagram,
				url: "https://www.instagram.com/lixpratama/",
			},
			{
				Icon: Linkedin,
				url: "https://www.linkedin.com/in/felix-pratama-257295112/",
			},
		],
	},
	{
		name: "Leon Lukhas Santoso",
		position: "CFO",
		role: "Co-founder",
		profilePic: team3,
		social: [
			{
				Icon: Twitter,
				url: "https://twitter.com/Leonsantoso",
			},
			{
				Icon: Facebook,
				url: "https://www.facebook.com/leon.santoso/",
			},
			{
				Icon: Linkedin,
				url: "https://www.linkedin.com/in/leon-santoso/",
			},
		],
	},
	{
		name: "Sendy Winata",
		position: "CHRO",
		role: "Co-founder",
		profilePic: team4,
		social: [
			{
				Icon: Instagram,
				url: "https://www.instagram.com/sendywee/?hl=en",
			},
			{
				Icon: Linkedin,
				url: "https://id.linkedin.com/in/sendy-winata-941265168",
			},
		],
	},
];
