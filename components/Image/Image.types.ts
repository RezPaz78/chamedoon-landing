import { Property } from "csstype/index";
import { StaticImageData } from "next/image";
export interface ImageProps {
	src: StaticImageData | string;
	layout?: "fixed" | "fill" | "intrinsic" | "responsive";
	objectFit?: Property.ObjectFit;
	alt: string;
	className?: string;
	// when layout is not set we should set width and height
	width?: string;
	height?: string;
}
