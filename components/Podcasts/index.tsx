import LatestDummy from "assets/images/LatestDummy.png";
import voiceDummy from "assets/images/voiceDummy.png";
import Image from "next/image";
import { Microphone2, VideoCircle, VideoHorizontal } from "iconsax-react";
// export interface IPodcastsProps {

// }
const Podcasts = (/* props: IPodcastsProps */) => {
	return (
		<>
			<h3 className=" m-1 flex w-28 items-center justify-between  rounded-lg  font-bold text-chamedoon">
				<Microphone2 variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">پادکست ها</p>
			</h3>
			{/* a single Movie or Item */}
			<div
				style={{
					backgroundImage: `url(${LatestDummy.src}) `,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
					backgroundColor: "#262630",
				}}
				className=" mt-5 box-border grid  aspect-video w-full grid-cols-2 grid-rows-2   justify-center gap-6 overflow-hidden rounded-xl p-5 font-IRANSans text-white ">
				<div className="max-w-prose break-normal  text-sm font-bold ">
					فصل چهارم – قسمت صد و هشتم – مهران مدیری
				</div>
				<div className="flex flex-col justify-end">
					<span className="text-sm font-normal text-opacity-70">کانال:</span>
					<span className="text-sm font-normal text-chamedoon">کتاب باز</span>
				</div>
				<div className="  col-start-1 row-start-1  row-end-3 flex rounded-lg ">
					<div className="relative aspect-square h-full w-full [&>*]:rounded-lg">
						<Image
							placeholder="blur"
							alt="movies"
							src={voiceDummy}
							layout="fill"
							objectFit="fill"
							quality={100}
						/>
						<VideoCircle
							variant="Bulk"
							className=" absolute right-2 bottom-2 h-fit w-5/12 text-black [&>path+path]:text-chamedoon"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Podcasts;
