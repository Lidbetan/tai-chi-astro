/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				mountains: "url(/assets/tianzi-1.jpg)",
			},
			colors: {
				background: "#FAF8F0",
				primary: "#E2D8B1",
				secondary: "#52AFA5",
				accent: "#EF9932",
				footer: "#B4B4B8",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
