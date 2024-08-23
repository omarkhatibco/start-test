import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton, Icon } from '../'

import * as Popover from './Popover'

const meta: Meta<typeof Popover.Root> = {
	component: Popover.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<>
				<Popover.Root>
					<Popover.Trigger asChild>
						<Button iconOnly variant='solid' colorPalette={'primary'}>
							<Icon icon='material-symbols:info' />
						</Button>
					</Popover.Trigger>
					<Popover.Positioner>
						<Popover.Content>
							<Popover.Arrow>
								<Popover.ArrowTip />
							</Popover.Arrow>
							<Popover.Title>Favorite Framework</Popover.Title>
							<Popover.Description>
								Tell us what is your favorite framework and why you love to use
								it.
							</Popover.Description>
							<Popover.CloseTrigger asChild>
								<CloseButton />
							</Popover.CloseTrigger>
						</Popover.Content>
					</Popover.Positioner>
				</Popover.Root>
			</>
		)
	},
}
