import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	current: { value: 'currentColor' },
	black: { value: '#000' },
	white: { value: '#fff' },
	transparent: { value: 'rgb(0 0 0 / 0)' },

	// volcan: {
	// 	50: { value: '#f4f6fb' },
	// 	100: { value: '#e7ecf7' },
	// 	200: { value: '#cad6ed' },
	// 	300: { value: '#9cb4dd' },
	// 	400: { value: '#668cca' },
	// 	500: { value: '#436eb4' },
	// 	600: { value: '#325697' },
	// 	700: { value: '#29457b' },
	// 	800: { value: '#253c67' },
	// 	900: { value: '#243556' },
	// 	950: { value: '#0c111d' },
	// },

	blue: {
		50: { value: '#e6f1fe' },
		100: { value: '#cce3fd' },
		200: { value: '#99c7fb' },
		300: { value: '#66aaf9' },
		400: { value: '#338ef7' },
		500: { value: '#006FEE' },
		600: { value: '#005bc4' },
		700: { value: '#004493' },
		800: { value: '#002e62' },
		900: { value: '#001731' },
	},

	green: {
		50: { value: '#e8faf0' },
		100: { value: '#d1f4e0' },
		200: { value: '#a2e9c1' },
		300: { value: '#74dfa2' },
		400: { value: '#45d483' },
		500: { value: '#17c964' },
		600: { value: '#12a150' },
		700: { value: '#0e793c' },
		800: { value: '#095028' },
		900: { value: '#052814' },
	},

	red: {
		50: { value: '#fee7ef' },
		100: { value: '#fdd0df' },
		200: { value: '#faa0bf' },
		300: { value: '#f871a0' },
		400: { value: '#f54180' },
		500: { value: '#f31260' },
		600: { value: '#c20e4d' },
		700: { value: '#920b3a' },
		800: { value: '#610726' },
		900: { value: '#310413' },
	},
	yellow: {
		50: { value: '#fefce8' },
		100: { value: '#fdedd3' },
		200: { value: '#fbdba7' },
		300: { value: '#f9c97c' },
		400: { value: '#f7b750' },
		500: { value: '#f5a524' },
		600: { value: '#c4841d' },
		700: { value: '#936316' },
		800: { value: '#62420e' },
		900: { value: '#312107' },
	},

	zinc: {
		'50': { value: '#fafafa' },
		'100': { value: '#f4f4f5' },
		'200': { value: '#e4e4e7' },
		'300': { value: '#d4d4d8' },
		'400': { value: '#a1a1aa' },
		'500': { value: '#71717a' },
		'600': { value: '#52525b' },
		'700': { value: '#3f3f46' },
		'800': { value: '#27272a' },
		'900': { value: '#18181b' }, // might change to volkan one
	},
})

