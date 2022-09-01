import { ArrowDown } from "iconsax-react";
import useDownloader from "react-use-downloader";

export interface IDownloaderProps {
	fa_name: string;
	link: string; // for video src
}
const Downloader = (props: IDownloaderProps) => {
	const { percentage, download } = useDownloader();
	const extension = props.link.split(".").pop();

	return (
		<div className="flex w-full items-center justify-between rounded-b-xl bg-white px-5 py-3">
			<h4 className="text-sm font-normal text-black">{props.fa_name}</h4>
			{percentage ? (
				<p>{percentage}%</p>
			) : (
				<ArrowDown
					color="#000"
					size="20"
					onClick={() => download(props.link, `${props.fa_name}.${extension}`)}
				/>
			)}
		</div>
	);
};

export default Downloader;
