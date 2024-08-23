import { Box, Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'
import * as CircularProgress from './CircularProgress'

const meta: Meta<typeof CircularProgress.Root> = {
	component: CircularProgress.Root,
	decorators: [
		(Story) => (
			<Box mx='auto' w='600px'>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['sm', 'md', 'lg'] as const
export const Default: Story = {
	render: () => {
		const [value, setValue] = useState(0)

		useEffect(() => {
			const interval = setInterval(() => {
				if (value === 100) {
					setValue(0)
					return
				}
				setValue((value) => value + 1)
			}, 100)

			return () => clearInterval(interval)
		}, [value])

		return (
			<Flex gap={4} alignItems='center'>
				{sizes.map((size) => (
					<CircularProgress.Root
						key={size}
						size={size}
						value={value}
						translations={{
							value({ value, max }) {
								return `${value}%`
							},
						}}
					>
						<CircularProgress.Label>Label</CircularProgress.Label>
						<CircularProgress.ValueText />
						<CircularProgress.Circle>
							<CircularProgress.CircleTrack />
							<CircularProgress.CircleRange />
						</CircularProgress.Circle>
					</CircularProgress.Root>
				))}
			</Flex>
		)
	},
}

export const withIntermediateValue: Story = {
	render: () => {
		return (
			<Flex gap={4} alignItems='center'>
				{sizes.map((size) => (
					<CircularProgress.Root
						key={size}
						size={size}
						value={null}
						translations={{
							value({ value, max }) {
								return value === null ? null : `${value}%`
							},
						}}
					>
						<CircularProgress.Label>Label</CircularProgress.Label>
						<CircularProgress.ValueText />
						<CircularProgress.Circle>
							<CircularProgress.CircleTrack />
							<CircularProgress.CircleRange />
						</CircularProgress.Circle>
					</CircularProgress.Root>
				))}
			</Flex>
		)
	},
}
