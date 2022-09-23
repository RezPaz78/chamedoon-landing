import { useQuery } from "@tanstack/react-query";
import { IBookResponse } from "types";
import { axiosInstance } from "utils/axios";

const getBooks = async (): Promise<IBookResponse> => {
	const response = await axiosInstance.get("home/books");
	return response.data;
};

export const useBooks = () => {
	return useQuery({
		queryFn: getBooks,
		queryKey: ["getBooks"],
		select: (data) => data.data,
	});
};
