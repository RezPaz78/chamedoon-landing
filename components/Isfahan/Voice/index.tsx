import voiceDummy from "assets/images/voiceDummy.png";
import Image from "next/image";
import { Play, VideoCircle, VideoHorizontal } from "iconsax-react";
import Pattern from "assets/Icons/Pattern.svg";
import { useISFSong } from "../api";
import Loading from "@components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useMusicPlayer } from "context/musicPlayer";
// export interface ILatestMoviesProps {
// }

const VoiceItem = ({ data, src }: { data: string; src: string }) => {
	const { dispatch } = useMusicPlayer();
	const handlePlay = () => {
		dispatch({ type: "SET", payload: { played: [], playList: [data] } });
	};
	return (
		<div className="  [&>*]:rounded-lg ">
			<Image alt="صدای شهر" src={src} layout="fill" objectFit="fill" quality={100} />
			<VideoCircle
				onClick={handlePlay}
				variant="Bulk"
				className=" absolute left-4 bottom-2 h-fit w-5/12 text-black [&>path+path]:text-chamedoon"
			/>
		</div>
	);
};

const ISFVoice = (/* props: IISFVoiceProps */) => {
	const { data, isLoading } = useISFSong();

	return (
		<>
			<div className="flex w-full flex-col  ">
				<Pattern className="justify-self-center px-5" />
				<h3 className=" m-1 mx-5 flex w-28 items-center justify-between  rounded-lg  font-bold text-chamedoon">
					<VideoHorizontal variant="Bold" />
					<p className=" font-IRANSans text-base font-bold text-white ">صدای شهر</p>
				</h3>
				{/* a single Movie or Item */}

				{isLoading ? (
					<Loading />
				) : data ? (
					<div className="mt-5 w-full pr-5">
						<Swiper
							modules={[Autoplay]}
							autoplay={{ delay: 3000 }}
							slidesPerView={1.6}
							spaceBetween={20}
							centeredSlides={false}
							loop={true}
							// onLoopFix={() => console.log("loop fix")}
							// onSlideChange={() => console.log("slide change")}
							// onSwiper={(swiper) => console.log(swiper)}
						>
							{data.map(
								(item) =>
									item.link && (
										<SwiperSlide
											className="relative mt-5 aspect-square w-1/2   items-center justify-center rounded-lg  shadow-lg"
											key={item.id}>
											<VoiceItem data={item.link} src={item.image} />
										</SwiperSlide>
									),
							)}
						</Swiper>
					</div>
				) : (
					"مشکلی پیش آمده است"
				)}
				<Pattern className="rotate-180 justify-self-center pb-5" />
			</div>
		</>
	);
};

export default ISFVoice;
