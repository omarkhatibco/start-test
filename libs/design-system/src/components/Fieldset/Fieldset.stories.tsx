import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Field } from '../'

import * as Fieldset from './Fieldset'

const meta: Meta<typeof Fieldset.Root> = {
	component: Fieldset.Root,
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
				<Fieldset.Root>
					<Fieldset.Legend>Legend</Fieldset.Legend>
					<Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
					<Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
					<Field.Root>
						<Field.Label>Label</Field.Label>
						<Field.Control>
							<Field.Input name='firstName' />
						</Field.Control>
						<Field.HelperText>Field Helper Text</Field.HelperText>
						<Field.ErrorText>Field Error Text</Field.ErrorText>
					</Field.Root>
				</Fieldset.Root>
			</>
		)
	},
}
