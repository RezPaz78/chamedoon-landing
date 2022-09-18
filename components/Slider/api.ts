import { useQuery } from "@tanstack/react-query";
import { ISliderResponse } from "types";
import { axiosInstance } from "utils/axios";

const getSlider = async (): Promise<ISliderResponse> => {
	const response = await axiosInstance.get("home/sliders");
	return response.data;
};

export const useSliderQuery = () => {
	return useQuery({ queryFn: getSlider, queryKey: ["slider"], select: (data) => data.data });
};
