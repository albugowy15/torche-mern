import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Teams from "../components/Teams";
import Trusted from "../components/Trusted";
import Tutoring from "../components/Tutoring";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<Profile />
			<Services />
			<Tutoring />
			<Teams />
			<Trusted />
		</>
	);
}
