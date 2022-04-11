const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	variants: {},
};
