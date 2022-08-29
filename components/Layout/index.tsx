import React from "react";
import Nav from "@components/Layout/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.png";
import { HambergerMenu } from "iconsax-react";
import { navLinks } from "constants/navLinks";

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<div className="drawer drawer-end">
				<input id="drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<Nav />
					<div dir="rtl" className="px-6 pt-20">
						{children}
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="drawer" className="drawer-overlay"></label>
					<div dir="rtl" className=" w-[70%] overflow-y-auto bg-[#303030] px-5 pt-3 text-white">
						<div className="mb-12 flex items-center justify-between pl-5">
							<HambergerMenu className="rotate-90" color="white" size="35" />
							<Image src={Logo} alt="Logo" height="32" width="122" />
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
