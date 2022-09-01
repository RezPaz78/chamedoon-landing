import Film from "@components/Film";
import Head from "@components/Head";

const Films = () => {
	return (
		<>
			<Head title="فیلم و مستند" />
			<section className="">
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
				<Film />
				<Film />
			</section>
		</>
	);
};

export default Films;
