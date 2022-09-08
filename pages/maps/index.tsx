import Forgotten from "@components/forgotten";
import Head from "@components/Head";
import Map from "@components/Map";
import { IMapsResponse, useMapsQuery } from "./query";

const Maps = () => {
	const { data } = useMapsQuery();
	return (
		<>
			<Head title="نقشه‌ی راه" />
			<section>
				<Forgotten />
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">نقشه‌ی راه</h3>
				<div className="flex flex-wrap items-center justify-between">
					{data &&
						data.map((data: IMapsResponse) => (
							<Map key={data.id} link={data.link} image={data.image} text={data.fa_name} />
						))}
				</div>
			</section>
		</>
	);
};

export default Maps;
