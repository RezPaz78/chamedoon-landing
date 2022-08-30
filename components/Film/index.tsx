import { ArrowDown, PlayCircle } from "iconsax-react";
import FilmImage from "@assets/images/film.png";
import Image from "next/image";

const Film = () => {
	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans">
			<div className="relative text-center hover:cursor-pointer">
				<Image src={FilmImage} alt="film" />
				<PlayCircle size="90" color="#000" className="absolute top-10 right-28" />
			</div>
			<div className="flex w-full items-center justify-between rounded-b-xl bg-white px-5 py-3">
				<div>
					<h4 className="text-sm font-normal text-black">من یک کاتولیک هستم</h4>
					<span className="text-xs font-normal text-[#CDCDCD]">مستند</span>
				</div>
				<ArrowDown color="#000" size="20" />
			</div>
		</div>
	);
};

export default Film;
