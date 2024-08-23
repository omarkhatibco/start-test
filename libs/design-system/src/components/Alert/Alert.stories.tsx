import { Box, Flex, VStack, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, CloseButton, FeaturedIcon, Icon } from '../'
import * as Alert from './Alert'

const meta: Meta<typeof Alert.Root> = {
	component: Alert.Root,
	decorators: [
		(Story) => (
			<Box mx='auto' w='70vw'>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Alert.Root>
				<FeaturedIcon>
					<Icon icon='material-symbols:info-outline' />
				</FeaturedIcon>
				<VStack gap={2}>
					<styled.hgroup>
						<Alert.Title>
							Just to let you know this might be a problem
						</Alert.Title>
						<Alert.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							pariatur, ipsum dolor.
						</Alert.Description>
					</styled.hgroup>
					<Flex gap={2}>
						<Button variant='ghost'>Dismiss</Button>
						<Button colorPalette={'primary'}>View Changes</Button>
					</Flex>
				</VStack>
				<CloseButton inOverlay />
			</Alert.Root>
		)
	},
}

export const WithFullWidth: Story = {
	render: () => {
		return (
			<Alert.Root variant='fullWidth'>
				<FeaturedIcon>
					<Icon icon='material-symbols:info-outline' />
				</FeaturedIcon>
				<Alert.Title>Just to let you know this might be a problem</Alert.Title>
				<Alert.Description>
					Lorem ipsum dolor sit amet consectetur
				</Alert.Description>
				<Flex
					w={{ base: 'full', md: 'auto' }}
					gap={2}
					ms={{ base: '0', md: 'auto' }}
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems={{ base: 'stretch', md: 'center' }}
				>
					<Button variant='ghost'>Dismiss</Button>
					<Button colorPalette={'primary'}>View Changes</Button>
					<CloseButton display={{ mdDown: 'none' }} />
				</Flex>
				<CloseButton display={{ md: 'none' }} inOverlay />
			</Alert.Root>
		)
	},
}
