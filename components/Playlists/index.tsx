/* eslint-disable jsx-a11y/no-static-element-interactions */
import LatestDummy from "assets/images/LatestDummy.png";
import Image from "next/image";
import { MusicPlaylist, VideoCircle, VideoHorizontal } from "iconsax-react";
import { useMusicPlayer } from "context/musicPlayer";
import { usePlayLists } from "./api";
import Loading from "@components/Loading";
import { Swiper } from "swiper/react";
import { makeBoolean } from "@utils/covertPrimitive";
// export interface IPlaylistsProps {

// }

const PlaylistAd = (props: { src: string }) => {
	return (
		<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
			<Image alt="movies" src={props.src} layout="fill" objectFit="cover" quality={100} />
			<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans font-bold text-black">
				تبلیغات
			</p>
		</div>
	);
};

const PlayListItem = ({ data, src }: { data: string[]; src: any }) => {
	const { dispatch } = useMusicPlayer();
	const handlePlay = () => {
		dispatch({ type: "SET", payload: { played: [], playList: data } });
	};
	return (
		<div
			onClick={handlePlay}
			className="relative  box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
			<Image alt="movies" src={src} layout="fill" objectFit="cover" quality={100} />
			<VideoCircle
				variant="Bulk"
				className=" absolute left-4 bottom-2 h-fit w-2/12 text-black [&>path+path]:text-chamedoon"
			/>
		</div>
	);
};

const Playlists = (/* props: IPlaylistsProps */) => {
	const { data, isLoading } = usePlayLists();
	return (
		<>
			<h3 className=" m-1  flex w-36 items-center justify-between  rounded-lg  font-bold text-chamedoon">
				<MusicPlaylist variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">لیست‌های پخش</p>
			</h3>
			{/* a playlist Item */}
			<div className="mt-2 flex w-full flex-col items-center justify-center rounded-2xl bg-[#1F1F28] py-5 [&>*]:shadow-lg ">
				{isLoading ? (
					<Loading />
				) : data ? (
					data.map((item) =>
						makeBoolean(item.is_ad) ? (
							<PlaylistAd key={item.id} src={item.image_link} />
						) : (
							<PlayListItem key={item.id} src={item.image_link} data={item.songs} />
						),
					)
				) : (
					"مشکلی پیش آمده است"
				)}
			</div>
		</>
	);
};

export default Playlists;
