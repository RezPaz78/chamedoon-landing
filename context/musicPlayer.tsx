import AudioPlayer from "@components/AudioPlayer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, useContext, useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type MusicProviderProps = { children: React.ReactNode };

const CountStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
	undefined,
);

function countReducer(state: State, action: Action) {
	switch (action.type) {
		case "increment": {
			return { count: state.count + 1 };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function MusicProvider({ children }: MusicProviderProps) {
	const [state, dispatch] = useReducer(countReducer, { count: 0 });
	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };
	return (
		<CountStateContext.Provider value={value}>
			{children}
			<AudioPlayer
				style={{
					"--plyr-color-main": "#FFCB05",
					"--plyr-audio-controls-background": "rgb(18, 18, 23)",
					"--plyr-audio-control-color": "#fff",
				}}
				src={"http://37.32.28.207/files/isfmusic/Delkhoshi.mp3"}
				options={{ hideControls: true, clickToPlay: true }}
				className="fixed bottom-0 z-10 w-full"
			/>
		</CountStateContext.Provider>
	);
}

function useCount() {
	const context = useContext(CountStateContext);
	if (context === undefined) {
		throw new Error("useCount must be used within a MusicProvider");
	}
	return context;
}

export { MusicProvider, useCount };
