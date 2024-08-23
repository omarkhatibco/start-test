import { Box, HStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef } from 'react'

const meta: Meta<typeof Box> = {
	component: Box,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Box bgColor='content1' h='xl' htmlWidth={100} w='xl'>
			Mando AI
		</Box>
	),
}

const BoxWithRef: React.FC = () => {
	const ref = useRef(null)

	useEffect(() => {
		console.log(useRef?.current)
	}, [])

	return (
		<>
			<Box
				bgColor='content1'
				h='xl'
				onClick={() => alert('clicked')}
				ref={ref}
				w='xl'
			>
				Mando AI
			</Box>
		</>
	)
}

export const WithRef: Story = {
	render: () => <BoxWithRef />,
}

export const WithContentColors: Story = {
	render: () => (
		<HStack gap={4}>
			<Box bgColor='content1' h='xl' htmlWidth={100} w='xl'>
				Mando AI
			</Box>
			<Box bgColor='content2' h='xl' htmlWidth={100} w='xl'>
				Mando AI
			</Box>
			<Box bgColor='content3' h='xl' htmlWidth={100} w='xl'>
				Mando AI
			</Box>
		</HStack>
	),
}
