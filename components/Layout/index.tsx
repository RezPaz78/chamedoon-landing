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
			<div className="drawer drawer-end">
				<input id="drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<Nav />
					<div dir="rtl" className="relative min-h-screen">
						<div className="px-6 py-20">{children}</div>
						<Footer />
					</div>
				</div>
				<div className="drawer-side font-IRANSans">
					<label htmlFor="drawer" className="drawer-overlay"></label>
					<div
						dir="rtl"
						className=" relative w-[70%] overflow-y-auto bg-[#303030] px-5 pt-3 text-white">
						<div className="mb-12 flex items-center justify-between pl-5">
							<HambergerMenu className="rotate-90" color="white" size="35" />
							<Image
								src={Logo}
								alt="Logo"
								height="32"
								width="122"
								onClick={() => router.push("/")}
							/>
						</div>
						<div className="pr-2">
							{navLinks.map((link) => {
								return (
									<li key={link.text} className="mb-7">
										<Link href={link.href}>
											<a>{link.text}</a>
										</Link>
									</li>
								);
							})}
						</div>
						<Link href={"https://chamedoon.me/"}>
							<footer className="absolute bottom-7 right-0  flex w-full items-center justify-center bg-[#303030] text-center">
								<p className="px-2">قدرت گرفته از</p>
								<Image src={chamedoon} alt="چمدون" />
							</footer>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
