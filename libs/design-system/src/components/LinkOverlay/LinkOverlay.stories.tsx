import type { Meta, StoryObj } from '@storybook/react'

import { LinkOverlay, styled } from '@mando/styled-system/jsx'

const meta: Meta<typeof LinkOverlay> = {
	component: LinkOverlay,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<>
			<styled.p color='text.tertiary'>
				We care about your data in our{' '}
				<LinkOverlay href='#'>Privacy Policy</LinkOverlay>.
			</styled.p>
		</>
	),
}
