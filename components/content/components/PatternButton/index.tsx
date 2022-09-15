import React from "react";
import Link from "next/link";
import { Icon } from "iconsax-react";
interface INavButtonProps {
	text: string;
	link: string;
	icon: Icon;
	className: string;
}

const PatternButton = (props: INavButtonProps) => {
	return (
		<Link href={props.link}>
			<a
				style={{ backgroundImage: "url(/BtnPattern.svg)" }}
				className={` m-2 flex items-center justify-between rounded-lg bg-[#444444]  p-3  font-bold text-[#FFCB05] ${props.className}`}>
				<span className=" font-IRANSans text-xs font-normal ">{props.text}</span>
				<props.icon variant="Bold" />
			</a>
		</Link>
	);
};

export default PatternButton;
