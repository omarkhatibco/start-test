import { VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import * as NumberInput from './NumberInput'

const meta: Meta<typeof NumberInput.Root> = {
	component: NumberInput.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<VStack>
				<NumberInput.Root>
					<NumberInput.Label>Label</NumberInput.Label>
					<NumberInput.Control>
						<NumberInput.Input placeholder='olivia@untitledui.com' />
						<NumberInput.IncrementTrigger>
							<Icon icon='material-symbols:add' />
						</NumberInput.IncrementTrigger>
						<NumberInput.DecrementTrigger>
							<Icon icon='material-symbols:remove' />
						</NumberInput.DecrementTrigger>
					</NumberInput.Control>
				</NumberInput.Root>
			</VStack>
		)
	},
}

export const withSize: Story = {
	render: () => {
		return (
			<VStack>
				<NumberInput.Root size='sm'>
					<NumberInput.Label>Label</NumberInput.Label>
					<NumberInput.Control>
						<NumberInput.Input placeholder='olivia@untitledui.com' />
						<NumberInput.IncrementTrigger>
							<Icon icon='material-symbols:add' />
						</NumberInput.IncrementTrigger>
						<NumberInput.DecrementTrigger>
							<Icon icon='material-symbols:remove' />
						</NumberInput.DecrementTrigger>
					</NumberInput.Control>
				</NumberInput.Root>
				<NumberInput.Root size='md'>
					<NumberInput.Label>Label</NumberInput.Label>
					<NumberInput.Control>
						<NumberInput.Input placeholder='olivia@untitledui.com' />
						<NumberInput.IncrementTrigger>
							<Icon icon='material-symbols:add' />
						</NumberInput.IncrementTrigger>
						<NumberInput.DecrementTrigger>
							<Icon icon='material-symbols:remove' />
						</NumberInput.DecrementTrigger>
					</NumberInput.Control>
				</NumberInput.Root>
				<NumberInput.Root size='lg'>
					<NumberInput.Label>Label</NumberInput.Label>
					<NumberInput.Control>
						<NumberInput.Input placeholder='olivia@untitledui.com' />
						<NumberInput.IncrementTrigger>
							<Icon icon='material-symbols:add' />
						</NumberInput.IncrementTrigger>
						<NumberInput.DecrementTrigger>
							<Icon icon='material-symbols:remove' />
						</NumberInput.DecrementTrigger>
					</NumberInput.Control>
				</NumberInput.Root>
			</VStack>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<NumberInput.Root invalid>
				<NumberInput.Label>Label</NumberInput.Label>
				<NumberInput.Control>
					<NumberInput.Input placeholder='olivia@untitledui.com' />
					<NumberInput.IncrementTrigger>
						<Icon icon='material-symbols:add' />
					</NumberInput.IncrementTrigger>
					<NumberInput.DecrementTrigger>
						<Icon icon='material-symbols:remove' />
					</NumberInput.DecrementTrigger>
				</NumberInput.Control>
			</NumberInput.Root>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<NumberInput.Root disabled>
				<NumberInput.Label>Label</NumberInput.Label>
				<NumberInput.Control>
					<NumberInput.Input placeholder='olivia@untitledui.com' />
					<NumberInput.IncrementTrigger>
						<Icon icon='material-symbols:add' />
					</NumberInput.IncrementTrigger>
					<NumberInput.DecrementTrigger>
						<Icon icon='material-symbols:remove' />
					</NumberInput.DecrementTrigger>
				</NumberInput.Control>
			</NumberInput.Root>
		)
	},
}
