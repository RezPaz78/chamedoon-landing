import AudioPlayer from "@components/AudioPlayer";
import { Tenx } from "iconsax-react";
import { createContext, useContext, useReducer, useState } from "react";

type State = { playList: string[]; played: string[] };
type Action = { type: "SET"; payload: State } | { type: "UNSET" };
type Dispatch = (action: Action) => void;
type MusicProviderProps = { children: React.ReactNode };

const MusicPlayerContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
	undefined,
);

function playerReducer<T>(state: State, action: Action): State {
	switch (action.type) {
		case "SET": {
			return { ...action.payload };
		}
		case "UNSET": {
			return { playList: [], played: [] } as State;
		}
		default: {
			throw new Error(`Unhandled action type: ${action}`);
		}
	}
}

const defaultValue: State = { playList: [], played: [] };

function MusicProvider({ children }: MusicProviderProps) {
	const [state, dispatch] = useReducer(playerReducer, defaultValue);
	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context

	const value = { state, dispatch };
	return (
		<MusicPlayerContext.Provider value={value}>
			<div className="[&>*]:z-10">{children}</div>
			{state.playList.length > 0 && (
				<AudioPlayer
					style={{
						"--plyr-color-main": "#FFCB05",
						"--plyr-audio-controls-background": "rgb(18, 18, 23)",
						"--plyr-audio-control-color": "#fff",
					}}
					src={state.playList[0]}
					options={{ hideControls: true, clickToPlay: true }}
					className="fixed bottom-0 left-0 right-0 z-[99999] w-full"
				/>
			)}
		</MusicPlayerContext.Provider>
	);
}

function useMusicPlayer() {
	const context = useContext(MusicPlayerContext);
	if (context === undefined) {
		throw new Error("useMusicPlayer must be used within a MusicProvider");
	}
	return context;
}

export { MusicProvider, useMusicPlayer };
