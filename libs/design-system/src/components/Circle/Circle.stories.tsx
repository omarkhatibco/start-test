import { Circle } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Circle> = {
	component: Circle,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Circle bg={'bg.secondary'} color='fg.secondary' size='md' {...props}>
				Mando AI
			</Circle>
		)
	},
}
