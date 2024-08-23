import { Box, Divider, Stack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import '../'

const meta: Meta<typeof Stack> = {
	component: Stack,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Stack bg='bg.brand.section.subtle' w='560px' gap={2} p={4} {...props}>
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
			</Stack>
		)
	},
}

export const WithDivider: Story = {
	render: (props) => {
		return (
			<Stack bg='bg.brand.section.subtle' gap={2} p={4} {...props}>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Divider />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Divider />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Divider />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Divider />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Divider />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
			</Stack>
		)
	},
}
