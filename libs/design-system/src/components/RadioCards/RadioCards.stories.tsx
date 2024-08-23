import { VStack, styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import * as RadioCards from './RadioCards'

import { Avatar } from '../'

const meta: Meta<typeof RadioCards.Root> = {
	component: RadioCards.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const options = [
	{ id: 'react', label: 'React' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'svelte', label: 'Svelte', disabled: true },
	{ id: 'vue', label: 'Vue' },
]

export const Default: Story = {
	render: () => {
		return (
			<>
				<RadioCards.Root defaultValue='react' w={'400px'} size='sm'>
					<RadioCards.Label>Select a framework</RadioCards.Label>
					{options.map((option) => (
						<RadioCards.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<Avatar.Root>
								<Avatar.Image
									src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
									alt='Colm Tuite'
								/>
								<Avatar.Fallback>CT</Avatar.Fallback>
							</Avatar.Root>
							<VStack gap={1} flex={1}>
								<styled.span>
									<styled.span fontWeight={'medium'} color='text.secondary'>
										Olivia Rhye
									</styled.span>{' '}
									<styled.span>@olivia</styled.span>
								</styled.span>
								<styled.span>Product Manager, Integrations</styled.span>
							</VStack>
							<RadioCards.ItemControl />
							<RadioCards.HiddenInput />
						</RadioCards.Item>
					))}
				</RadioCards.Root>
				<RadioCards.Root defaultValue='react' w={'400px'} size='md'>
					<RadioCards.Label>Select a framework</RadioCards.Label>
					{options.map((option) => (
						<RadioCards.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<Avatar.Root>
								<Avatar.Image
									src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
									alt='Colm Tuite'
								/>
								<Avatar.Fallback>CT</Avatar.Fallback>
							</Avatar.Root>
							<VStack gap={1} flex={1}>
								<styled.span>
									<styled.span fontWeight={'medium'} color='text.secondary'>
										Olivia Rhye
									</styled.span>{' '}
									<styled.span>@olivia</styled.span>
								</styled.span>
								<styled.span>Product Manager, Integrations</styled.span>
							</VStack>
							<RadioCards.ItemControl />
							<RadioCards.HiddenInput />
						</RadioCards.Item>
					))}
				</RadioCards.Root>
				<RadioCards.Root defaultValue='react' w={'400px'} size='lg'>
					<RadioCards.Label>Select a framework</RadioCards.Label>
					{options.map((option) => (
						<RadioCards.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<Avatar.Root>
								<Avatar.Image
									src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
									alt='Colm Tuite'
								/>
								<Avatar.Fallback>CT</Avatar.Fallback>
							</Avatar.Root>

							<VStack gap={1} flex={1}>
								<styled.span>
									<styled.span fontWeight={'medium'} color='text.secondary'>
										Olivia Rhye
									</styled.span>{' '}
									<styled.span>@olivia</styled.span>
								</styled.span>
								<styled.span>Product Manager, Integrations</styled.span>
							</VStack>
							<RadioCards.ItemControl />
							<RadioCards.HiddenInput />
						</RadioCards.Item>
					))}
				</RadioCards.Root>
			</>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<RadioCards.Root defaultValue='react' w={'400px'}>
				<RadioCards.Label>Select a framework</RadioCards.Label>
				{options.map((option) => (
					<RadioCards.Item
						key={option.id}
						value={option.id}
						disabled={option.disabled}
						invalid
					>
						<Avatar.Root>
							<Avatar.Image
								src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
								alt='Colm Tuite'
							/>
							<Avatar.Fallback>CT</Avatar.Fallback>
						</Avatar.Root>
						<VStack gap={1} flex={1}>
							<styled.span>
								<styled.span fontWeight={'medium'} color='text.secondary'>
									Olivia Rhye
								</styled.span>{' '}
								<styled.span>@olivia</styled.span>
							</styled.span>
							<styled.span>Product Manager, Integrations</styled.span>
						</VStack>
						<RadioCards.ItemControl />
						<RadioCards.HiddenInput />
					</RadioCards.Item>
				))}
			</RadioCards.Root>
		)
	},
}
