import { ArrowDown, PlayCircle } from "iconsax-react";
import FilmImage from "@assets/images/film.png";
import Image from "next/image";

export interface IFilmProps {
	id: number;
	fa_name: string;
	image: string;
	type: string;
	link: string; // for video src
}
const Film = (props: IFilmProps) => {
	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans">
			<div className="relative text-center hover:cursor-pointer">
				<Image width={300} height={140} src={props.image ?? FilmImage} alt={props.fa_name} />
				<PlayCircle size="90" color="#000" className="absolute top-10 right-28" />
			</div>
			<div className="flex w-full items-center justify-between rounded-b-xl bg-white px-5 py-3">
				<div>
					<h4 className="text-sm font-normal text-black">{props.fa_name}</h4>
					<span className="text-xs font-normal text-[#CDCDCD]">{props.type}</span>
				</div>
				<ArrowDown color="#000" size="20" />
			</div>
		</div>
	);
};

export default Film;
