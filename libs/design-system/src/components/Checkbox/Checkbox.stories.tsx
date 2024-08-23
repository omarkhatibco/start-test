import { Box, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Card, Icon, Link } from '../'

import * as Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox.Root> = {
	component: Checkbox.Root,
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
			<>
				<Checkbox.Root size='sm'>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon icon='material-symbols:check-rounded' />
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>
						I accept the{' '}
						<Link href='https://usemando.ai'>Terms of Service</Link> and{' '}
						<Link href='https://usemando.ai'>Privacy Policy</Link>
					</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
				<Checkbox.Root size='md'>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon icon='material-symbols:check-rounded' />
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>
						I accept the{' '}
						<Link href='https://usemando.ai'>Terms of Service</Link> and{' '}
						<Link href='https://usemando.ai'>Privacy Policy</Link>
					</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
				<Checkbox.Root size='lg'>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon icon='material-symbols:check-rounded' />
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>
						I accept the{' '}
						<Link href='https://usemando.ai'>Terms of Service</Link> and{' '}
						<Link href='https://usemando.ai'>Privacy Policy</Link>
					</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
			</>
		)
	},
}
export const withGroup: Story = {
	render: () => {
		return (
			<Checkbox.Group defaultValue={['react']} onValueChange={console.log}>
				<Checkbox.Root value={'react'}>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon icon='material-symbols:check-rounded' />
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>React</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
				<Checkbox.Root value={'vue'}>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon icon='material-symbols:check-rounded' />
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>Vue</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
			</Checkbox.Group>
		)
	},
}

export const WithInvalid: Story = {
	render: () => {
		return (
			<Checkbox.Root invalid>
				<Checkbox.Control>
					<Checkbox.Indicator>
						<Icon icon='material-symbols:check-rounded' />
					</Checkbox.Indicator>
				</Checkbox.Control>
				<Checkbox.Label>
					I accept the <Link href='https://usemando.ai'>Terms of Service</Link>{' '}
					and <Link href='https://usemando.ai'>Privacy Policy</Link>
				</Checkbox.Label>
				<Checkbox.HiddenInput />
			</Checkbox.Root>
		)
	},
}

export const WithDisabled: Story = {
	render: () => {
		return (
			<Checkbox.Root disabled>
				<Checkbox.Control>
					<Checkbox.Indicator>
						<Icon icon='material-symbols:check-rounded' />
					</Checkbox.Indicator>
				</Checkbox.Control>
				<Checkbox.Label>
					I accept the <Link href='https://usemando.ai'>Terms of Service</Link>{' '}
					and <Link href='https://usemando.ai'>Privacy Policy</Link>
				</Checkbox.Label>
				<Checkbox.HiddenInput />
			</Checkbox.Root>
		)
	},
}
