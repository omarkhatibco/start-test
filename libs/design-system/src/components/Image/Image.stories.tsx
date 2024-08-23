import { Box } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './Image'

const meta: Meta<typeof Image> = {
	component: Image,
	decorators: [
		(Story) => (
			<Box maxW={'600px'}>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Image
				alt='My random image'
				src='https://picsum.photos/600/400'
				{...props}
			/>
		)
	},
}
