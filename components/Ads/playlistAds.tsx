import { BasicAds } from ".";

const playlistAds = ({ src }: { src: any }) => {
	return (
		<div className="relative mt-5 box-border aspect-[2.3] w-11/12  justify-center [&>*]:rounded-xl ">
			<BasicAds src={src} />
			<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans font-bold text-black">
				تبلیغات
			</p>
		</div>
	);
};

export default playlistAds;
