import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '../'
import * as Pagination from './Pagination'

const meta: Meta<typeof Pagination.Root> = {
	component: Pagination.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<>
			<Pagination.Root count={5000} pageSize={10} siblingCount={2}>
				<Pagination.PrevTrigger>
					<Icon icon='material-symbols:chevron-left' />
					Previous
				</Pagination.PrevTrigger>
				<Pagination.Context>
					{(pagination) =>
						pagination.pages.map((page, index) =>
							page.type === 'page' ? (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Pagination.Item key={index} {...page}>
									{page.value}
								</Pagination.Item>
							) : (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Pagination.Ellipsis key={index} index={index}>
									&#8230;
								</Pagination.Ellipsis>
							),
						)
					}
				</Pagination.Context>
				<Pagination.NextTrigger>
					Next
					<Icon icon='material-symbols:chevron-right' />
				</Pagination.NextTrigger>
			</Pagination.Root>
		</>
	),
}

export const withIconsOnly: Story = {
	render: () => (
		<>
			<Pagination.Root count={5000} pageSize={10} siblingCount={2}>
				<Pagination.PrevTrigger>
					<Icon icon='material-symbols:chevron-left' />
				</Pagination.PrevTrigger>
				<Pagination.Context>
					{(pagination) =>
						pagination.pages.map((page, index) =>
							page.type === 'page' ? (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Pagination.Item key={index} {...page}>
									{page.value}
								</Pagination.Item>
							) : (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Pagination.Ellipsis key={index} index={index}>
									&#8230;
								</Pagination.Ellipsis>
							),
						)
					}
				</Pagination.Context>
				<Pagination.NextTrigger>
					<Icon icon='material-symbols:chevron-right' />
				</Pagination.NextTrigger>
			</Pagination.Root>
		</>
	),
}
