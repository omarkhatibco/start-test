import { Square } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Square> = {
	component: Square,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Square
				bgColor='content1'
				rounded='lg'
				shadow={'sm'}
				size='md'
				{...props}
			>
				Mando AI
			</Square>
		)
	},
}
