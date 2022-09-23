import { useRouter } from "next/router";
import Logo from "assets/Icons/Logo.svg";

const Navbar = () => {
	const router = useRouter();

	return (
		<nav className="w-full bg-defaultbg">
			<Logo alt="chamedoon" className="w-full bg-defaultbg lg:h-20" />
		</nav>
	);
};

export default Navbar;
