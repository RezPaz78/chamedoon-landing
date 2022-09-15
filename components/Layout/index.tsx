import React from "react";
import Nav from "@components/Layout/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.png";
import chamedoon from "@assets/images/chamedoon.png";
import { HambergerMenu } from "iconsax-react";
import { navLinks } from "constants/navLinks";
import Footer from "@components/Layout/components/Footer";
import { useRouter } from "next/router";

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	const router = useRouter();

	return (
		<>
			<Nav />
			<div dir="rtl" className="containermin-h-screen">
				<div>{children}</div>

				<Footer />
			</div>
		</>
	);
};

export default Layout;
