import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
// import Link from "next/link";

interface INavButtonProps {
	text: string;
	link: string;
	icon: StaticImageData | string;
}

const NavButton = (props: INavButtonProps) => {
	const router = useRouter();

	const clickHandler = () => router.push(props.link);

	return (
		<button
			className="mb-2 flex basis-1/2 scale-95 items-center justify-between rounded-lg bg-[#303030] py-3 px-5 text-right"
			onClick={clickHandler}>
			<span className="font-IRANSans text-xs font-normal text-white">{props.text}</span>
			<Image src={props.icon} alt={props.text} width="18.33" height="17.5" />
		</button>
	);
};

export default NavButton;
