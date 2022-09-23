/* eslint-disable jsx-a11y/no-static-element-interactions */
import LatestDummy from "assets/images/LatestDummy.png";
import voiceDummy from "assets/images/voiceDummy.png";
import Image from "next/image";
import { Microphone2, QuoteDown, VideoCircle, VideoHorizontal } from "iconsax-react";
import { IBook } from "types";
import { useBooks } from "./api";
import Loading from "@components/Loading";
import { makeBoolean } from "@utils/covertPrimitive";
import Ad from "@components/Ads/BasicImage";
import { useMusicPlayer } from "context/musicPlayer";
import { useRouter } from "next/router";
// export interface IBooksProps {
// }

const Book = (props: IBook) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(props.link)}
			style={{
				backgroundImage: `url(${props.image}) `,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "multiply",
				backgroundColor: "#262630",
			}}
			className=" mt-5 box-border flex    aspect-video  w-full justify-around overflow-hidden rounded-xl p-5 pb-0 font-IRANSans text-white [&>*]:text-lg ">
			<div
				id="book-info"
				className="flex basis-1/2 flex-col items-start justify-evenly    pr-2 text-start">
				<div className=" w-10/12 max-w-prose truncate text-ellipsis break-normal text-2xl font-bold text-white ">
					{props.name}
				</div>
				<div className="flex w-full flex-col justify-end font-medium [&>*]:w-11/12 [&>*]:truncate [&>*]:text-ellipsis [&>*]:text-xl">
					<span className="text-sm text-white text-opacity-70">نویسنده:</span>
					<span className="text-sm  text-chamedoon">{props.author}</span>
				</div>
				<div className="flex w-full flex-col  justify-end text-xl font-medium  [&>*]:w-11/12 [&>*]:truncate [&>*]:text-ellipsis [&>*]:text-xl">
					<span className="text-sm text-white text-opacity-70">انتشارات:</span>
					<span className="text-sm  text-chamedoon">{props.Publishers}</span>
				</div>
			</div>
			<div className=" flex basis-1/2 rounded-lg ">
				<div className="relative aspect-[3/4] h-full w-full basis-1/3 [&>*]:rounded-lg">
					<Image alt="movies" src={props.image} layout="fill" objectFit="fill" quality={100} />
				</div>
			</div>
		</div>
	);
};

const BookAd = ({ src }: { src: string }) => {
	return (
		<div className=" relative my-5 aspect-video w-full   justify-center overflow-hidden rounded-xl p-5 pb-0 font-IRANSans text-white ">
			<Ad src={src} />
			<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans text-xs font-semibold text-black">
				تبلیغات
			</p>
		</div>
	);
};

const Books = (/* props: IBooksProps */) => {
	const { data, isLoading } = useBooks();
	return (
		<>
			<h3 className="  m-1 mx-5 flex  items-center justify-start rounded-lg  font-bold  text-chamedoon [&>*]:ml-3">
				<QuoteDown variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">کتاب ها</p>
			</h3>
			{/* a single Movie or Item */}

			{isLoading ? (
				<Loading />
			) : data ? (
				data.map((item) =>
					makeBoolean(item.is_ad) ? (
						<BookAd key={item.id} src={item.image} />
					) : (
						<Book {...item} key={item.id} />
					),
				)
			) : (
				"مشکلی پیش آمده است"
			)}
		</>
	);
};

export default Books;
