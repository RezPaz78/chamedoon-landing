import Head from "@components/Head";
import Pray from "@components/Prayer";
import { IPrayResponse, usePrayersQuery } from "./query";

const Prays = () => {
	const { data } = usePrayersQuery();
	console.log(
		`%c data =>`,
		"background: #0dd0FF;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
		data,
	);
	return (
		<>
			<Head title="ادعیه و زیارات" />

			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">ادعیه و زیارات</h3>
				<div className="flex flex-wrap items-center justify-between">
					{data &&
						data.map((data: IPrayResponse) => (
							<Pray key={data.id} link={data.link} text={data.fa_name} />
						))}
				</div>
			</section>
		</>
	);
};

export default Prays;
