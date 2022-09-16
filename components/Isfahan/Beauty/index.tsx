import ISFDummy1 from "assets/images/ISFDummy1.png";
import Image from "next/image";
import { Play, VideoCircle, VideoHorizontal } from "iconsax-react";
import Pattern from "assets/Icons/Pattern.svg";
// export interface ILatestMoviesProps {

// }
const IsfBeauty = (/* props: IIsfBeautyProps */) => {
	return (
		<>
			<div className="flex w-full flex-col  px-5">
				<Pattern className="justify-self-center" />
				<h3 className=" m-1 flex w-28 items-center justify-between  rounded-lg  font-bold text-chamedoon">
					<VideoHorizontal variant="Bold" />
					<p className=" font-IRANSans text-base font-bold text-white ">اصفهان زیبا</p>
				</h3>
				{/* a single Movie or Item */}
				<div className="relative mt-5 aspect-square w-1/2   items-center justify-center rounded-lg  shadow-lg  [&>*]:rounded-lg ">
					<Image
						placeholder="blur"
						alt="movies"
						src={ISFDummy1}
						layout="fill"
						objectFit="fill"
						quality={100}
					/>
					<VideoCircle
						variant="Bulk"
						className=" absolute top-1/4 left-1/4 h-1/2 w-1/2  text-black [&>path+path]:text-chamedoon"
					/>
				</div>

				<Pattern className="rotate-180 justify-self-center pb-5" />
			</div>
		</>
	);
};

export default IsfBeauty;
