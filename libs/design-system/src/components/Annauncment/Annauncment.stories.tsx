import type { Meta, StoryObj } from '@storybook/react'

import { VStack } from '@mando/styled-system/jsx'

import { Icon } from '../Icon'
import * as Annauncment from './Annauncment'

const meta: Meta<typeof Annauncment.Root> = {
	component: Annauncment.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const colorSchemes = ['default', 'error', 'success', 'warning'] as const
const variants = ['solid', 'outline'] as const
const sizes = ['sm', 'md', 'lg'] as const

export const Default: Story = {
	render: () => (
		<VStack gap={16}>
			{colorSchemes.map((colorScheme) => (
				<VStack key={colorScheme} gap={8}>
					{variants.map((variant) => (
						<VStack key={variant} gap={8} alignItems='center'>
							{sizes.map((size) => (
								<Annauncment.Root
									key={size}
									size={size}
									colorPalette={colorScheme}
									variant={variant}
								>
									<Annauncment.Type>Version 1.0</Annauncment.Type>
									We’ve just released a new feature
									<Icon icon='material-symbols:arrow-forward-rounded' />
								</Annauncment.Root>
							))}
						</VStack>
					))}
				</VStack>
			))}
		</VStack>
	),
}
export const WithAotherStyle: Story = {
	render: () => (
		<VStack gap={16}>
			{colorSchemes.map((colorScheme) => (
				<VStack key={colorScheme} gap={8}>
					{variants.map((variant) => (
						<VStack key={variant} gap={8} alignItems='center'>
							{sizes.map((size) => (
								<Annauncment.Root
									key={size}
									size={size}
									colorPalette={'success'}
									variant={variant}
									ps={'3.5'}
								>
									There was a problem with that action
									<Annauncment.Type>
										Fix now{' '}
										<Icon icon='material-symbols:arrow-forward-rounded' />
									</Annauncment.Type>
								</Annauncment.Root>
							))}
						</VStack>
					))}
				</VStack>
			))}
		</VStack>
	),
}
