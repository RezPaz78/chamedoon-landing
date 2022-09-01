import Head from "next/head";
import { useState, useEffect } from "react";
import { HeadProps } from "./Head.types";

const HeadComponent = (props: HeadProps) => {
	const mainTitle = "لبیک یا حسین";
	const [title, setTitle] = useState(mainTitle);

	useEffect(() => {
		props.title && setTitle(mainTitle + " | " + props.title);

		return () => {
			setTitle(mainTitle);
		};
	}, [mainTitle, props.title]);

	return (
		<Head>
			<title>{title}</title>
			{Array.isArray(props.metaData) ? (
				props.metaData.map((data) => <meta key={data.name} {...data} />)
			) : (
				<meta {...props.metaData} />
			)}
			{Array.isArray(props.linkData) ? (
				props.linkData.map((data) => <link key={data.type} {...data} />)
			) : (
				<link {...props.linkData} />
			)}
		</Head>
	);
};

export default HeadComponent;
