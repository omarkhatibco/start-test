import { VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import * as SegmentGroup from './SegmentGroup'

const minOptions = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'customers', label: 'Customers' },
	{ id: 'premium', label: 'Premium', disabled: true },
	{ id: 'settings', label: 'Settings' },
]
const options = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'customers', label: 'Customers' },
	{ id: 'premium', label: 'Premium', disabled: true },
	{ id: 'settings', label: 'Settings' },
]

const variants = ['solid', 'underlined', 'bordered', 'ghost'] as const

const meta: Meta<typeof SegmentGroup.Root> = {
	component: SegmentGroup.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<VStack bgColor={'white'} width={'800px'} p={6} gap={4}>
				{variants.map((variant) => (
					<SegmentGroup.Root
						defaultValue='overview'
						variant={variant}
						key={variant}
						size='md'
						orientation='horizontal'
						onValueChange={(e) => console.log(e)}
					>
						{options.map((option) => (
							<SegmentGroup.Item
								key={option.id}
								value={option.id}
								disabled={option.disabled}
							>
								<SegmentGroup.ItemControl />
								<SegmentGroup.ItemHiddenInput />
								<SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
							</SegmentGroup.Item>
						))}
						<SegmentGroup.Indicator />
					</SegmentGroup.Root>
				))}
			</VStack>
		)
	},
}

export const WithVertical: Story = {
	render: () => {
		return (
			<VStack bgColor={'white'} width={'800px'} p={6} gap={4}>
				{variants.map((variant) => (
					<SegmentGroup.Root
						defaultValue='overview'
						variant={variant}
						key={variant}
						size='md'
						orientation='vertical'
						// isFullWidth
					>
						{minOptions.map((option) => (
							<SegmentGroup.Item
								key={option.id}
								value={option.id}
								disabled={option.disabled}
							>
								<SegmentGroup.ItemControl />
								<SegmentGroup.ItemHiddenInput />
								<SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
							</SegmentGroup.Item>
						))}
						<SegmentGroup.Indicator />
					</SegmentGroup.Root>
				))}
			</VStack>
		)
	},
}
