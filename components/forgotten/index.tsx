import forgottenBackground from "assets/images/forgottenBackground.jpeg";
const Forgotten = () => {
	return (
		<div
			style={{
				backgroundSize: "contain",
				backgroundPosition: "100%",
				backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat",
				background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.87)), url(${forgottenBackground.src}`,
			}}
			className="mb-10 ml-5 w-full p-3 rounded-xl font-IRANSans ">
			<h2 className="text-[#EF3837] font-extrabold pt-5 text-base">نذر جا ماندگان اربعین</h2>
			<p className=" p-3 text-white font-normal text-2xs text-justify">
				عزیزانی که امسال، توفیق حضور در پیاده‌روی اربعین را پیدا نکرده‌اند ، می‌توانند نام خود را در
				این قسمت بنویسند تا زائران اربعین،قدم‌هایشان را به نیابت از آن‌ها، نذر کنند.
			</p>
			<form>
				<label
					htmlFor="search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
					Your Email
				</label>
				<div className="relative">
					<button
						type="submit"
						className="text-white absolute left-2.5 bottom-2.5 bg-[#CF2D2C] focus:ring-4 focus:outline-none focus:ring-[#CF2D2C] font-medium rounded-lg text-sm px-4 py-2 ">
						ثبت
					</button>
					<input
						type="text"
						id="name"
						className="block p-4 pl-10 w-full text-sm text-white bg-[#222222] rounded-lg border border-transparent focus:ring-[#CF2D2C] outline-none focus:border-[#CF2D2C] "
						placeholder="نام و نام خانوادگی"
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default Forgotten;
