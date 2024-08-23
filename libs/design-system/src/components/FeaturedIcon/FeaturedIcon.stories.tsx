import { Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { FeaturedIcon } from './FeaturedIcon'

import { Icon } from '../'

const meta: Meta<typeof FeaturedIcon> = {
	component: FeaturedIcon,
}

export default meta

type Story = StoryObj<typeof meta>

const palette = ['brand', 'error', 'warning', 'success'] as const
const sizes = ['sm', 'md', 'lg', 'xl'] as const

export const Default: Story = {
	render: (props) => {
		return (
			<VStack gap={8}>
				{palette.map((palette) => (
					<Flex key={palette} gap={8} alignItems='center'>
						{sizes.map((size) => (
							<FeaturedIcon key={size} size={size} palette={palette}>
								<Icon icon='material-symbols:info-outline' />
							</FeaturedIcon>
						))}
					</Flex>
				))}
			</VStack>
		)
	},
}
