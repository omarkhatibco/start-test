import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Button, Icon } from '../'

import { HStack, Stack, styled } from '@mando/styled-system/jsx'

import * as HoverCard from './HoverCard'

const meta: Meta<typeof HoverCard.Root> = {
	component: HoverCard.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<>
				<HoverCard.Root>
					<HoverCard.Trigger asChild>
						<Button iconOnly>
							<Icon icon='material-symbols:info' />
						</Button>
					</HoverCard.Trigger>
					<HoverCard.Positioner>
						<HoverCard.Content>
							<HoverCard.Arrow>
								<HoverCard.ArrowTip />
							</HoverCard.Arrow>
							<Stack gap='4' direction='row'>
								<Avatar.Root>
									<Avatar.Image
										src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
										alt='Colm Tuite'
									/>
									<Avatar.Fallback>OK</Avatar.Fallback>
								</Avatar.Root>

								<Stack gap='3'>
									<Stack gap='1'>
										<styled.h1>Omar Khatib</styled.h1>
										<styled.p>Cofounder of Mando AI</styled.p>
									</Stack>
									<HStack gap='1' color='fg.subtle'>
										<Icon icon='material-symbols:info' />
										<styled.p>Germany</styled.p>
									</HStack>
								</Stack>
							</Stack>
						</HoverCard.Content>
					</HoverCard.Positioner>
				</HoverCard.Root>
			</>
		)
	},
}
