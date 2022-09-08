import { ArrowDown } from "iconsax-react";
import useDownloader from "react-use-downloader";

export interface IDownloaderProps {
	fa_name: string;
	type?: string;
	singer?: string;
	link: string; // for video src
}
const Downloader = (props: IDownloaderProps) => {
	const { percentage, download } = useDownloader();
	const extension = props.link.split(".").pop();

	return (
		<div className="flex text-[#EA3324] w-full items-center justify-between rounded-b-xl bg-[#141414] px-5 py-3">
			<h4 className="text-sm font-normal text-[#EA3324]">
				<p className="text-sm">{props.fa_name}</p>
				<p className="text-2xs  text-white">{props?.type ?? props.singer}</p>
			</h4>
			<div
				className={`flex items-center justify-center ${
					percentage ? "cursor-wait" : "pb-1 border-b cursor-pointer border-[#EA3324]"
				}`}>
				{percentage ? (
					<p>{percentage} %</p>
				) : (
					<ArrowDown
						color="#EA3324"
						size="20"
						onClick={() => download(props.link, `${props.fa_name}.${extension}`)}
					/>
				)}
			</div>
		</div>
	);
};

export default Downloader;
