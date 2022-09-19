import "@assets/styles/global.scss";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@utils/reactQuery.config";
import Layout from "@components/Layout";
import "plyr-react/plyr.css";

// toast
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MusicProvider } from "context/musicPlayer";
import AudioPlayer from "@components/AudioPlayer";

//   // import Swiper styles

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<MusicProvider>
					<>
						<Layout>
							<Component {...pageProps} />
						</Layout>
						<ToastContainer
							position="bottom-left"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop
							closeOnClick
							rtl
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="colored"
							bodyClassName="font-Estedad text-sm"
							transition={Slide}
						/>
					</>
				</MusicProvider>
				<ReactQueryDevtools initialIsOpen={false} position="top-right" />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
