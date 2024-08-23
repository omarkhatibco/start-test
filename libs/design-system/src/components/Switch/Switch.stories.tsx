import { Box, VStack, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Card } from '../'

import * as Switch from './Switch'

const meta: Meta<typeof Switch.Root> = {
	component: Switch.Root,
	decorators: [
		(Story) => (
			<Box mx='auto' w='360px'>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<VStack>
				<Switch.Root size='sm'>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
					<Switch.Label display={'flex'} flexDir={'column'}>
						<styled.span>Remember me</styled.span>
						<styled.span color='text.tertiary' fontWeight={'normal'}>
							Save my login details for next time.
						</styled.span>
					</Switch.Label>
					<Switch.HiddenInput />
				</Switch.Root>
				<Switch.Root size='md'>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
					<Switch.Label display={'flex'} flexDir={'column'}>
						<styled.span>Remember me</styled.span>
						<styled.span color='text.tertiary' fontWeight={'normal'}>
							Save my login details for next time.
						</styled.span>
					</Switch.Label>
					<Switch.HiddenInput />
				</Switch.Root>
				<Switch.Root size='lg'>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
					<Switch.Label display={'flex'} flexDir={'column'}>
						<styled.span>Remember me</styled.span>
						<styled.span color='text.tertiary' fontWeight={'normal'}>
							Save my login details for next time.
						</styled.span>
					</Switch.Label>
					<Switch.HiddenInput />
				</Switch.Root>
			</VStack>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<Switch.Root disabled>
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
				<Switch.Label>Label</Switch.Label>
				<Switch.HiddenInput />
			</Switch.Root>
		)
	},
}
