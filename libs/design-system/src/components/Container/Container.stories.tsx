import { Box, Container } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
	component: Container,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Container bg='bg.brand.section.subtle' {...props}>
				<Box bg='bg.secondary' color='text.secondary' p={2}>
					Mando AI
				</Box>
				<Box bg='bg.secondary' color='text.secondary' p={2}>
					Mando AI
				</Box>
			</Container>
		)
	},
}

export const WithFluid: Story = {
	render: (props) => {
		return (
			<Container bg='bg.brand.section.subtle' maxW={'full'} {...props}>
				<Box bg='bg.secondary' color='text.secondary' p={2}>
					Mando AI
				</Box>
				<Box bg='bg.secondary' color='text.secondary' p={2}>
					Mando AI
				</Box>
			</Container>
		)
	},
}
