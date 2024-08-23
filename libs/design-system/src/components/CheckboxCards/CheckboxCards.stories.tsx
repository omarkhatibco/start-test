import { VStack, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Icon } from '../'

import * as CheckboxCards from './CheckboxCards'

const meta: Meta<typeof CheckboxCards.Root> = {
	component: CheckboxCards.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<>
				<CheckboxCards.Group
					defaultValue={['react']}
					w={'400px'}
					flexDirection={'column'}
					size='sm'
				>
					<CheckboxCards.Root value={'react'} size='sm'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
					<CheckboxCards.Root value={'vue'} size='sm'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
				</CheckboxCards.Group>
				<CheckboxCards.Group
					defaultValue={['react']}
					w={'400px'}
					flexDirection={'column'}
					size='md'
				>
					<CheckboxCards.Root value={'react'} size='md'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
					<CheckboxCards.Root value={'vue'} size='md'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
				</CheckboxCards.Group>
				<CheckboxCards.Group
					defaultValue={['react']}
					w={'400px'}
					flexDirection={'column'}
					size='lg'
				>
					<CheckboxCards.Root value={'react'} size='lg'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
					<CheckboxCards.Root value={'vue'} size='lg'>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<CheckboxCards.Control>
							<CheckboxCards.Indicator>
								<Icon icon='material-symbols:check-rounded' />
							</CheckboxCards.Indicator>
						</CheckboxCards.Control>

						<CheckboxCards.HiddenInput />
					</CheckboxCards.Root>
				</CheckboxCards.Group>
			</>
		)
	},
}

export const WithInvalid: Story = {
	render: () => {
		return (
			<CheckboxCards.Root value={'react'} invalid>
				<Avatar.Root>
					<Avatar.Image
						src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
						alt='Colm Tuite'
					/>
					<Avatar.Fallback>CT</Avatar.Fallback>
				</Avatar.Root>
				<VStack gap={1} flex={1}>
					<styled.span>
						<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
						<styled.span>@olivia</styled.span>
					</styled.span>
					<styled.span>Product Manager, Integrations</styled.span>
				</VStack>
				<CheckboxCards.Control>
					<CheckboxCards.Indicator>
						<Icon icon='material-symbols:check-rounded' />
					</CheckboxCards.Indicator>
				</CheckboxCards.Control>

				<CheckboxCards.HiddenInput />
			</CheckboxCards.Root>
		)
	},
}

export const WithDisabled: Story = {
	render: () => {
		return (
			<CheckboxCards.Root value={'react'} disabled>
				<Avatar.Root>
					<Avatar.Image
						src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
						alt='Colm Tuite'
					/>
					<Avatar.Fallback>CT</Avatar.Fallback>
				</Avatar.Root>
				<VStack gap={1} flex={1}>
					<styled.span>
						<styled.span fontWeight={'medium'}>Olivia Rhye</styled.span>{' '}
						<styled.span>@olivia</styled.span>
					</styled.span>
					<styled.span>Product Manager, Integrations</styled.span>
				</VStack>
				<CheckboxCards.Control>
					<CheckboxCards.Indicator>
						<Icon icon='material-symbols:check-rounded' />
					</CheckboxCards.Indicator>
				</CheckboxCards.Control>

				<CheckboxCards.HiddenInput />
			</CheckboxCards.Root>
		)
	},
}
