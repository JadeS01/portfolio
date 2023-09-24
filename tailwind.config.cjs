const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// for text
			fontFamily: {
				'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans']
			},
			colors: {
				primary: '#300904',
				lavender: {
					// black
					primary: '#212427',
					// white
					secondary: '#F0F0F0',
					tertiary: '#A594F9'
				},
				peach: {
					primary: '#36160b',
					secondary: '#F0F0F0',
					tertiary: '#F1B5CB'
				},
				ocean: {
					primary: '#F0F0F0',
					secondary: '#212427',
					tertiary: '#001C55'
				}
			},
			backgroundColor: {
				lavendar: {
					// main bg
					primary: '#CDC1FF',
					// boxes
					secondary: '#F5EFFF',
					// shadow
					tertiary: '#A594F9',
					// darkest
					quaternary: '#7371FC',
					accentColor: '#E5D9F2'
				},
				peach: {
					primary: '#F4C3C2',
					secondary: '#F3DAD8',
					tertiary: '#F1B5CB',
					quaternary: '#E88EED',
					accentColor: '#D6D9CE',
					accentColorDark: '#C3C8B7',
					lines: '#36160b'
				},
				ocean: {
					primary: '#0A2472',
					secondary: '#0E6BA8',
					tertiary: '#001C55',
					quaternary: '#00072D',
					accentColor: '#A6E1FA'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
