import { APITypes, PlyrProps, usePlyr } from "plyr-react";
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
		if (current.plyr.source === null) {
			return;
		}

		const api = current.plyr;
		// api.on("ready", () => console.log("I'm ready"));
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
