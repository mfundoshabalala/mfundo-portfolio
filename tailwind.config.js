const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'food-pattern': `url("/images/svg/i-like-food.svg")`,
				'cogs-pattern': `url("/images/svg/floating-cogs.svg")`,
			},
		},
	},
	variants: {},
};
