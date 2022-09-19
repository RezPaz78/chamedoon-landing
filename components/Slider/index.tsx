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
// export interface ISliderProps {

// }

const Loading = () => (
	<div className="flex aspect-video w-full items-center justify-center rounded-xl ">
		<Record
			variant="Broken"
			className=" h-1/3 w-1/3 animate-spin   justify-self-center  text-chamedoon"
		/>
	</div>
);

const Slider = (/* props: ISliderProps */) => {
	const { data, isLoading } = useSliderQuery();
	useEffect(() => {
		console.log(
			`%c data =>`,
			"background: #0dd0FF;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
			data,
			isLoading,
		);
	}, [data, isLoading]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : data ? (
				<Swiper
					modules={[Autoplay, Mousewheel, Scrollbar]}
					mousewheel={true}
					grabCursor={true}
					cssMode={true}
					className="w-full "
					autoplay={{ delay: 2000 }}
					slidesPerView={1.15}
					spaceBetween={10}
					centeredSlides={true}
					centeredSlidesBounds
					loop={true}
					onLoopFix={() => console.log("loop fix")}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							{item.type === "Ad" && <MovieAds src={item.link} />}
							{(item.type === "Video" || item.type === "Song") && item.link && (
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
