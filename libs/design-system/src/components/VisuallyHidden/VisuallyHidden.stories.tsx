import { Box, VisuallyHidden } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VisuallyHidden> = {
	component: VisuallyHidden,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<VisuallyHidden bg='bg.brand.section.subtle' maxW='350px' {...props}>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
				<Box bg='background' p={2}>
					Mando AI
				</Box>
			</VisuallyHidden>
		)
	},
}
