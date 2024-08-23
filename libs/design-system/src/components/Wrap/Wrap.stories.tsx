import { Box, Wrap } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Wrap> = {
	component: Wrap,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Wrap
				bgColor='content1'
				rounded='lg'
				shadow={'sm'}
				maxW='350px'
				{...props}
			>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
			</Wrap>
		)
	},
}
