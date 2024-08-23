import { Box, Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
	component: Skeleton,
	decorators: [
		(Story) => (
			<Box mx='auto' w='50vh' maxW={'500px'}>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<VStack gap={4}>
			<Skeleton h='160px' />
			<Flex gap={2} w='full' align={'flex-start'}>
				<Skeleton w='10' h='10' rounded='full' flex={'0 0 auto'} />
				<VStack w='full' gap={2}>
					{Array.from({ length: 2 }).map((_, i, arr) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Skeleton key={i} h='4' w={1 + i < arr.length ? 'full' : '3/4'} />
					))}
				</VStack>
			</Flex>
			<VStack w='full' gap={2}>
				{Array.from({ length: 5 }).map((_, i, arr) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Skeleton key={i} h='2' w={1 + i < arr.length ? 'full' : '3/4'} />
				))}
			</VStack>
		</VStack>
	),
}
