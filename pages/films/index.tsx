import Film, { IFilmProps } from "@components/Film";
import Head from "@components/Head";
import { useFilmQuery } from "./query";

const Films = () => {
	const { data } = useFilmQuery();

	return (
		<>
			<Head title="فیلم و مستند" />
			<section className="">
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
				{data && data.map((film: IFilmProps) => <Film key={film.id} {...film} />)}
			</section>
		</>
	);
};

export default Films;
