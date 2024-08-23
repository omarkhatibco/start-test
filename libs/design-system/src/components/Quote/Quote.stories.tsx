import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Quote } from './Quote'

const meta: Meta<typeof Quote> = {
	component: Quote,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<styled.p>
				His famous quote,{' '}
				<Quote>
					Styles come and go. Good design is a language, not a style
				</Quote>
				, elegantly summs up Massimo’s philosophy of design.
			</styled.p>
		)
	},
}
