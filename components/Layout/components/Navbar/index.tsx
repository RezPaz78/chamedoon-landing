import Image from "next/image";
import Logo from "@assets/images/logo.png";
import { HambergerMenu } from "iconsax-react";

const Navbar = () => {
	return (
		<nav className="fixed top-0 flex h-14 w-full items-center justify-center bg-[#303030]">
			<HambergerMenu className="absolute top-3 right-5" color="white" size="35" />
			<Image src={Logo} alt="Logo" height="32" width="122" />
		</nav>
	);
};

export default Navbar;
