import LatestDummy from "assets/images/LatestDummy.png";
import Image from "next/image";
import { MusicPlaylist, VideoCircle, VideoHorizontal } from "iconsax-react";
// export interface IPlaylistsProps {

// }
const Playlists = (/* props: IPlaylistsProps */) => {
	return (
		<>
			<h3 className=" m-1 flex w-36 items-center justify-between  rounded-lg  font-bold text-chamedoon">
				<MusicPlaylist variant="Bold" />
				<p className=" font-IRANSans text-base font-bold text-white ">لیست‌های پخش</p>
			</h3>
			{/* a playlist Item */}
			<div className="mt-2 flex w-full flex-col items-center justify-center rounded-2xl bg-[#1F1F28] [&>*]:shadow-lg ">
				<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={LatestDummy}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
					<VideoCircle
						variant="Bulk"
						className=" absolute left-4 bottom-2 h-fit w-2/12 text-black [&>path+path]:text-chamedoon"
					/>
				</div>
				<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={LatestDummy}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
					<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans font-bold text-black">
						تبلیغات
					</p>
				</div>
				<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={LatestDummy}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</div>
				<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={LatestDummy}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</div>
				<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={LatestDummy}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</div>
			</div>
		</>
	);
};

export default Playlists;
