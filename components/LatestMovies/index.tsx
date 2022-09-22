import LatestDummy from "assets/images/LatestDummy.png";
import Image from "next/image";
import { VideoHorizontal } from "iconsax-react";
import { useVideoQuery } from "./api";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieAds } from "@components/Ads";
import SliderPlayer from "@components/Player/SliderPlayer";
import { Autoplay } from "swiper";
import Loading from "@components/Loading";
import { IVideo } from "types";
import LatestMoviesPlayer from "@components/Player/LatestMoviesPlayer";
// export interface ILatestMoviesProps {

// }
const LatestMovies = (/* props: ILatestMoviesProps */) => {
	const { data, isLoading } = useVideoQuery();
	const [irani, setIrani] = useState<IVideo[]>([]);
	const [foreign, setForiegn] = useState<IVideo[]>([]);
	const [kids, setKids] = useState<IVideo[]>([]);
	useEffect(() => {
		if (data) {
			setIrani(data.iranian);
			setForiegn(data.foreign);
			setKids(data.animation);
		}
	}, [data, isLoading]);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<h3 className=" m-1 flex w-36 items-center justify-between  rounded-lg  font-bold text-chamedoon">
					<VideoHorizontal variant="Bold" />
					<p className=" font-IRANSans text-base font-bold text-white ">جدیدترین فیلم‌ها</p>
				</h3>
			)}
			{/* a single Movie or Item */}

			{data
				? irani && (
						<Swiper
							modules={[Autoplay]}
							className="w-full "
							autoplay={{ delay: 3000 }}
							slidesPerView={1.5}
							spaceBetween={10}
							centeredSlides={false}
							loop={true}
							// onLoopFix={() => console.log("loop fix")}
							// onSlideChange={() => console.log("slide change")}
							// onSwiper={(swiper) => console.log(swiper)}
						>
							{irani.map(
								(item) =>
									item.link && (
										<SwiperSlide key={item.id}>
											{JSON.parse(item.is_ad.toLowerCase()) ? (
												<MovieAds src={item.link} />
											) : (
												<LatestMoviesPlayer image={item.image} src={item.link} />
											)}
										</SwiperSlide>
									),
							)}
						</Swiper>
				  )
				: "مشکلی پیش آمده است"}
			{data
				? foreign && (
						<Swiper
							modules={[Autoplay]}
							className="w-full "
							autoplay={{ delay: 2500, reverseDirection: true }}
							slidesPerView={1.5}
							spaceBetween={10}
							centeredSlides={false}
							loop={true}

							// onLoopFix={() => console.log("loop fix")}
							// onSlideChange={() => console.log("slide change")}
							// onSwiper={(swiper) => console.log(swiper)}
						>
							{foreign.map(
								(item) =>
									item.link && (
										<SwiperSlide key={item.id}>
											{JSON.parse(item.is_ad.toLowerCase()) ? (
												<MovieAds src={item.link} />
											) : (
												<LatestMoviesPlayer image={item.image} src={item.link} />
											)}
										</SwiperSlide>
									),
							)}
						</Swiper>
				  )
				: "مشکلی پیش آمده است"}
			{data
				? kids && (
						<Swiper
							modules={[Autoplay]}
							className="w-full "
							autoplay={{ delay: 4000 }}
							slidesPerView={1.5}
							spaceBetween={10}
							centeredSlides={false}
							loop={true}
							// onLoopFix={() => console.log("loop fix")}
							// onSlideChange={() => console.log("slide change")}
							// onSwiper={(swiper) => console.log(swiper)}
						>
							{kids.map(
								(item) =>
									item.link && (
										<SwiperSlide key={item.id}>
											{JSON.parse(item.is_ad.toLowerCase()) ? (
												<MovieAds src={item.link} />
											) : (
												<LatestMoviesPlayer image={item.image} src={item.link} />
											)}
										</SwiperSlide>
									),
							)}
						</Swiper>
				  )
				: "مشکلی پیش آمده است"}
		</>
	);
};

export default LatestMovies;
