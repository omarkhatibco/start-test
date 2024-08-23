import { Box, Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'
import * as LinearProgress from './LinearProgress'

const meta: Meta<typeof LinearProgress.Root> = {
	component: LinearProgress.Root,
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
			<LinearProgress.Root value={value}>
				<Flex justifyContent={'space-between'} alignItems={'center'} w='full'>
					<LinearProgress.Label>Label</LinearProgress.Label>
					<LinearProgress.ValueText />
				</Flex>
				<LinearProgress.Track>
					<LinearProgress.Range />
				</LinearProgress.Track>
			</LinearProgress.Root>
		)
	},
}

export const withIntermediateValue: Story = {
	render: () => {
		return (
			<LinearProgress.Root value={null}>
				<LinearProgress.Label>Label</LinearProgress.Label>
				<LinearProgress.ValueText />
				<LinearProgress.Track>
					<LinearProgress.Range />
				</LinearProgress.Track>
			</LinearProgress.Root>
		)
	},
}
