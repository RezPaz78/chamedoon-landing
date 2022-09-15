/* eslint-disable jsx-a11y/media-has-caption */
import { Transition } from "@headlessui/react";
import { useMusicPlayer } from "context/musicPlayer";
import { Next, Pause, Play, Previous } from "iconsax-react";
import { PlyrEvent } from "plyr";
import { APITypes, PlyrProps, usePlyr } from "plyr-react";
import { forwardRef, useEffect, useRef, useState } from "react";
const AdvancedAudioPlayer = forwardRef<APITypes, PlyrProps>((props, ref) => {
	const { source, options = null } = props;
	const raptorRef = usePlyr(ref, { options, source });
	const [player, setPlayer] = useState<APITypes["plyr"]>();
	const [isPlaying, setIsPlaying] = useState(false);
	const { state, dispatch } = useMusicPlayer();
	// Do all api access here, it is guaranteed to be called with the latest plyr instance
	useEffect(() => {
		/**
		 * Fool react for using forward ref as normal ref
		 * NOTE: in a case you don't need the forward mechanism and handle everything via props
		 * you can create the ref inside the component by yourself
		 */
		const { current } = ref as React.MutableRefObject<APITypes>;
		if (current?.plyr?.source === null) {
			return;
		}
		current?.plyr && setPlayer(current.plyr);
		localStorage.setItem("players", "{}");
		const api = current.plyr;
		// TODO do we even need a type though ?
		type ICustomPlyrEvent = PlyrEvent & { detail: { plyr: { id?: string } } };
		api.on("playing", (e: ICustomPlyrEvent) => {
			const players = JSON.parse(localStorage.getItem("players") ?? "{}");
			const current = e.detail.plyr?.id ?? "noId"; // just to please ts
			players[current] = true;

			const playerList = document.getElementsByClassName("plyr");

			for (let i = 0; i < playerList.length; i++) {
				if (playerList[i] !== e.target) {
					// pause audio or video
					playerList[i].querySelector("video")?.pause();
					playerList[i].querySelector("audio")?.pause();
				}
			}

			for (const key in players) {
				if (Number(key) !== Number(current)) {
					players[key] = false;
				}
			}
			localStorage.setItem("players", JSON.stringify(players));
		});
		api.on("ready", async () => {
			// sets auto play
			await api.play();
			setIsPlaying(api.playing);
		});
	});

	const handlePauseAndPlay = () => {
		if (player?.source) {
			player.playing ? player.pause() : player.play();
			setIsPlaying(player?.playing);
		}
	};
	const PauseAndPlay = isPlaying ? (
		<Pause
			onClick={handlePauseAndPlay}
			variant="Linear"
			className="h-8 w-8 fill-current text-chamedoon"
		/>
	) : (
		<Play
			onClick={handlePauseAndPlay}
			variant="Linear"
			className="h-8 w-8 fill-current text-chamedoon"
		/>
	);

	const hasPrev = state.played && state.played.length > 0;
	const hasNext = state.playList && state.playList.length > 1;
	const handlePrevious = () => {
		if (hasPrev && state.played.length > 0) {
			setIsPlaying(false);
			const prev = state.played[state.played.length - 1];
			const playList = [prev, ...state.playList];
			const played = state.played.slice(0, -1);
			dispatch({ payload: { played, playList }, type: "SET" });
		}
	};
	const handleNext = () => {
		if (hasNext && state.playList.length > 1) {
			setIsPlaying(false);
			const played = [...state.played, state.playList[0]];
			const playList = state.playList.slice(1);
			playList && dispatch({ payload: { played, playList }, type: "SET" });
		}
	};

	return (
		<div
			className={` flex w-full flex-col items-center justify-center bg-defaultbg px-2 [&>*]:w-full`}>
			<div
				id="controls "
				className="flex w-full items-center justify-between bg-defaultbg p-2 text-chamedoon ">
				<Previous
					onClick={handlePrevious}
					variant="Linear"
					className={`h-8 w-8 fill-current text-chamedoon ${!hasPrev && "opacity-30"}`}
				/>
				{PauseAndPlay}

				<Next
					onClick={handleNext}
					variant="Linear"
					className={`h-8 w-8 fill-current text-chamedoon ${!hasNext && "opacity-30"}`}
				/>
			</div>
			<video style={props.style} ref={raptorRef} className={`plyr-react plyr `} />
		</div>
	);
});

AdvancedAudioPlayer.displayName = "advanced-palyer";

export default AdvancedAudioPlayer;
