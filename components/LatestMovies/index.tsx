import LatestDummy from "assets/images/LatestDummy.png";
import Image from "next/image";
import { VideoHorizontal } from "iconsax-react";
// export interface ILatestMoviesProps {

// }
const LatestMovies = (/* props: ILatestMoviesProps */) => {
	return (
		<>
			<h3 className=" m-1 flex w-36 items-center justify-between  rounded-lg  font-bold text-chamedoon">
				<VideoHorizontal variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">جدیدترین فیلم‌ها</p>
			</h3>
			{/* a single Movie or Item */}
			<div className="relative mt-5 box-border aspect-video w-3/4 justify-center rounded-xl ">
				<Image
					placeholder="blur"
					alt="movies"
					src={LatestDummy}
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
			</div>
			<div className="relative mt-5 box-border aspect-video w-3/4 justify-center rounded-xl ">
				<Image
					placeholder="blur"
					alt="movies"
					src={LatestDummy}
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
			</div>
			<div className="relative mt-5 box-border aspect-video w-3/4 justify-center rounded-xl ">
				<Image
					placeholder="blur"
					alt="movies"
					src={LatestDummy}
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
			</div>
		</>
	);
};

export default LatestMovies;
