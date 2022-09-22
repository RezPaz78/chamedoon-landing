import { APITypes, PlyrInstance, PlyrProps, usePlyr } from "plyr-react";
import { forwardRef, useEffect } from "react";
const AdvancedPlayer = forwardRef<APITypes, PlyrProps>((props, ref) => {
	const { source, options = null } = props;
	const raptorRef = usePlyr(ref, { options, source });

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
		localStorage.setItem("players", "{}");
		const api = current.plyr;

		// });
		api.on("playing", (e: any) => {
			const currentPlayer = e.detail.plyr as PlyrInstance;
			currentPlayer.fullscreen.enter();
			const players = JSON.parse(localStorage.getItem("players") ?? "{}");
			const current = e.detail.plyr.id;
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

		// player style for fullscreen
		const poster = document.querySelector<HTMLElement>(".plyr__poster");
		api.on("exitfullscreen", (e) => {
			const player = e.detail.plyr;
			player.pause();
			player.toggleControls(false);
			poster && poster.style.setProperty("opacity", "1");
			player.stop();
		});
		api.on("enterfullscreen", (e) => {
			poster && poster.style.setProperty("opacity", "0");
			const player = e.detail.plyr;
			player.toggleControls(true);
		});
	});
	return (
		// eslint-disable-next-line jsx-a11y/media-has-caption
		<video
			style={props.style}
			ref={raptorRef as React.MutableRefObject<HTMLVideoElement>}
			className={`plyr-react plyr `}
		/>
	);
});

AdvancedPlayer.displayName = "advanced-palyer";

export default AdvancedPlayer;