export const semanticColors = defineSemanticTokens.colors({
	background: {
		DEFAULT: {
			value: {
				base: '{colors.white}',
				_dark: '{colors.black}',
			},
		},
	},
	foreground: {
		50: {
			value: {
				base: '{colors.zinc.50}',
				_dark: '{colors.zinc.900}',
			},
		},
		100: {
			value: {
				base: '{colors.zinc.100}',
				_dark: '{colors.zinc.800}',
			},
		},
		200: {
			value: {
				base: '{colors.zinc.200}',
				_dark: '{colors.zinc.700}',
			},
		},
		300: {
			value: {
				base: '{colors.zinc.300}',
				_dark: '{colors.zinc.600}',
			},
		},
		400: {
			value: {
				base: '{colors.zinc.400}',
				_dark: '{colors.zinc.500}',
			},
		},
		500: {
			value: {
				base: '{colors.zinc.500}',
				_dark: '{colors.zinc.400}',
			},
		},
		600: {
			value: {
				base: '{colors.zinc.600}',
				_dark: '{colors.zinc.300}',
			},
		},
		700: {
			value: {
				base: '{colors.zinc.700}',
				_dark: '{colors.zinc.200}',
			},
		},
		800: {
			value: {
				base: '{colors.zinc.800}',
				_dark: '{colors.zinc.100}',
			},
		},
		900: {
			value: {
				base: '{colors.zinc.900}',
				_dark: '{colors.zinc.50}',
			},
		},
		DEFAULT: {
			value: {
				base: '{colors.zinc.900}',
				_dark: '{colors.zinc.50}',
			},
		},
	},
	divider: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.900/15}',
				_dark: '{colors.white/15}',
			},
		},
	},
	focus: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.500}',
				_dark: '{colors.zinc.500}',
			},
		},
	},
	overlay: {
		DEFAULT: {
			value: {
				base: '{colors.black}',
				_dark: '{colors.white}',
			},
		},
	},
	content1: {
		DEFAULT: {
			value: {
				base: '{colors.white}',
				_dark: '{colors.zinc.900}',
			},
		},
		foreground: {
			value: {
				base: '{colors.zinc.900}',
				_dark: '{colors.zinc.50}',
			},
		},
	},
	content2: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.100}',
				_dark: '{colors.zinc.800}',
			},
		},
		foreground: {
			value: {
				base: '{colors.zinc.800}',
				_dark: '{colors.zinc.100}',
			},
		},
	},
	content3: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.200}',
				_dark: '{colors.zinc.700}',
			},
		},
		foreground: {
			value: {
				base: '{colors.zinc.700}',
				_dark: '{colors.zinc.200}',
			},
		},
	},
	content4: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.300}',
				_dark: '{colors.zinc.600}',
			},
		},
		foreground: {
			value: {
				base: '{colors.zinc.600}',
				_dark: '{colors.zinc.300}',
			},
		},
	},
	default: {
		50: {
			value: {
				base: '{colors.zinc.50}',
				_dark: '{colors.zinc.900}',
			},
		},
		100: {
			value: {
				base: '{colors.zinc.100}',
				_dark: '{colors.zinc.800}',
			},
		},
		200: {
			value: {
				base: '{colors.zinc.200}',
				_dark: '{colors.zinc.700}',
			},
		},
		300: {
			value: {
				base: '{colors.zinc.300}',
				_dark: '{colors.zinc.600}',
			},
		},
		400: {
			value: {
				base: '{colors.zinc.400}',
				_dark: '{colors.zinc.500}',
			},
		},
		500: {
			value: {
				base: '{colors.zinc.500}',
				_dark: '{colors.zinc.400}',
			},
		},
		600: {
			value: {
				base: '{colors.zinc.600}',
				_dark: '{colors.zinc.300}',
			},
		},
		700: {
			value: {
				base: '{colors.zinc.700}',
				_dark: '{colors.zinc.200}',
			},
		},
		800: {
			value: {
				base: '{colors.zinc.800}',
				_dark: '{colors.zinc.100}',
			},
		},
		900: {
			value: {
				base: '{colors.zinc.900}',
				_dark: '{colors.zinc.50}',
			},
		},
		DEFAULT: {
			value: {
				base: '{colors.zinc.200}',
				_dark: '{colors.zinc.800}',
			},
		},
		foreground: {
			value: {
				base: '{colors.black}',
				_dark: '{colors.white}',
			},
		},
	},
	primary: {
		DEFAULT: {
			value: {
				base: '{colors.zinc.900}',
				_dark: '{colors.white}',
			},
		},
		foreground: {
			value: {
				base: '{colors.white}',
				_dark: '{colors.zinc.900}',
			},
		},
	},
	success: {
		50: {
			value: {
				base: '{colors.green.50}',
				_dark: '{colors.green.900}',
			},
		},
		100: {
			value: {
				base: '{colors.green.100}',
				_dark: '{colors.green.800}',
			},
		},
		200: {
			value: {
				base: '{colors.green.200}',
				_dark: '{colors.green.700}',
			},
		},
		300: {
			value: {
				base: '{colors.green.300}',
				_dark: '{colors.green.600}',
			},
		},
		400: {
			value: {
				base: '{colors.green.400}',
				_dark: '{colors.green.500}',
			},
		},
		500: {
			value: {
				base: '{colors.green.500}',
				_dark: '{colors.green.400}',
			},
		},
		600: {
			value: {
				base: '{colors.green.600}',
				_dark: '{colors.green.300}',
			},
		},
		700: {
			value: {
				base: '{colors.green.700}',
				_dark: '{colors.green.200}',
			},
		},
		800: {
			value: {
				base: '{colors.green.800}',
				_dark: '{colors.green.100}',
			},
		},
		900: {
			value: {
				base: '{colors.green.900}',
				_dark: '{colors.green.50}',
			},
		},
		DEFAULT: {
			value: '{colors.green.500}',
		},
		foreground: {
			value: '{colors.black}',
		},
	},
	warning: {
		50: {
			value: {
				base: '{colors.yellow.50}',
				_dark: '{colors.yellow.900}',
			},
		},
		100: {
			value: {
				base: '{colors.yellow.100}',
				_dark: '{colors.yellow.800}',
			},
		},
		200: {
			value: {
				base: '{colors.yellow.200}',
				_dark: '{colors.yellow.700}',
			},
		},
		300: {
			value: {
				base: '{colors.yellow.300}',
				_dark: '{colors.yellow.600}',
			},
		},
		400: {
			value: {
				base: '{colors.yellow.400}',
				_dark: '{colors.yellow.500}',
			},
		},
		500: {
			value: {
				base: '{colors.yellow.500}',
				_dark: '{colors.yellow.400}',
			},
		},
		600: {
			value: {
				base: '{colors.yellow.600}',
				_dark: '{colors.yellow.300}',
			},
		},
		700: {
			value: {
				base: '{colors.yellow.700}',
				_dark: '{colors.yellow.200}',
			},
		},
		800: {
			value: {
				base: '{colors.yellow.800}',
				_dark: '{colors.yellow.100}',
			},
		},
		900: {
			value: {
				base: '{colors.yellow.900}',
				_dark: '{colors.yellow.50}',
			},
		},
		DEFAULT: {
			value: '{colors.yellow.500}',
		},
		foreground: {
			value: '{colors.black}',
		},
	},
	info: {
		50: {
			value: {
				base: '{colors.blue.50}',
				_dark: '{colors.blue.900}',
			},
		},
		100: {
			value: {
				base: '{colors.blue.100}',
				_dark: '{colors.blue.800}',
			},
		},
		200: {
			value: {
				base: '{colors.blue.200}',
				_dark: '{colors.blue.700}',
			},
		},
		300: {
			value: {
				base: '{colors.blue.300}',
				_dark: '{colors.blue.600}',
			},
		},
		400: {
			value: {
				base: '{colors.blue.400}',
				_dark: '{colors.blue.500}',
			},
		},
		500: {
			value: {
				base: '{colors.blue.500}',
				_dark: '{colors.blue.400}',
			},
		},
		600: {
			value: {
				base: '{colors.blue.600}',
				_dark: '{colors.blue.300}',
			},
		},
		700: {
			value: {
				base: '{colors.blue.700}',
				_dark: '{colors.blue.200}',
			},
		},
		800: {
			value: {
				base: '{colors.blue.800}',
				_dark: '{colors.blue.100}',
			},
		},
		900: {
			value: {
				base: '{colors.blue.900}',
				_dark: '{colors.blue.50}',
			},
		},
		DEFAULT: {
			value: '{colors.blue.500}',
		},
		foreground: {
			value: '{colors.black}',
		},
	},
	error: {
		50: {
			value: {
				base: '{colors.red.50}',
				_dark: '{colors.red.900}',
			},
		},
		100: {
			value: {
				base: '{colors.red.100}',
				_dark: '{colors.red.800}',
			},
		},
		200: {
			value: {
				base: '{colors.red.200}',
				_dark: '{colors.red.700}',
			},
		},
		300: {
			value: {
				base: '{colors.red.300}',
				_dark: '{colors.red.600}',
			},
		},
		400: {
			value: {
				base: '{colors.red.400}',
				_dark: '{colors.red.500}',
			},
		},
		500: {
			value: {
				base: '{colors.red.500}',
				_dark: '{colors.red.400}',
			},
		},
		600: {
			value: {
				base: '{colors.red.600}',
				_dark: '{colors.red.300}',
			},
		},
		700: {
			value: {
				base: '{colors.red.700}',
				_dark: '{colors.red.200}',
			},
		},
		800: {
			value: {
				base: '{colors.red.800}',
				_dark: '{colors.red.100}',
			},
		},
		900: {
			value: {
				base: '{colors.red.900}',
				_dark: '{colors.red.50}',
			},
		},
		DEFAULT: {
			value: '{colors.red.500}',
		},
		foreground: {
			value: '{colors.white}',
		},
	},
})
