import {
	AspectRatio,
	Flex,
	Spacer,
	VStack,
	styled,
} from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Button, Icon, Image } from '../'

import { linkOverlay } from '@mando/styled-system/patterns'
import * as Card from './Card'

const meta: Meta<typeof Card.Root> = {
	component: Card.Root,
	decorators: [
		(Story) => (
			<styled.div maxW='360px' mx='auto'>
				<Story />
			</styled.div>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Card.Root {...props}>
				<Card.Header>
					<Flex gap={4} alignItems={'center'}>
						<Avatar.Root>
							<Avatar.Image src={'https://i.pravatar.cc/300'} />
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<styled.hgroup>
							<styled.h3 fontWeight={'semibold'}>Olivia Rhye</styled.h3>
							<styled.p>olivia@untitledui.com</styled.p>
						</styled.hgroup>
					</Flex>
					<Spacer />
					<Button aria-label='More' iconOnly variant='ghost'>
						<Icon icon='material-symbols:more-vert' />
					</Button>
				</Card.Header>
				<AspectRatio>
					<Image alt='my image' src='https://picsum.photos/600/400' />
				</AspectRatio>
				<Card.Body>
					<Card.Title>Lorem ipsum dolor sit amet</Card.Title>
					<Card.Description lineClamp={2}>
						Duis a libero id lorem bibendum tincidunt vel et mi. Mauris dapibus
						volutpat cursus. Phasellus scelerisque turpis at magna mattis
						lobortis. Nulla id lectus vitae lorem consectetur pellentesque.
					</Card.Description>
				</Card.Body>
				<Card.Footer>
					<Button>Click me</Button>
					<Button colorPalette={'primary'}>Click me</Button>
				</Card.Footer>
			</Card.Root>
		)
	},
}

export const WithoutHeader: Story = {
	render: (props) => {
		return (
			<Card.Root {...props}>
				<AspectRatio>
					<Image alt='my image' src='https://picsum.photos/600/400' />
				</AspectRatio>
				<Card.Body>
					<Card.Title>Lorem ipsum dolor sit amet</Card.Title>
					<Card.Description lineClamp={2}>
						Duis a libero id lorem bibendum tincidunt vel et mi. Mauris dapibus
						volutpat cursus. Phasellus scelerisque turpis at magna mattis
						lobortis. Nulla id lectus vitae lorem consectetur pellentesque.
					</Card.Description>
				</Card.Body>
				<Card.Footer>
					<Button>Click me</Button>
					<Button colorPalette={'primary'}>Click me</Button>
				</Card.Footer>
			</Card.Root>
		)
	},
}

export const WithBodyFooter: Story = {
	render: (props) => {
		return (
			<Card.Root {...props}>
				<Card.Body>
					<Card.Title>Lorem ipsum dolor sit amet</Card.Title>
					<Card.Description lineClamp={2}>
						Duis a libero id lorem bibendum tincidunt vel et mi. Mauris dapibus
						volutpat cursus. Phasellus scelerisque turpis at magna mattis
						lobortis. Nulla id lectus vitae lorem consectetur pellentesque.
					</Card.Description>
				</Card.Body>
				<Card.Footer>
					<Button>Click me</Button>
					<Button colorPalette={'primary'}>Click me</Button>
				</Card.Footer>
			</Card.Root>
		)
	},
}

export const WithLink: Story = {
	render: (props) => {
		return (
			<Card.Root {...props}>
				<Card.Header>
					<Flex gap={1} alignItems={'center'}>
						<Avatar.Root>
							<Avatar.Image src={'https://i.pravatar.cc/300'} />
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<styled.hgroup>
							<styled.h3 color='text.primary' fontWeight={'semibold'}>
								Olivia Rhye
							</styled.h3>
							<styled.p color='text.tertiary'>olivia@untitledui.com</styled.p>
						</styled.hgroup>
					</Flex>
					<Spacer />
					<Button aria-label='More' iconOnly variant='ghost'>
						<Icon icon='material-symbols:more-vert' />
					</Button>
				</Card.Header>
				<AspectRatio>
					<Image
						alt='my image'
						src='https://picsum.photos/600/400'
						zIndex={1}
					/>
				</AspectRatio>
				<Card.Body>
					<VStack gap={2}>
						<Card.Title>
							<a
								href='https://usemando.ai'
								title='mando.ai'
								target='_blank'
								rel='noreferrer'
								className={linkOverlay()}
							>
								Lorem ipsum dolor sit amet
							</a>
						</Card.Title>

						<styled.h2 color='on.surface.variant'>
							consectetur adipiscing
						</styled.h2>
						<Card.Description lineClamp={2}>
							Duis a libero id lorem bibendum tincidunt vel et mi. Mauris
							dapibus volutpat cursus. Phasellus scelerisque turpis at magna
							mattis lobortis. Nulla id lectus vitae lorem consectetur
							pellentesque.
						</Card.Description>
					</VStack>
				</Card.Body>
				<Card.Footer>
					<Button>Click me</Button>
					<Button colorPalette={'primary'}>Click me</Button>
				</Card.Footer>
			</Card.Root>
		)
	},
}
