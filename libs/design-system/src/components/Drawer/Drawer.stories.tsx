import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton } from '../'

import * as Drawer from './Drawer'

const meta: Meta<typeof Drawer.Root> = {
	component: Drawer.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Drawer.Root>
				<Drawer.Trigger asChild>
					<Button>Open Drawer</Button>
				</Drawer.Trigger>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Title</Drawer.Title>
							<Drawer.Description>Description</Drawer.Description>
							<Drawer.CloseTrigger asChild>
								<CloseButton inOverlay />
							</Drawer.CloseTrigger>
						</Drawer.Header>
						<Drawer.Body>
							This blog post has been published. Team members will be able to
							edit this post and republish changes.
						</Drawer.Body>
						<Drawer.Footer gap='3'>
							<Drawer.CloseTrigger asChild>
								<Button>Cancel</Button>
							</Drawer.CloseTrigger>
							<Button colorPalette={'primary'}>Primary</Button>
						</Drawer.Footer>
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer.Root>
		)
	},
}
