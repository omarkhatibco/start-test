import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'

import * as Field from './Field'

const meta: Meta<typeof Field.Root> = {
	component: Field.Root,
	decorators: [
		(Story) => (
			<styled.div mx='auto' w={'640px'}>
				<Story />
			</styled.div>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Textarea name='firstName' />
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithPlaceholder: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Textarea name='firstName' placeholder='Write username' />
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const withSizes: Story = {
	render: () => {
		return (
			<>
				<Field.Root size='sm'>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Textarea name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root size='md'>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Textarea name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root size='lg'>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Textarea name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
			</>
		)
	},
}

export const WithIcon: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Textarea name='firstName' placeholder='Write username' />
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithInvalid: Story = {
	render: () => {
		return (
			<Field.Root invalid>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Textarea name='message' placeholder='Enter Message' />
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithReadonly: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control data-disabled>
					<Field.Textarea name='message' placeholder='Enter Message' />
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithIsDisabled: Story = {
	render: () => {
		return (
			<Field.Root disabled>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Textarea name='password' placeholder='EnterPassword' />
					<Field.ControlSuffix>
						<Icon icon='material-symbols:search' />
					</Field.ControlSuffix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}
