import Image from "next/image";
import Logo from "@assets/images/logo.png";
import { HambergerMenu } from "iconsax-react";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();

	return (
		<nav className="fixed top-0 z-20 flex h-14 w-full items-center justify-center bg-[#303030]">
			<label htmlFor="drawer" className="drawer-button">
				<HambergerMenu className="absolute right-5 top-3" color="white" size="35" />
			</label>
			<Image src={Logo} alt="Logo" height="32" width="122" onClick={() => router.push("/")} />
		</nav>
	);
};

export default Navbar;
