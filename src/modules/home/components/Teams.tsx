import Image, { StaticImageData } from "next/image";
import { Icon } from "react-bootstrap-icons";
import { ListTeams } from "../dummy-data";

type SociaProps = {
	Icon: Icon;
	url: string;
};
interface TeamCardProps {
	name: string;
	position: string;
	role: string;
	profilePic: StaticImageData;
	social: SociaProps[];
}

function TeamCard({ name, position, role, profilePic, social }: TeamCardProps) {
	return (
		<div className="mx-auto rounded-full overflow-hidden relative group">
			<Image src={profilePic} alt={name} className="w-[350px] lg:w-[300px]" />
			<div className="hidden absolute bg-blue-800 w-full h-full top-0 bg-opacity-60 group-hover:flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center text-white">
					<p className="font-bold text-xl">{name}</p>
					<p className="text-sm italic my-0">{position}</p>
					<p className="text-sm italic my-0">{role}</p>
					<div className="flex justify-center gap-2 mt-3">
						{social.map((item, index) => (
							<item.Icon key={index} className="hover:cursor-pointer" onClick={() => window.open(item.url, "_blank")} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Teams() {
	return (
		<section className="py-7 mx-auto">
			<h2 className="font-bold text-center">Meet Our Teams</h2>
			<p className="text-center">Together with us, let&apos;s study from of the top experts to advance and prepare in your career in chemical engineering. Our full team.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[80%] mx-auto my-10">
				{ListTeams?.map((team, index) => (
					<TeamCard key={index} {...team} />
				))}
			</div>
		</section>
	);
}
