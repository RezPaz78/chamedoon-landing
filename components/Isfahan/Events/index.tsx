import Image from "next/image";
import { Calendar, Calendar1, Location, VideoCircle, VideoHorizontal } from "iconsax-react";
import Pattern from "assets/Icons/Pattern.svg";
import { useISFEvent, useISFSong } from "../api";
import Loading from "@components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useMusicPlayer } from "context/musicPlayer";
import { ISFEvent } from "types";
// export interface ILatestMoviesProps {
// }

const EventItem = (props: ISFEvent) => {
	return (
		<div className=" bg-blue flex aspect-[2/1] max-h-40 min-w-[250px] flex-col items-start justify-between space-y-2 rounded-lg  bg-[#2C2C2C] p-5 font-IRANSans">
			<h3 className="mb-5 text-xl font-bold text-chamedoon">{props.name}</h3>
			<div className="flex pb-2">
				<Calendar variant="Linear" className="ml-3" />
				<p>{props.date}</p>
			</div>

			<div className=" flex ">
				<Location variant="Linear" className="ml-3" />
				<p>{props.location}</p>
			</div>
		</div>
	);
};

const ISFEvent = (/* props: IISFEventProps */) => {
	const { data, isLoading } = useISFEvent();

	return (
		<>
			<div className="flex w-full flex-col  ">
				<Pattern className="justify-self-center px-5" />
				<h3 className=" m-1 mx-5 flex  items-center justify-start rounded-lg  font-bold  text-chamedoon [&>*]:ml-3">
					<Calendar1 variant="Bold" />
					<p className="  font-IRANSans text-base font-bold  ">رویدادهای شهر</p>
				</h3>
				{/* a single Movie or Item */}

				{isLoading ? (
					<Loading />
				) : data ? (
					<div className="mt-5 mr-2 w-full">
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
							{data.map((item) => (
								<SwiperSlide
									className="relative mt-5 w-1/2   items-center justify-center rounded-lg  shadow-lg"
									key={item.id}>
									<EventItem {...item} />
								</SwiperSlide>
							))}
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

export default ISFEvent;
