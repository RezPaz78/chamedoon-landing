import "@assets/styles/global.scss";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@utils/reactQuery.config";
import Layout from "@components/Layout";
import "plyr-react/plyr.css";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
