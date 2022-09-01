/* eslint-disable camelcase */
import { useQuery } from "@tanstack/react-query";
import { axiosInstance as client } from "utils/axios";

const getPrayers = async () => {
	const res = await client.get("/prayers", {});
	return res.data.data;
};
export const usePrayersQuery = () => {
	return useQuery(["prayers"], async () => getPrayers(), {
		keepPreviousData: true,
		staleTime: 5000,
	});
};

export interface IPrayResponse {
	fa_name: string;
	id: number;
	image: string;
	link: string;
}
