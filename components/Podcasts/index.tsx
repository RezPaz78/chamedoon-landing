import LatestDummy from "assets/images/LatestDummy.png";
import voiceDummy from "assets/images/voiceDummy.png";
import Image from "next/image";
import { Microphone2, VideoCircle, VideoHorizontal } from "iconsax-react";
import { IPodcast } from "types";
import { usePodcasts } from "./api";
import Loading from "@components/Loading";
import { makeBoolean } from "@utils/covertPrimitive";
import Ad from "@components/Ads/BasicImage";
import { useMusicPlayer } from "context/musicPlayer";
// export interface IPodcastsProps {
// }

const Podcast = (props: IPodcast) => {
	const { dispatch } = useMusicPlayer();
	const handlePlay = () => {
		props.link && dispatch({ type: "SET", payload: { played: [], playList: [props.link] } });
	};
	return (
		<div
			style={{
				backgroundImage: `url(${props.image}) `,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "multiply",
				backgroundColor: "#262630",
			}}
			className=" mt-5 box-border grid  aspect-video w-full grid-cols-2 grid-rows-2  justify-center  gap-6 overflow-hidden rounded-xl p-5 font-IRANSans text-white [&>*]:text-lg ">
			<div className="max-w-prose break-normal  text-sm font-bold ">{props.name}</div>
			<div className="flex flex-col justify-end   font-medium">
				<span className="text-sm text-white text-opacity-70">کانال:</span>
				<span className="text-sm  text-chamedoon">{props.channel}</span>
			</div>
			<div className="  col-start-1 row-start-1  row-end-3 flex rounded-lg ">
				<div className="relative aspect-square h-full w-full [&>*]:rounded-lg">
					<Image alt="movies" src={props.image} layout="fill" objectFit="fill" quality={100} />
					<VideoCircle
						onClick={handlePlay}
						variant="Bulk"
						className=" absolute right-2 bottom-2 h-fit w-5/12 text-black [&>path+path]:text-chamedoon"
					/>
				</div>
			</div>
		</div>
	);
};

const PodcastAd = ({ src }: { src: string }) => {
	return (
		<div className=" relative my-5 aspect-video w-full   justify-center overflow-hidden rounded-xl p-5 font-IRANSans text-white ">
			<Ad src={src} />
			<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans text-xs font-semibold text-black">
				تبلیغات
			</p>
		</div>
	);
};

const Podcasts = (/* props: IPodcastsProps */) => {
	const { data, isLoading } = usePodcasts();
	return (
		<>
			<h3 className=" m-1 flex w-28 items-center justify-between  rounded-lg  font-bold text-chamedoon">
				<Microphone2 variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">پادکست ها</p>
			</h3>
			{/* a single Movie or Item */}

			{isLoading ? (
				<Loading />
			) : data ? (
				data.map((item) =>
					makeBoolean(item.is_ad) ? (
						<PodcastAd key={item.id} src={item.image} />
					) : (
						<Podcast {...item} key={item.id} />
					),
				)
			) : (
				"مشکلی پیش آمده است"
			)}
		</>
	);
};

export default Podcasts;
