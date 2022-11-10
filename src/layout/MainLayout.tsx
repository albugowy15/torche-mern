import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
