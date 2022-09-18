import Ad from "./BasicImage";

const MovieAds = ({ src, className }: { src: any; className?: string }) => {
	return (
		<div
			className={`relative aspect-video w-full justify-center  text-white [&>*]:rounded-xl ${className}`}>
			<Ad alt="تبلیغ" src={src} />
			<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans text-xs font-semibold text-black">
				تبلیغات
			</p>
		</div>
	);
};

export default MovieAds;
