import { Box, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../'

import * as Collapsible from './Collapsible'

const meta: Meta<typeof Collapsible.Root> = {
	component: Collapsible.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Collapsible.Root>
				<VStack>
					<Collapsible.Trigger asChild>
						<Button>Toggle</Button>
					</Collapsible.Trigger>

					<Collapsible.Content>
						<Box bg='bg.tertiary' bgColor='red' color='fg.tertiary' p={2}>
							Mando AI
						</Box>
					</Collapsible.Content>
				</VStack>
			</Collapsible.Root>
		)
	},
}
