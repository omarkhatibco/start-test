import { defineConfig } from '@pandacss/dev'
import type { Config } from '@pandacss/types'

import { preset } from './preset'

const sharedConfig = {
	presets: [preset],
	importMap: '@mando/styled-system',
	jsxFramework: 'react',
} satisfies Config

export const defineMandoAIConfig = (config: Omit<Config, 'preset'>) => {
	return defineConfig({
		...sharedConfig,

		...config,
	})
}
