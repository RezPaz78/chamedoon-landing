import Ad from "./BasicImage";

const MovieAds = ({ src, className }: { src: any; className?: string }) => {
	return (
		<div
			className={`relative aspect-video w-full justify-center  text-white [&>*]:rounded-xl ${className}`}>
			<Ad alt="تبلیغ" src={src} />
		</div>
	);
};

export default MovieAds;
