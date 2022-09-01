import { useRouter } from "next/router";

interface IMapProps {
	link: string;
	text: string;
}

const Map = (props: IMapProps) => {
	const router = useRouter();

	return (
		<button
			className="mb-10 h-[123px] w-[143px] rounded-xl bg-[#09341A] px-5 text-right text-xl text-white hover:cursor-pointer"
			onClick={() => router.push(props.link)}>
			{props.text}
		</button>
	);
};

export default Map;
