import { Box, Divider, Flex, Spacer } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Flex> = {
	component: Flex,
	decorators: [
		(Story) => (
			<Flex>
				<Story />
			</Flex>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Flex bg='content1' w='md' {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</Flex>
		)
	},
}

export const WithSpacer: Story = {
	render: (props) => {
		return (
			<Flex bg='content1' w='md' {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Spacer />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</Flex>
		)
	},
}

export const WithGap: Story = {
	render: (props) => {
		return (
			<Flex bg='content1' gap={4} p={4} w='md' {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</Flex>
		)
	},
}

export const WithDivider: Story = {
	args: {
		className: 'bg-surface-bright w-80 gap-4 p-4',
	},
	render: (props) => {
		return (
			<Flex bg='content1' gap={4} p={4} w='md' {...props}>
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation={'vertical'} />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
				<Divider orientation={'vertical'} />
				<Box bg='content2' p={2}>
					Mando AI
				</Box>
			</Flex>
		)
	},
}
