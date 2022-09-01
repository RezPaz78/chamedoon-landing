/* eslint-disable camelcase */
import { useQuery } from "@tanstack/react-query";
import { axiosInstance as client } from "utils/axios";

const getMaps = async () => {
	const res = await client.get("/maps", {});
	return res.data.data;
};

export const useMapsQuery = () => {
	return useQuery(["maps"], async () => getMaps(), {
		keepPreviousData: true,
		staleTime: 5000,
	});
};

export interface IMapsResponse {
	id: number;
	fa_name: string;
	image: string;
	link: string;
}
