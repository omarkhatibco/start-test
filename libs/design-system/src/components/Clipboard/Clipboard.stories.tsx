import type { Meta, StoryObj } from '@storybook/react'

import { VStack } from '@mando/styled-system/jsx'

import { Icon } from '../Icon'
import * as Clipboard from './Clipboard'

const meta: Meta<typeof Clipboard.Root> = {
	component: Clipboard.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Clipboard.Root value='https://usemando.ai'>
				<Clipboard.Label>Copy this link</Clipboard.Label>
				<Clipboard.Control>
					<Clipboard.Input />
					<Clipboard.Trigger>
						<Clipboard.Indicator
							copied={<Icon icon='material-symbols:check' />}
						>
							<Icon icon='material-symbols:content-copy' />
						</Clipboard.Indicator>
					</Clipboard.Trigger>
				</Clipboard.Control>
			</Clipboard.Root>
		)
	},
}

export const withSize: Story = {
	render: () => {
		return (
			<VStack>
				<Clipboard.Root value='https://usemando.ai' size='sm'>
					<Clipboard.Label>Copy this link</Clipboard.Label>
					<Clipboard.Control>
						<Clipboard.Input />
						<Clipboard.Trigger>
							<Clipboard.Indicator
								copied={<Icon icon='material-symbols:check' />}
							>
								<Icon icon='material-symbols:content-copy' />
							</Clipboard.Indicator>
						</Clipboard.Trigger>
					</Clipboard.Control>
				</Clipboard.Root>
				<Clipboard.Root value='https://usemando.ai' size='md'>
					<Clipboard.Label>Copy this link</Clipboard.Label>
					<Clipboard.Control>
						<Clipboard.Input />
						<Clipboard.Trigger>
							<Clipboard.Indicator
								copied={<Icon icon='material-symbols:check' />}
							>
								<Icon icon='material-symbols:content-copy' />
							</Clipboard.Indicator>
						</Clipboard.Trigger>
					</Clipboard.Control>
				</Clipboard.Root>
				<Clipboard.Root value='https://usemando.ai' size='lg'>
					<Clipboard.Label>Copy this link</Clipboard.Label>
					<Clipboard.Control>
						<Clipboard.Input />
						<Clipboard.Trigger>
							<Clipboard.Indicator
								copied={<Icon icon='material-symbols:check' />}
							>
								<Icon icon='material-symbols:content-copy' />
							</Clipboard.Indicator>
						</Clipboard.Trigger>
					</Clipboard.Control>
				</Clipboard.Root>
			</VStack>
		)
	},
}
