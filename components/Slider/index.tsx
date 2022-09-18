import dummyFilm from "assets/images/dummyFilm.png";
import Image from "next/image";
import { ForwardItem, Record, VideoHorizontal } from "iconsax-react";
import { useSliderQuery } from "./api";
import { useEffect } from "react";
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MovieAds } from "@components/Ads";
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
	// const { data, isLoading } = useSliderQuery();
	// useEffect(() => {
	// 	console.log(
	// 		`%c data =>`,
	// 		"background: #0dd0FF;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
	// 		data,
	// 		isLoading,
	// 	);
	// }, [data, isLoading]);

	return (
		<>
			{/* {isLoading ? (
				<Loading />
			) : data ? (
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}>
					{data.map((item) => {
						console.log(
							`%c item =>`,
							"background: #0dd0FF;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
							item,
						);
						return (
							item.type === "Ad" && (
								<SwiperSlide className="relative aspect-video w-full justify-center rounded-xl text-white">
									<Ad key={item.id} alt="تبلیغ" src={item.image} />;
								</SwiperSlide>
							)
						);
					})}
				</Swiper>
			) : (
				"مشکلی پیش آمده است"
			)} */}
			<Swiper
				modules={[Autoplay]}
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
				<SwiperSlide>
					{({ isNext, isPrev, isActive, isVisible }) => {
						return <MovieAds src={dummyFilm} />;
					}}
				</SwiperSlide>
				<SwiperSlide>
					{({ isNext, isPrev, isActive, isVisible }) => {
						return <MovieAds src={dummyFilm} />;
					}}
				</SwiperSlide>
				<SwiperSlide>
					{({ isNext, isPrev, isActive, isVisible }) => {
						return <MovieAds src={dummyFilm} />;
					}}
				</SwiperSlide>
				{/* <SwiperSlide className="">
					{({ isNext, isPrev, isActive, isVisible }) => {
						return (
							<div className="relative aspect-video w-full justify-center rounded-xl text-white">
								<Ad alt="تبلیغ" src={dummyFilm} />;
							</div>
						);
					}}
				</SwiperSlide>
				<SwiperSlide className="">
					{({ isNext, isPrev, isActive, isVisible }) => {
						return (
							<div className="relative aspect-video w-full justify-center rounded-xl text-white">
								<Ad alt="تبلیغ" src={dummyFilm} />;
							</div>
						);
					}}
				</SwiperSlide> */}
			</Swiper>
		</>
	);
};

export default Slider;
