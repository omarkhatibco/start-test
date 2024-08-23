import { Bleed, Box } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Bleed> = {
	component: Bleed,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Box p={8} bg={'content1'} {...props}>
				<Bleed bgColor={'content2'} inline={8}>
					Mando AI
				</Bleed>
			</Box>
		)
	},
}
