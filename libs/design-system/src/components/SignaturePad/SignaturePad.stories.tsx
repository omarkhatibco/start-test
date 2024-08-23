import { Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as SignaturePad from './SignaturePad'

const meta: Meta<typeof SignaturePad.Root> = {
	component: SignaturePad.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Flex w='600px'>
				<SignaturePad.Root>
					<SignaturePad.Label>Sign below</SignaturePad.Label>
					<SignaturePad.Control>
						<SignaturePad.Segment />
						<SignaturePad.ClearTrigger>
							<Icon icon='material-symbols:refresh' />
						</SignaturePad.ClearTrigger>
						<SignaturePad.Guide />
					</SignaturePad.Control>
				</SignaturePad.Root>
			</Flex>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<Flex w='600px'>
				<SignaturePad.Root disabled>
					<SignaturePad.Label>Sign below</SignaturePad.Label>
					<SignaturePad.Control>
						<SignaturePad.Segment />
						<SignaturePad.ClearTrigger>
							<Icon icon='material-symbols:refresh' />
						</SignaturePad.ClearTrigger>
						<SignaturePad.Guide />
					</SignaturePad.Control>
				</SignaturePad.Root>
			</Flex>
		)
	},
}
