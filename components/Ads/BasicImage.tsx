import Image from "next/image";

const Ad = ({ src, alt = "Ads" }: { src: any; alt?: string }) => {
	return (
		<Image
			placeholder="empty"
			alt={alt}
			src={src}
			layout="fill"
			objectFit="cover"
			className="[&>*]:rounded-full"
			quality={100}
		/>
	);
};

export default Ad;
