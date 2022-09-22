/* eslint-disable jsx-a11y/no-static-element-interactions */
import dummyFilm from "assets/images/dummyFilm.png";
import Image from "next/image";
import { ForwardItem, Record, VideoHorizontal } from "iconsax-react";
import { useSliderQuery } from "./api";
import { useEffect } from "react";
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Scrollbar } from "swiper";
import { MovieAds } from "@components/Ads";
import PlyrComponent from "@components/Player";
import SliderPlayer from "@components/Player/SliderPlayer";
import Ad from "@components/Ads/BasicImage";
import { useMusicPlayer } from "context/musicPlayer";
import Loading from "@components/Loading";
// export interface ISliderProps {

// }
const PlaySong = ({ data, src }: { data: string[]; src: string }) => {
	const { dispatch } = useMusicPlayer();
	const handlePlay = () => {
		dispatch({ type: "SET", payload: { played: [], playList: data } });
	};

	return (
		<div
			onClick={handlePlay}
			className={`relative aspect-video w-full justify-center  text-white [&>*]:rounded-xl`}>
			<Ad alt="تبلیغ" src={src} />
		</div>
	);
};

const Slider = (/* props: ISliderProps */) => {
	const { data, isLoading } = useSliderQuery();

	return (
		<>
			{isLoading ? (
				<Loading />
			) : data ? (
				<Swiper
					modules={[Autoplay]}
					className="w-full "
					autoplay={{ delay: 3000 }}
					slidesPerView={1.2}
					spaceBetween={10}
					centeredSlides={true}
					loop={true}
					// onLoopFix={() => console.log("loop fix")}
					// onSlideChange={() => console.log("slide change")}
					// onSwiper={(swiper) => console.log(swiper)}
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							{item.type === "Ad" && <MovieAds src={item.link} />}
							{item.type === "Song" && item.link && (
								<PlaySong data={[item.link]} src={item.image} />
							)}
							{item.type === "Video" && item.link && (
								<SliderPlayer image={item.image} src={item.link} />
							)}
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				"مشکلی پیش آمده است"
			)}
		</>
	);
};

export default Slider;
