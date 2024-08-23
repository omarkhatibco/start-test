import { Box, Divider, HStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HStack> = {
	component: HStack,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<HStack bg='content1' p={4} {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</HStack>
		)
	},
}

export const WithSeparator: Story = {
	render: (props) => {
		return (
			<HStack bg='content1' gap={2} h={16} p={4} {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation='vertical' />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation='vertical' />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation='vertical' />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation='vertical' />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation='vertical' />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</HStack>
		)
	},
}
