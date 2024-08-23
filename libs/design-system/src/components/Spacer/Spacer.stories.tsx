import { Box, Flex, Spacer } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spacer> = {
	component: Spacer,
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
	render: () => {
		return (
			<Flex bg='bg.brand.section.subtle' w='md'>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Spacer />
				<Box bg='background' p={2}>
					Mando AI
				</Box>
			</Flex>
		)
	},
}
