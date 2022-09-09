import forgottenBackground from "assets/images/forgottenBackground.jpeg";
import { useState } from "react";
import { toast } from "react-toastify";
const Forgotten = () => {
	const [name, setName] = useState("");

	const handleSubmit = (event: Event) => {
		// 👇️ prevent page refresh
		event.preventDefault();
		toast.success("نام شما ثبت شد. ");
		setName("");
	};

	return (
		<div
			style={{
				backgroundSize: "contain",
				backgroundPosition: "100%",
				backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat",
				background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.87)), url(${forgottenBackground.src}`,
			}}
			className="mb-10 ml-5 w-full rounded-xl p-3 font-IRANSans ">
			<h2 className="pt-5 text-base font-extrabold text-[#EF3837]">نذر جا ماندگان اربعین</h2>
			<p className=" text-2xs p-3 text-justify font-normal text-white">
				عزیزانی که امسال، توفیق حضور در پیاده‌روی اربعین را پیدا نکرده‌اند ، می‌توانند نام خود را در
				این قسمت بنویسند تا زائران اربعین،قدم‌هایشان را به نیابت از آن‌ها، نذر کنند.
			</p>
			<form onSubmit={(e: any) => handleSubmit(e)}>
				<div className="relative">
					<button
						onClick={(e: any) => handleSubmit(e)}
						className="absolute left-2.5 bottom-2.5 rounded-lg bg-[#CF2D2C] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-[#CF2D2C] ">
						ثبت نام
					</button>
					<input
						value={name}
						onChange={(event) => setName(event.target.value)}
						type="text"
						id="name"
						className="block w-full rounded-lg border border-transparent bg-[#222222] p-4 pl-10 text-sm text-white outline-none focus:border-[#CF2D2C] focus:ring-[#CF2D2C] "
						placeholder="نام و نام خانوادگی"
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default Forgotten;
