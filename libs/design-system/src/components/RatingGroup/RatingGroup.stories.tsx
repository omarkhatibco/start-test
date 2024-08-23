import type { Meta, StoryObj } from '@storybook/react'

import { VStack } from '@mando/styled-system/jsx'
import { Icon } from '../'
import * as RatingGroup from './RatingGroup'

const meta: Meta<typeof RatingGroup.Root> = {
	component: RatingGroup.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<VStack>
				<RatingGroup.Root count={5} defaultValue={3} size='sm'>
					<RatingGroup.Label>Label</RatingGroup.Label>
					<RatingGroup.Control>
						<RatingGroup.Context>
							{({ items }) =>
								items.map((item) => (
									<RatingGroup.Item key={item} index={item}>
										<Icon icon='material-symbols:star-rounded' />
									</RatingGroup.Item>
								))
							}
						</RatingGroup.Context>
						<RatingGroup.HiddenInput />
					</RatingGroup.Control>
				</RatingGroup.Root>
				<RatingGroup.Root count={5} defaultValue={3} size='md'>
					<RatingGroup.Label>Label</RatingGroup.Label>
					<RatingGroup.Control>
						<RatingGroup.Context>
							{({ items }) =>
								items.map((item) => (
									<RatingGroup.Item key={item} index={item}>
										<Icon icon='material-symbols:star-rounded' />
									</RatingGroup.Item>
								))
							}
						</RatingGroup.Context>
						<RatingGroup.HiddenInput />
					</RatingGroup.Control>
				</RatingGroup.Root>
				<RatingGroup.Root count={5} defaultValue={3} size='lg'>
					<RatingGroup.Label>Label</RatingGroup.Label>
					<RatingGroup.Control>
						<RatingGroup.Context>
							{({ items }) =>
								items.map((item) => (
									<RatingGroup.Item key={item} index={item}>
										<Icon icon='material-symbols:star-rounded' />
									</RatingGroup.Item>
								))
							}
						</RatingGroup.Context>
						<RatingGroup.HiddenInput />
					</RatingGroup.Control>
				</RatingGroup.Root>
			</VStack>
		)
	},
}
export const withAllowHalf: Story = {
	render: () => {
		return (
			<RatingGroup.Root count={5} defaultValue={3} allowHalf>
				<RatingGroup.Label>Label</RatingGroup.Label>
				<RatingGroup.Control>
					<RatingGroup.Context>
						{({ items }) =>
							items.map((item) => (
								<RatingGroup.Item key={item} index={item}>
									<RatingGroup.ItemContext>
										{({ half, highlighted }) => {
											if (half)
												return (
													<Icon icon='material-symbols:star-half-rounded' />
												)
											if (highlighted)
												return (
													<Icon icon='material-symbols:star-rate-rounded' />
												)
											return (
												<Icon icon='material-symbols:star-rate-outline-rounded' />
											)
										}}
									</RatingGroup.ItemContext>
								</RatingGroup.Item>
							))
						}
					</RatingGroup.Context>
					<RatingGroup.HiddenInput />
				</RatingGroup.Control>
			</RatingGroup.Root>
		)
	},
}
export const withDisabled: Story = {
	render: () => {
		return (
			<RatingGroup.Root count={5} defaultValue={3} disabled>
				<RatingGroup.Label>Label</RatingGroup.Label>
				<RatingGroup.Control>
					<RatingGroup.Context>
						{({ items }) =>
							items.map((item) => (
								<RatingGroup.Item key={item} index={item}>
									<Icon icon='material-symbols:star-rounded' />
								</RatingGroup.Item>
							))
						}
					</RatingGroup.Context>
					<RatingGroup.HiddenInput />
				</RatingGroup.Control>
			</RatingGroup.Root>
		)
	},
}
