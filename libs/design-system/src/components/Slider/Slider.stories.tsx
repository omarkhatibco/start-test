import { VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Card } from '../'

import { Box } from '@mando/styled-system/jsx'
import * as Slider from './Slider'

const meta: Meta<typeof Slider.Root> = {
	component: Slider.Root,
	decorators: [
		(Story) => (
			<Box mx='auto' w='360px'>
				<Story />
			</Box>
		),
	],
}

const marks = [
	{ value: 25, label: '25' },
	{ value: 50, label: '50' },
	{ value: 75, label: '75' },
]

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<VStack gap={16}>
				<Slider.Root size='sm'>
					<Slider.Label>Label</Slider.Label>
					<Slider.ValueText />
					<Slider.Control>
						<Slider.Track>
							<Slider.Range />
						</Slider.Track>
						<Slider.Thumb index={0}>
							<Slider.HiddenInput />
						</Slider.Thumb>
					</Slider.Control>
					<Slider.MarkerGroup>
						{marks.map((mark) => (
							<Slider.Marker key={mark.value} value={mark.value}>
								{mark.label}
							</Slider.Marker>
						))}
					</Slider.MarkerGroup>
				</Slider.Root>
				<Slider.Root size='md'>
					<Slider.Label>Label</Slider.Label>
					<Slider.ValueText />
					<Slider.Control>
						<Slider.Track>
							<Slider.Range />
						</Slider.Track>
						<Slider.Thumb index={0}>
							<Slider.HiddenInput />
						</Slider.Thumb>
					</Slider.Control>
					<Slider.MarkerGroup>
						{marks.map((mark) => (
							<Slider.Marker key={mark.value} value={mark.value}>
								{mark.label}
							</Slider.Marker>
						))}
					</Slider.MarkerGroup>
				</Slider.Root>
				<Slider.Root size='lg'>
					<Slider.Label>Label</Slider.Label>
					<Slider.ValueText />
					<Slider.Control>
						<Slider.Track>
							<Slider.Range />
						</Slider.Track>
						<Slider.Thumb index={0}>
							<Slider.HiddenInput />
						</Slider.Thumb>
					</Slider.Control>
					<Slider.MarkerGroup>
						{marks.map((mark) => (
							<Slider.Marker key={mark.value} value={mark.value}>
								{mark.label}
							</Slider.Marker>
						))}
					</Slider.MarkerGroup>
				</Slider.Root>
			</VStack>
		)
	},
}

export const WithRange: Story = {
	render: () => {
		return (
			<Slider.Root defaultValue={[5, 30]}>
				<Slider.Label>Label</Slider.Label>
				<Slider.ValueText />
				<Slider.Control>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
					<Slider.Thumb index={1}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
				<Slider.MarkerGroup>
					{marks.map((mark) => (
						<Slider.Marker key={mark.value} value={mark.value}>
							{mark.label}
						</Slider.Marker>
					))}
				</Slider.MarkerGroup>
			</Slider.Root>
		)
	},
}
