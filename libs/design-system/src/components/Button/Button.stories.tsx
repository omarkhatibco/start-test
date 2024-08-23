import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'

import { Flex, VStack } from '@mando/styled-system/jsx'
import { Button } from './Button'
import { UnstyledButton } from './UnstyledButton'

const meta: Meta<typeof Button> = {
	component: Button,
}

export default meta

type Story = StoryObj<typeof meta>

const colorPalette = [
	'default',
	'primary',
	'success',
	'error',
	'warning',
] as const
const sizes = ['sm', 'md', 'lg'] as const
const variants = ['solid', 'outline', 'ghost'] as const

export const Default: Story = {
	render: (props) => (
		<VStack gap={16}>
			{colorPalette.map((colorPalette) => (
				<VStack key={colorPalette} gap={8}>
					{variants.map((variant) => (
						<Flex key={variant} gap={8} alignItems='center'>
							{sizes.map((size) => (
								<Button
									key={size}
									size={size}
									// colorPalette={colorPalette}
									pall={colorPalette}
									variant={variant}
									{...props}
								>
									{colorPalette} {variant}
								</Button>
							))}
						</Flex>
					))}
				</VStack>
			))}
		</VStack>
	),
}

export const withDisabled: Story = {
	render: (props) => (
		<VStack gap={16}>
			{colorPalette.map((colorPalette) => (
				<VStack key={colorPalette} gap={8}>
					{variants.map((variant) => (
						<Flex key={variant} gap={8} alignItems='center'>
							{sizes.map((size) => (
								<Button
									key={size}
									size={size}
									// colorPalette={colorPalette}
									pall={colorPalette}
									variant={variant}
									disabled
									{...props}
								>
									{colorPalette} {variant}
								</Button>
							))}
						</Flex>
					))}
				</VStack>
			))}
		</VStack>
	),
}

export const WithLoadingStatus: Story = {
	render: (props) => (
		<Button isLoading {...props}>
			Mando AI AI
		</Button>
	),
}

export const WithIcon: Story = {
	render: (props) => (
		<Flex gap={1}>
			{sizes.map((size) => (
				<Button key={size} size={size}>
					<Icon icon='solar:pen-linear' />
					Mando AI
				</Button>
			))}
		</Flex>
	),
}

export const WithIconOnly: Story = {
	render: (props) => (
		<Flex gap={1}>
			{sizes.map((size) => (
				<Button key={size} size={size} iconOnly>
					<Icon icon='material-symbols:add' />
				</Button>
			))}
		</Flex>
	),
}

export const WithHref: Story = {
	render: (props) => (
		<Button asChild {...props}>
			<a href='https://Mando AI' target='_blank' rel='noreferrer'>
				Mando AI
			</a>
		</Button>
	),
}

export const WithUnstyled: Story = {
	render: (props) => <UnstyledButton>Mando AI</UnstyledButton>,
}
