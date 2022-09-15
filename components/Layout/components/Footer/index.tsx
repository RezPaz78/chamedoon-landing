import Chamedoon from "assets/Icons/Chamedoon.svg";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full items-center justify-between bg-[#1F1F28] py-7 text-center">
			<div className="flex justify-center font-IRANSans text-xs font-normal text-white">
				کلیه حقوق برای
				<span className="inline-block px-1">
					<Chamedoon className="h-4 max-w-xs" />
				</span>
				محفوظ است.
			</div>
		</footer>
	);
};

export default Footer;
