import { Grid, GridItem } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Grid> = {
	component: Grid,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		className: 'bg-surface-dim w-80',
	},
	render: (props) => {
		return (
			<Grid bg='content1' p={2} w='md' {...props}>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
			</Grid>
		)
	},
}

export const WithGap: Story = {
	render: (props) => {
		return (
			<Grid bg='content1' gap={3} p={2} w='md' {...props}>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
			</Grid>
		)
	},
}

export const WithColumnsTemplate: Story = {
	args: {
		className: 'bg-surface-dim w-80 gap-4 p-4 grid-cols-3',
	},
	render: (props) => {
		return (
			<Grid bg='content1' columns={3} gap={3} p={2} w='md' {...props}>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
				<GridItem bg='content2' p='2'>
					Mando AI
				</GridItem>
			</Grid>
		)
	},
}
