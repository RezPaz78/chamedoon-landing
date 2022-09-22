import { useQuery } from "@tanstack/react-query";
import { ISFVideoResponse } from "types";
import { axiosInstance } from "utils/axios";

const getISFVideo = async (): Promise<ISFVideoResponse> => {
	const response = await axiosInstance.get("/isf/videos");
	return response.data;
};

export const useISFVideQuery = () => {
	return useQuery({ queryFn: getISFVideo, queryKey: ["ISFVideo"], select: (data) => data.data });
};
