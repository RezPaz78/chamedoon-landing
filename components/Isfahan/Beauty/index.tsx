import ISFDummy1 from "assets/images/ISFDummy1.png";
import Image from "next/image";
import { Play, VideoCircle, VideoHorizontal } from "iconsax-react";
import Pattern from "assets/Icons/Pattern.svg";
import { useISFVideQuery } from "../api";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ISFVideoPlayer from "@components/Player/ISFVideoPlayer";
// export interface ILatestMoviesProps {

// }
const IsfBeauty = (/* props: IIsfBeautyProps */) => {
	const { data, isLoading } = useISFVideQuery();
	useEffect(() => {
		console.log(
			`%c data,isLoading =>`,
			"background: #0dd0FF;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
			data,
			isLoading,
		);
	}, [data, isLoading]);
	return (
		<>
			<div className="flex w-full flex-col  px-5">
				<Pattern className="justify-self-center" />
				<h3 className=" m-1 flex w-28 items-center justify-between  rounded-lg  font-bold text-chamedoon">
					<VideoHorizontal variant="Bold" />
					<p className=" font-IRANSans text-base font-bold text-white ">اصفهان زیبا</p>
				</h3>
				{data ? (
					<Swiper
						modules={[Autoplay]}
						className="mt-5 w-full"
						autoplay={{ delay: 3000 }}
						slidesPerView={1.9}
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
										className="relative flex  aspect-square  items-center justify-center rounded-lg shadow-lg [&>*]:rounded-lg "
										key={item.id}>
										<ISFVideoPlayer image={item.image} src={item.link} />
									</SwiperSlide>
								),
						)}
					</Swiper>
				) : (
					"مشکلی پیش آمده است"
				)}
				<Pattern className="rotate-180 justify-self-center pb-5" />
			</div>
		</>
	);
};

export default IsfBeauty;
