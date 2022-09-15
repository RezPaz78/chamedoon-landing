import { useRouter } from "next/router";
import Logo from "assets/Icons/Logo.svg";

const Navbar = () => {
	const router = useRouter();

	return (
		<nav>
			<Logo alt="chamedoon" className="w-full bg-[#1E1E1E] lg:h-20" />
		</nav>
	);
};

export default Navbar;
