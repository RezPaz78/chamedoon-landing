import { useRouter } from "next/router";

interface IMapProps {
	link: string;
	text: string;
	image: string;
}

const Map = (props: IMapProps) => {
	const router = useRouter();

	return (
		<button
			style={{
				backgroundImage: `url(${props.image})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				objectFit: "contain",
			}}
			className="mb-10  h-[100px] w-[130px] rounded-xl bg-[#AD0100] px-5 font-IRANSans text-xl text-white hover:cursor-pointer"
			onClick={() => router.push(props.link)}></button>
	);
};

export default Map;
