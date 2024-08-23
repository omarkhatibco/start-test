import { AspectRatio, Box, Center, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '../'

const meta: Meta<typeof AspectRatio> = {
	component: AspectRatio,
	parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<AspectRatio
				bg='bg.brand.section.subtle'
				className='test'
				w='600px'
				ratio={16 / 9}
				{...props}
			>
				<styled.iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Youtube'
				/>
			</AspectRatio>
		)
	},
}

export const WithLayers: Story = {
	render: (props) => {
		return (
			<AspectRatio
				bg='bg.brand.section.subtle'
				w='600px'
				ratio={16 / 9}
				{...props}
			>
				<Image src='https://picsum.photos/600/400' />
				<Box aria-hidden={true} bg='black' opacity={0.2} />
				<Center>
					<styled.h2 color='on.primary'>Mando AI</styled.h2>
				</Center>
			</AspectRatio>
		)
	},
}
