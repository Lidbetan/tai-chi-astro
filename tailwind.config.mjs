/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: "auto 1fr auto",
			},
			backgroundImage: {
				mountainsBg: "url(/assets/background.png)",
				mountains1: "url(/assets/mountain_1.png)",
				mountains2: "url(/assets/mountain_2.png)",
				mountains3: "url(/assets/mountain_3.png)",
				mountains4: "url(/assets/mountain_4.png)",
				mountains5: "url(/assets/mountain_5.png)",
				mountains6: "url(/assets/mountain_6.png)",
				mountains7: "url(/assets/mountain_7.png)",
				mountains8: "url(/assets/mountain_8.png)",
				mountains9: "url(/assets/mountain_9.png)",
				mountains10: "url(/assets/mountain_10.png)",
				fog1: "url(/assets/fog_1.png)",
				fog2: "url(/assets/fog_2.png)",
				fog3: "url(/assets/fog_3.png)",
				fog4: "url(/assets/fog_4.png)",
				fog5: "url(/assets/fog_5.png)",
				fog6: "url(/assets/fog_6.png)",
				fog7: "url(/assets/fog_7.png)",
				sun: "url(/assets/sun_rays.png)",
				dragon: "url(/assets/banner-dragon.jpeg)",
			},
			colors: {
				background: "#FAF8F0",
				primary: "#E2D8B1",
				secondary: "#52AFA5",
				sky: "#C5EAE5",
				accent: "#EF9932",
				footer: "#B4B4B8",
			},
		},
	},
	plugins: [require("flowbite/plugin"), animations],
};
