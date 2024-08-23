import { Box, Divider } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Divider> = {
	component: Divider,
	decorators: [
		(Story) => (
			<Box h='4' maxW='500px' mx='auto' w='50vw'>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => <Divider orientation='horizontal' />,
}
export const WithVertical: Story = {
	render: () => <Divider orientation='vertical' />,
}
