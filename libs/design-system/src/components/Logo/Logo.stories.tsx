import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
	component: Logo,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => <Logo w='100vw' maxW='500px' />,
}
