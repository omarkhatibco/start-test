import { Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { UnstyledButton } from '../Button'
import { Icon } from '../Icon'
import * as Combobox from './Combobox'

const meta: Meta<typeof Combobox.Root> = {
	component: Combobox.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const items = ['React', 'Solid', 'Vue']

export const Default: Story = {
	render: () => {
		return (
			<Flex w='300px'>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.ClearTrigger>
							<Icon icon='material-symbols:cancel' />
						</Combobox.ClearTrigger>
						<Combobox.Trigger>
							<Icon icon='material-symbols:keyboard-arrow-down' />
						</Combobox.Trigger>
					</Combobox.Control>

					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
			</Flex>
		)
	},
}

export const withSize: Story = {
	render: () => {
		return (
			<VStack w='300px'>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
					size='sm'
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.ClearTrigger>
							<Icon icon='material-symbols:cancel' />
						</Combobox.ClearTrigger>
						<Combobox.Trigger>
							<Icon icon='material-symbols:keyboard-arrow-down' />
						</Combobox.Trigger>
					</Combobox.Control>

					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
					size='md'
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.ClearTrigger>
							<Icon icon='material-symbols:cancel' />
						</Combobox.ClearTrigger>
						<Combobox.Trigger>
							<Icon icon='material-symbols:keyboard-arrow-down' />
						</Combobox.Trigger>
					</Combobox.Control>

					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
					size='lg'
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.ClearTrigger>
							<Icon icon='material-symbols:cancel' />
						</Combobox.ClearTrigger>
						<Combobox.Trigger>
							<Icon icon='material-symbols:keyboard-arrow-down' />
						</Combobox.Trigger>
					</Combobox.Control>

					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
			</VStack>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<Flex w='300px'>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
					invalid
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.ClearTrigger>
							<Icon icon='material-symbols:cancel' />
						</Combobox.ClearTrigger>
						<Combobox.Trigger>
							<Icon icon='material-symbols:keyboard-arrow-down' />
						</Combobox.Trigger>
					</Combobox.Control>

					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
			</Flex>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<Flex w='300px'>
				<Combobox.Root
					items={items}
					placeholder='Select a framework'
					lazyMount
					unmountOnExit
					disabled
				>
					<Combobox.Label>Framework</Combobox.Label>
					<Combobox.Control>
						<Combobox.Input />
						<Combobox.Trigger asChild>
							<UnstyledButton>
								<Icon icon='material-symbols:keyboard-arrow-down' />
							</UnstyledButton>
						</Combobox.Trigger>
					</Combobox.Control>
					<Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
					<Combobox.Portal>
						<Combobox.Positioner>
							<Combobox.Content>
								<Combobox.ItemGroup>
									<Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
									{items.map((item) => (
										<Combobox.Item key={item} item={item}>
											<Combobox.ItemText>{item}</Combobox.ItemText>
											<Combobox.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									))}
								</Combobox.ItemGroup>
							</Combobox.Content>
						</Combobox.Positioner>
					</Combobox.Portal>
				</Combobox.Root>
			</Flex>
		)
	},
}
