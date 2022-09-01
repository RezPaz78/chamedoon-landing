/* eslint-disable camelcase */

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "utils/axios";
const getPodcasts = async () => {
	const res = await axiosInstance.get("/song", {});
	return res;
};
// ! No podcast query
export const usePodcastQuery = () => {
	return useQuery(["song"], async () => getPodcasts(), {
		keepPreviousData: true,
		staleTime: 5000,
	});
};
