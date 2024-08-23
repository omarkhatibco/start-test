import {
	List,
	ListItem,
	OrderedList,
	UnorderedList,
} from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'

const meta: Meta<typeof List> = {
	component: List,
}

export default meta

type Story = StoryObj<typeof meta>

export const WithUnorderedList: Story = {
	render: () => {
		return (
			<UnorderedList>
				<ListItem>Lorem ipsum dolor sit amet</ListItem>
				<ListItem>Consectetur adipiscing elit</ListItem>
				<ListItem>Integer molestie lorem at massa</ListItem>
				<ListItem>Facilisis in pretium nisl aliquet</ListItem>
			</UnorderedList>
		)
	},
}

export const WithOrderedList: Story = {
	render: () => {
		return (
			<OrderedList>
				<ListItem>Lorem ipsum dolor sit amet</ListItem>
				<ListItem>Consectetur adipiscing elit</ListItem>
				<ListItem>Integer molestie lorem at massa</ListItem>
				<ListItem>Facilisis in pretium nisl aliquet</ListItem>
			</OrderedList>
		)
	},
}

export const WithUnStyledListWithIcon: Story = {
	render: () => {
		return (
			<List>
				<ListItem>
					<Icon
						color='primary'
						display={'inline'}
						icon='material-symbols:star'
						lineHeight={'none'}
						mr={2}
					/>
					Lorem ipsum dolor sit amet
				</ListItem>
				<ListItem>
					<Icon
						color='primary'
						display={'inline'}
						icon='material-symbols:star'
						lineHeight={'none'}
						mr={2}
					/>
					Consectetur adipiscing elit
				</ListItem>
				<ListItem>
					<Icon
						color='primary'
						display={'inline'}
						icon='material-symbols:star'
						lineHeight={'none'}
						mr={2}
					/>
					Integer molestie lorem at massa
				</ListItem>
				<ListItem>
					<Icon
						color='primary'
						display={'inline'}
						icon='material-symbols:star'
						lineHeight={'none'}
						mr={2}
					/>
					Facilisis in pretium nisl aliquet
				</ListItem>
			</List>
		)
	},
}
