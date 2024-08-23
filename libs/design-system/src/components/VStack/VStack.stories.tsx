import { Box, Divider, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VStack> = {
	component: VStack,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<VStack
				bgColor='content1'
				rounded='lg'
				shadow={'sm'}
				gap={2}
				p={4}
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
			</VStack>
		)
	},
}

export const WithDivider: Story = {
	render: (props) => {
		return (
			<VStack
				bgColor='content1'
				rounded='lg'
				shadow={'sm'}
				gap={2}
				p={4}
				{...props}
			>
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
			</VStack>
		)
	},
}
