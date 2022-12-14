/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				chamedoon: {
					DEFAULT: "#FFCB05",
				},
				secondary: {
					DEFAULT: "#444444",
				},
				defaultbg: "rgb(18, 18, 23)",
				brown: {
					50: "#fdf8f6",
					100: "#f2e8e5",
					200: "#eaddd7",
					300: "#e0cec7",
					400: "#d2bab0",
					500: "#bfa094",
					600: "#a18072",
					700: "#977669",
					800: "#846358",
					900: "#43302b",
				},
			},
		},
		fontFamily: {
			IRANSans: ["IRANSans"],
			Ahang: ["Ahang"],
		},
	},
	plugins: [require("daisyui")],
};
