import type { Meta, StoryObj } from '@storybook/react'

import { styled } from '@mando/styled-system/jsx'
import { Icon } from '../'
import { Link } from './Link'

const meta: Meta<typeof Link> = {}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<>
			<styled.p color='text.tertiary'>
				We care about your data in our <Link href='#'>Privacy Policy</Link>.
			</styled.p>
		</>
	),
}

export const withIcon: Story = {
	render: () => (
		<>
			<styled.p color='text.tertiary'>
				We care about your data in our{' '}
				<Link href='#'>
					Privacy Policy <Icon icon='mdi:lock-open' />
				</Link>
				.
			</styled.p>
		</>
	),
}
