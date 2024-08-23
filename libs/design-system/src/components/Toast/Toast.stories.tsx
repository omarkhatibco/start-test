import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton } from '../'

import { Flex, VStack } from '@mando/styled-system/jsx'
import { FeaturedIcon, Icon } from '../'
import * as Toast from './Toast'

const toaster = Toast.createToaster({
	placement: 'bottom-end',
	overlap: true,
	gap: 24,
	duration: 90000,
})

const meta: Meta<typeof Toast.Root> = {
	component: Toast.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const variantsMap = {
	info: 'brand',
	success: 'success',
	error: 'error',
	loading: 'brand',
	warning: 'warning',
} as const

export const Default: Story = {
	render: () => {
		return (
			<>
				<Flex gap={8}>
					<Button
						onClick={() =>
							toaster.create({
								title: 'We’ve just released a new update!',
								description:
									'Check out the all new dashboard view. Pages and exports now load faster.',
								type: 'info',
							})
						}
					>
						Info
					</Button>
					<Button
						onClick={() =>
							toaster.create({
								title: 'We’ve just released a new update!',
								description:
									'Check out the all new dashboard view. Pages and exports now load faster.',
								type: 'success',
							})
						}
					>
						Success
					</Button>
					<Button
						onClick={() =>
							toaster.create({
								title: 'We’ve just released a new update!',
								description:
									'Check out the all new dashboard view. Pages and exports now load faster.',
								type: 'error',
							})
						}
					>
						Error
					</Button>
					<Button
						onClick={() =>
							toaster.create({
								title: 'We’ve just released a new update!',
								description:
									'Check out the all new dashboard view. Pages and exports now load faster.',
								type: 'warning',
							})
						}
					>
						Warning
					</Button>
					<Button
						onClick={() =>
							toaster.create({
								title: 'We’ve just released a new update!',
								description:
									'Check out the all new dashboard view. Pages and exports now load faster.',
								type: 'loading',
							})
						}
					>
						Loading
					</Button>
				</Flex>
				<Toast.Toaster toaster={toaster}>
					{(toast) => (
						<Toast.Root key={toast.id}>
							<VStack gap={1}>
								<Flex>
									<Toast.Context>
										{(context) => (
											<FeaturedIcon
												size='sm'
												// @ts-expect-error
												palette={variantsMap?.[context.type] ?? 'brand'}
											>
												<Icon icon='material-symbols:info-outline' />
											</FeaturedIcon>
										)}
									</Toast.Context>
								</Flex>
								<Toast.Title>{toast.title}</Toast.Title>
								<Toast.Description>{toast.description}</Toast.Description>
							</VStack>
							<Flex gap={2}>
								<Toast.ActionTrigger asChild>
									<Button size='sm'>Dismiss</Button>
								</Toast.ActionTrigger>
								<Toast.ActionTrigger asChild>
									<Button colorPalette={'primary'} size='sm'>
										Change Log
									</Button>
								</Toast.ActionTrigger>
							</Flex>

							<Toast.CloseTrigger asChild>
								<CloseButton inOverlay />
							</Toast.CloseTrigger>
						</Toast.Root>
					)}
				</Toast.Toaster>
			</>
		)
	},
}
