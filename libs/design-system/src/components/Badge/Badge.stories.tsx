import { Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Badge, Button, Icon } from '../'
import { Avatar } from '../Avatar'

const meta: Meta<typeof Badge> = {
	component: Badge,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Badge>
				<Icon icon='material-symbols:add' fontSize='24' />
			</Badge>
		)
	},
}

export const withAvatar: Story = {
	render: () => {
		return (
			<Badge>
				<Avatar.Root>
					<Avatar.Image
						src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
						alt='Colm Tuite'
					/>
					<Avatar.Fallback>CT</Avatar.Fallback>
				</Avatar.Root>
			</Badge>
		)
	},
}

export const WithOneDigit: Story = {
	render: (props) => {
		return (
			<Badge content='3' {...props}>
				<Button aria-label='login button' variant='ghost' iconOnly>
					<Icon icon='material-symbols:person-rounded' />
				</Button>
			</Badge>
		)
	},
}

export const WithTwoDigit: Story = {
	render: (props) => {
		return (
			<Badge content='99' {...props}>
				<Button aria-label='login button' variant='ghost' iconOnly>
					<Icon icon='material-symbols:person-rounded' />
				</Button>
			</Badge>
		)
	},
}
