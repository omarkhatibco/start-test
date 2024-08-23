import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton } from '../'

import { Flex, VStack } from '@mando/styled-system/jsx'
import { FeaturedIcon, Icon } from '../'
import { SimpleToast, toast } from './SimpleToast'

const meta: Meta<typeof SimpleToast> = {
	component: SimpleToast,
}

export default meta

type Story = StoryObj<typeof meta>

const allTypes = [
	{
		name: 'Default',
		action: () => toast('Event has been created'),
	},
	{
		name: 'Description',
		action: () =>
			toast('Event has been created', {
				description: 'Monday, January 3rd at 6:00pm',
			}),
	},
	{
		name: 'Success',
		action: () => toast.success('Event has been created'),
	},
	{
		name: 'Info',
		action: () => toast.info('Be at the area 10 minutes before the event time'),
	},
	{
		name: 'Warning',
		action: () => toast.warning('Event start time cannot be earlier than 8am'),
	},
	{
		name: 'Error',
		action: () => toast.error('Event has not been created'),
	},
	{
		name: 'Action',
		action: () =>
			toast.message('Event has been created', {
				action: {
					label: 'Undo',
					onClick: () => console.log('Undo'),
				},
				cancel: {
					label: 'Cancel',
					onClick: () => console.log('Cancel'),
				},
			}),
	},
	{
		name: 'Promise',
		action: () =>
			toast.promise<{ name: string }>(
				() =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve({ name: 'Sonner' })
						}, 2000)
					}),
				{
					loading: 'Loading...',
					success: (data) => {
						return `${data.name} toast has been added`
					},
					error: 'Error',
				},
			),
	},
	{
		name: 'Custom',
		action: () =>
			toast(<div>A custom toast with default styling</div>, {
				duration: 1000000,
			}),
	},
]

export const Default: Story = {
	render: () => {
		return (
			<>
				<Flex gap={8}>
					{allTypes.map((type) => (
						<Button size='sm' key={type.name} onClick={type.action}>
							{type.name}
						</Button>
					))}
				</Flex>
				<SimpleToast />
			</>
		)
	},
}
