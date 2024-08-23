import type { Preset } from '@pandacss/types'

import * as layout from './layout'
import * as list from './list'

export const patterns: Preset['patterns'] = {
	extend: {
		...layout,
		...list,
	},
}
