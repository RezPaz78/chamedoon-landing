import React from "react";
import Nav from "@components/Layout/components/Navbar";

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default Layout;
