import { VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import * as PinInput from './PinInput'

const meta: Meta<typeof PinInput.Root> = {
	component: PinInput.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const sized = ['sm', 'md', 'lg'] as const

export const Default: Story = {
	render: () => {
		return (
			<VStack>
				{sized.map((size) => (
					<PinInput.Root
						key={size}
						onValueComplete={(e) => alert(e.valueAsString)}
						size={size}
					>
						<PinInput.Label>Label</PinInput.Label>
						<PinInput.Control>
							{[0, 1, 2].map((id, index) => (
								<PinInput.Input key={id} index={index} />
							))}
						</PinInput.Control>
						<PinInput.HiddenInput />
					</PinInput.Root>
				))}
			</VStack>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<VStack>
				{sized.map((size) => (
					<PinInput.Root
						key={size}
						onValueComplete={(e) => alert(e.valueAsString)}
						size={size}
						invalid
					>
						<PinInput.Label>Label</PinInput.Label>
						<PinInput.Control>
							{[0, 1, 2].map((id, index) => (
								<PinInput.Input key={id} index={index} />
							))}
						</PinInput.Control>
						<PinInput.HiddenInput />
					</PinInput.Root>
				))}
			</VStack>
		)
	},
}
export const withDisabled: Story = {
	render: () => {
		return (
			<VStack>
				{sized.map((size) => (
					<PinInput.Root
						key={size}
						onValueComplete={(e) => alert(e.valueAsString)}
						size={size}
						disabled
					>
						<PinInput.Label>Label</PinInput.Label>
						<PinInput.Control>
							{[0, 1, 2].map((id, index) => (
								<PinInput.Input key={id} index={index} />
							))}
						</PinInput.Control>
						<PinInput.HiddenInput />
					</PinInput.Root>
				))}
			</VStack>
		)
	},
}
