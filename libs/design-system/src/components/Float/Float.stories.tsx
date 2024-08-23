import { Box, Flex, Float } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Float> = {
	component: Float,
	decorators: [
		(Story) => (
			<Flex maxW='50vh'>
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
			<Box pos='relative'>
				<Float placement={'top-start'} {...props}>
					3
				</Float>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
				consectetur amet porro ab non nemo ex aut aliquid exercitationem, eum
				omnis eius molestiae. Tempora atque praesentium doloremque incidunt
				minus laudantium.
			</Box>
		)
	},
}
