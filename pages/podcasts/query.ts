/* eslint-disable camelcase */

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "utils/axios";
const getPodcasts = async () => {
	const res = await axiosInstance.get("/songs", {});
	return res.data.data;
};
// ! No podcast query
export const usePodcastQuery = () => {
	return useQuery(["songs"], async () => getPodcasts(), {
		keepPreviousData: true,
		staleTime: 5000,
	});
};
