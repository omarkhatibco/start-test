import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '@mando/styled-system/jsx'
import * as Avatar from './Avatar'

const meta: Meta<typeof Avatar.Root> = {
	component: Avatar.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

export const Default: Story = {
	render: () => (
		<Flex gap={4}>
			{sizes.map((size) => (
				<Avatar.Root key={size} size={size}>
					<Avatar.Image
						src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
						alt='Colm Tuite'
					/>
					<Avatar.Fallback>CT</Avatar.Fallback>
				</Avatar.Root>
			))}
		</Flex>
	),
}

export const WithNameOnly: Story = {
	render: () => (
		<Flex gap={4}>
			{sizes.map((size) => (
				<Avatar.Root key={size} size={size}>
					<Avatar.Fallback>CT</Avatar.Fallback>
				</Avatar.Root>
			))}
		</Flex>
	),
}
