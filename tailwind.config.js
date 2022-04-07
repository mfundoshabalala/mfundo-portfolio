const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	variants: {},
};
