import { useRouter } from "next/router";

export interface IPrayProps {
	link: string;
	text: string;
}

const Pray = (props: IPrayProps) => {
	const router = useRouter();

	return (
		<>
			<button
				className="mb-10 ml-5 h-[123px] w-[143px] rounded-xl bg-[#AD0100] px-5 text-xl text-white hover:cursor-pointer"
				onClick={() => router.push(props.link)}>
				{props.text}
			</button>
		</>
	);
};

export default Pray;
