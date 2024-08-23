import { Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton } from '../'

import * as Dialog from './Dialog'

const meta: Meta<typeof Dialog.Root> = {
	component: Dialog.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button>Open Dialog</Button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner>
						<Dialog.Content maxW='breakpoint-sm'>
							<Dialog.Title>Blog post published</Dialog.Title>
							<Dialog.Description>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Nullam pulvinar risus non
								risus hendrerit venenatis. Pellentesque sit amet hendrerit
								risus, sed porttitor quam. Magna exercitation reprehenderit
								magna aute tempor cupidatat consequat elit dolor adipisicing.
								Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis
								sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
								Et mollit incididunt nisi consectetur esse laborum eiusmod
								pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
								veniam.
							</Dialog.Description>
							<Flex gap={2}>
								<Dialog.CloseTrigger asChild>
									<Button size='lg'>Cancel</Button>
								</Dialog.CloseTrigger>
								<Dialog.CloseTrigger asChild>
									<Button size='lg' colorPalette={'primary'}>
										Confirm
									</Button>
								</Dialog.CloseTrigger>
							</Flex>
							<Dialog.CloseTrigger asChild>
								<CloseButton />
							</Dialog.CloseTrigger>
						</Dialog.Content>
					</Dialog.Positioner>
				</Dialog.Portal>
			</Dialog.Root>
		)
	},
}
