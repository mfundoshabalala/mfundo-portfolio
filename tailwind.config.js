const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge:  [
		"./public/**/*.html",
		"./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
				orange: colors.orange,
			},
			fontFamily: {
				header: ['"Dancing Script"'],
				firaCode: ['"Fira Code"'],
				firaSans: ["'Fira Sans'"],
				lato: ["'Lato'"],
				lora: ["'lora', serif"],
				roboto: ["'Roboto'"],
				open: ["'OpenSans'"],
				poppins: ["'Poppins'"],
			},
			backgroundImage: {
				image: `url("/images/background-image.png")`,
				wave: `url("/images/wave.svg")`,
			},
			boxShadow: {
				custom: "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
			}
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/forms')],
};
