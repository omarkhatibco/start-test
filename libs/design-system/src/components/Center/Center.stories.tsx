import { Box, Center } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Center> = {
	component: Center,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		className: 'bg-surface-dim h-80 w-80',
	},
	render: (props) => {
		return (
			<Center bg={'content1'} h='xl' w='xl' {...props}>
				<Box bg='content2' color='fg.tertiary'>
					Mando AI
				</Box>
			</Center>
		)
	},
}
