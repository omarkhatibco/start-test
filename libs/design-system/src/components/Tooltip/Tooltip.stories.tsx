import type { Meta, StoryObj } from '@storybook/react'

import { Icon, UnstyledButton } from '../'

import * as Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip.Root> = {
	component: Tooltip.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<UnstyledButton>
						<Icon icon='material-symbols:info-rounded' fontSize={24} />
					</UnstyledButton>
				</Tooltip.Trigger>
				<Tooltip.Positioner>
					<Tooltip.Content>
						<Tooltip.Arrow>
							<Tooltip.ArrowTip />
						</Tooltip.Arrow>
						I am a tooltip!
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Tooltip.Root>
		)
	},
}
