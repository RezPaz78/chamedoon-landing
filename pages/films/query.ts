/* eslint-disable camelcase */
import { useQuery } from "@tanstack/react-query";
import { axiosInstance as client } from "utils/axios";

const getFilms = async () => {
	const res = await client.get("/videos", {});
	return res.data.data;
};

export const useFilmQuery = () => {
	return useQuery(["videos"], async () => getFilms(), {
		keepPreviousData: true,
		staleTime: 5000,
	});
};
