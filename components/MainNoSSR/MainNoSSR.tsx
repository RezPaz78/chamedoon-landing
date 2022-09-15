import dynamic from "next/dynamic";

// disable ssr
export const MainNoSSR = dynamic(() => import("components/MainNoSSR/components/Main"), {
	ssr: false,
});
