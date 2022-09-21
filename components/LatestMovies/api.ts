import { useQuery } from "@tanstack/react-query";
import { IVideoResponse } from "types";
import { axiosInstance } from "utils/axios";

const getVideos = async (): Promise<IVideoResponse> => {
	const response = await axiosInstance.get("home/videos");
	return response.data;
};

export const useVideoQuery = () => {
	return useQuery({ queryFn: getVideos, queryKey: ["videos"], select: (data) => data.data });
};
