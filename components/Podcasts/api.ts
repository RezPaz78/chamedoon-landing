import { useQuery } from "@tanstack/react-query";
import { IPodcastResponse } from "types";
import { axiosInstance } from "utils/axios";

const getPodcasts = async (): Promise<IPodcastResponse> => {
	const response = await axiosInstance.get("home/podcasts");
	return response.data;
};

export const usePodcasts = () => {
	return useQuery({
		queryFn: getPodcasts,
		queryKey: ["getPodcasts"],
		select: (data) => data.data,
	});
};
