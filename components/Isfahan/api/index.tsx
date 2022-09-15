import { useQuery } from "@tanstack/react-query";
import { ISFEventResponse, ISFVideoResponse, ISFVoiceResponse } from "types";
import { axiosInstance } from "utils/axios";

const getISFVideo = async (): Promise<ISFVideoResponse> => {
	const response = await axiosInstance.get("/isf/videos");
	return response.data;
};

export const useISFVideQuery = () => {
	return useQuery({ queryFn: getISFVideo, queryKey: ["ISFVideo"], select: (data) => data.data });
};
const getISFSong = async (): Promise<ISFVoiceResponse> => {
	const response = await axiosInstance.get("/isf/songs");
	return response.data;
};

export const useISFSong = () => {
	return useQuery({ queryFn: getISFSong, queryKey: ["getISFSong"], select: (data) => data.data });
};
const getISFEvent = async (): Promise<ISFEventResponse> => {
	const response = await axiosInstance.get("/isf/events");
	return response.data;
};

export const useISFEvent = () => {
	return useQuery({ queryFn: getISFEvent, queryKey: ["getISFEvent"], select: (data) => data.data });
};
