import { Box } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Pre } from './Pre'

const meta: Meta<typeof Pre> = {
	component: Pre,
	decorators: [
		(Story) => (
			<Box maxW='500px' mx='auto' w='50vh'>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		// prettier-ignore
		return (
			<Pre {...props}>
				L TE A A C V R A DOU LOU REUSE QUE TU PORTES ET QUI T' ORNE O CI VILISÉ
				OTE- TU VEUX LA BIEN SI RESPI RER - Apollinaire
			</Pre>
		)
	},
}
