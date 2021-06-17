const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge:  [
      		"./{components,pages}/**/*.{js,ts,jsx,tsx}"
    		],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			trueGray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.red,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			green: colors.green,
			blue: colors.blue,
			teal: colors.teal,
			purple: colors.purple,
		},
		extend: {
			fontFamily: {
				header: ['"Dancing Script"'],
				body: ['"Fira Code"'],
				lato: ["Lato"],
			},
			backgroundImage: {
				facebook: `url("/images/facebook.svg")`,
				linkedin: `url("/images/linkedin.svg")`,
				twitter: `url("/images/twitter.svg")`,
				whatsapp: `url("/images/whatsapp.svg")`,
				github: `url("/images/github.svg")`,
				image: `url("/images/background-image.png")`,
				wave: `url("/images/wave.svg")`,
			},
			boxShadow: {
				custom: "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
			}
		},
	},
	variants: {
		extend: {
			 transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
		},
	},
	plugins: [require('@tailwindcss/forms'),],
};
