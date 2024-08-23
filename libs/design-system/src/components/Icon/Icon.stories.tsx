import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
	component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Icon
			color={'text.brand.primary'}
			fontSize={'9xl'}
			icon='material-symbols:house-rounded'
		/>
	),
}
