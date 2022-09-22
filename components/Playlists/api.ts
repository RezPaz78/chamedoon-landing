import { useQuery } from "@tanstack/react-query";
import { IPlayListResponse } from "types";
import { axiosInstance } from "utils/axios";

const getPlayLists = async (): Promise<IPlayListResponse> => {
	const response = await axiosInstance.get("home/playlists");
	return response.data;
};

export const usePlayLists = () => {
	return useQuery({
		queryFn: getPlayLists,
		queryKey: ["getPlayLists"],
		select: (data) => data.data,
	});
};
