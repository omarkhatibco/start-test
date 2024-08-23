import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Icon, UnstyledButton } from '../'

import * as Field from './Field'

const meta: Meta<typeof Field.Root> = {
	component: Field.Root,
	decorators: [
		(Story) => (
			<styled.div mx='auto' w={'360px'}>
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
			<>
				<Field.Root fontFamily={'inter'}>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Input name='firstName' />
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root fontFamily={'cairo'}>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Input name='firstName' />
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root fontFamily={'ibmArabic'}>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Input name='firstName' />
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
			</>
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
						<Field.Input name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
						<Field.ControlSuffix>
							<styled.span>@usemando.ai</styled.span>
						</Field.ControlSuffix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root size='md'>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Input name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
						<Field.ControlSuffix>
							<styled.span>@usemando.ai</styled.span>
						</Field.ControlSuffix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
				<Field.Root size='lg'>
					<Field.Label>Username</Field.Label>
					<Field.Control>
						<Field.Input name='firstName' placeholder='Write username' />
						<Field.ControlPrefix>
							<Icon icon='material-symbols:search' />
							<Icon icon='material-symbols:search' />
						</Field.ControlPrefix>
						<Field.ControlSuffix>
							<styled.span>@usemando.ai</styled.span>
						</Field.ControlSuffix>
					</Field.Control>
					<Field.HelperText>Supporting text</Field.HelperText>
					<Field.ErrorText>Error message</Field.ErrorText>
				</Field.Root>
			</>
		)
	},
}

export const WithPlaceholder: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Input name='firstName' placeholder='Write username' />
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WitSelect: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Select name='countryCode'>
						<option value='+1'>+1</option>
						<option value='+49'>+49</option>
						<option value='+44'>+44</option>
						<option value='+33'>+33</option>
						<option value='+358'>+358</option>
						<option value='+376'>+376</option>
						<option value='+972'>+972</option>
						<option value='+994'>+994</option>
						<option value='+39'>+39</option>
						<option value='+387'>+387</option>
						<option value='+374'>+374</option>
						<option value='+246'>+246</option>
					</Field.Select>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}
export const WithInlineSelect: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Input name='firstName' placeholder='Write username' />
					<Field.ControlPrefix>
						<Field.Select name='countryCode'>
							<option value='+1'>+1</option>
							<option value='+49'>+49</option>
							<option value='+44'>+44</option>
							<option value='+33'>+33</option>
							<option value='+358'>+358</option>
							<option value='+376'>+376</option>
							<option value='+972'>+972</option>
							<option value='+994'>+994</option>
							<option value='+39'>+39</option>
							<option value='+387'>+387</option>
							<option value='+374'>+374</option>
							<option value='+246'>+246</option>
						</Field.Select>
					</Field.ControlPrefix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithIcon: Story = {
	render: () => {
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Input name='firstName' placeholder='Write username' />
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
					<Field.ControlSuffix>
						<styled.span>@usemando.ai</styled.span>
					</Field.ControlSuffix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithIconAndButton: Story = {
	render: () => {
		const [type, setType] = useState('password')
		const isPassword = type === 'password'

		const onTogglePassword = () => {
			setType(isPassword ? 'text' : 'password')
		}
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Input
						name='password'
						placeholder='EnterPassword'
						type={type}
					/>

					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
					<Field.ControlSuffix>
						<UnstyledButton
							aria-label='show password'
							onClick={onTogglePassword}
						>
							<Icon
								icon={
									isPassword
										? 'material-symbols:visibility-rounded'
										: 'material-symbols:visibility-off-rounded'
								}
							/>
						</UnstyledButton>
					</Field.ControlSuffix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithInvalid: Story = {
	render: () => {
		const [type, setType] = useState('password')
		const isPassword = type === 'password'

		const onTogglePassword = () => {
			setType(isPassword ? 'text' : 'password')
		}
		return (
			<Field.Root invalid>
				<Field.Label>Username</Field.Label>
				<Field.Control>
					<Field.Input
						name='password'
						placeholder='EnterPassword'
						type={type}
					/>
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
					<Field.ControlSuffix>
						<UnstyledButton
							aria-label='show password'
							onClick={onTogglePassword}
						>
							<Icon
								icon={
									isPassword
										? 'material-symbols:visibility-rounded'
										: 'material-symbols:visibility-off-rounded'
								}
							/>
						</UnstyledButton>
					</Field.ControlSuffix>
				</Field.Control>
				<Field.HelperText>Supporting text</Field.HelperText>
				<Field.ErrorText>Error message</Field.ErrorText>
			</Field.Root>
		)
	},
}

export const WithReadonly: Story = {
	render: () => {
		const [type, setType] = useState('password')
		const isPassword = type === 'password'

		const onTogglePassword = () => {
			setType(isPassword ? 'text' : 'password')
		}
		return (
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control data-disabled>
					<Field.Input
						name='password'
						placeholder='EnterPassword'
						type={type}
					/>
					<Field.ControlPrefix>
						<Icon icon='material-symbols:search' />
					</Field.ControlPrefix>
					<Field.ControlSuffix>
						<UnstyledButton
							aria-label='show password'
							onClick={onTogglePassword}
						>
							<Icon
								icon={
									isPassword
										? 'material-symbols:visibility-rounded'
										: 'material-symbols:visibility-off-rounded'
								}
							/>
						</UnstyledButton>
					</Field.ControlSuffix>
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
					<Field.Input name='password' placeholder='EnterPassword' />
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
