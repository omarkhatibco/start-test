import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '@mando/styled-system/jsx'
import { CloseButton } from './CloseButton'

const meta: Meta<typeof CloseButton> = {
	component: CloseButton,
}

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['sm', 'md', 'lg'] as const

export const Default: Story = {
	render: (props) => (
		<>
			<Flex gap={8} alignItems='center'>
				{sizes.map((size) => (
					<CloseButton
						key={size}
						size={size}
						onClick={() => alert('Pressed')}
						{...props}
					/>
				))}
			</Flex>
		</>
	),
}
