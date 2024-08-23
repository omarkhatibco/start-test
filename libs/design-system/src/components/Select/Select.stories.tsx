import { Flex, VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import * as Select from './Select'

const meta: Meta<typeof Select.Root> = {
	component: Select.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const items = ['React', 'Solid', 'Vue']

export const Default: Story = {
	render: () => {
		return (
			<VStack>
				<Flex w='300px'>
					<Select.Root items={items}>
						<Select.Label>Framework</Select.Label>
						<Select.Control>
							<Select.Trigger>
								<Select.ValueText placeholder='Select a Framework' />
								<Select.ClearTrigger>
									<Icon icon='material-symbols:cancel' />
								</Select.ClearTrigger>
								<Select.Indicator>
									<Icon icon='material-symbols:keyboard-arrow-down' />
								</Select.Indicator>
							</Select.Trigger>
						</Select.Control>
						<Select.Portal>
							<Select.Positioner>
								<Select.Content>
									<Select.ItemGroup>
										<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
										{items.map((item) => (
											<Select.Item key={item} item={item}>
												<Select.ItemText>{item}</Select.ItemText>
												<Select.ItemIndicator>
													<Icon icon='material-symbols:check-rounded' />
												</Select.ItemIndicator>
											</Select.Item>
										))}
									</Select.ItemGroup>
								</Select.Content>
							</Select.Positioner>
						</Select.Portal>
						<Select.HiddenSelect />
					</Select.Root>
				</Flex>
			</VStack>
		)
	},
}

export const withSize: Story = {
	render: () => {
		return (
			<VStack w='300px'>
				<Flex w='300px'>
					<Select.Root items={items} size='sm'>
						<Select.Label>Framework</Select.Label>
						<Select.Control>
							<Select.Trigger>
								<Select.ValueText placeholder='Select a Framework' />
								<Select.ClearTrigger>
									<Icon icon='material-symbols:cancel' />
								</Select.ClearTrigger>
								<Select.Indicator>
									<Icon icon='material-symbols:keyboard-arrow-down' />
								</Select.Indicator>
							</Select.Trigger>
						</Select.Control>
						<Select.Portal>
							<Select.Positioner>
								<Select.Content>
									<Select.ItemGroup>
										<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
										{items.map((item) => (
											<Select.Item key={item} item={item}>
												<Select.ItemText>{item}</Select.ItemText>
												<Select.ItemIndicator>
													<Icon icon='material-symbols:check-rounded' />
												</Select.ItemIndicator>
											</Select.Item>
										))}
									</Select.ItemGroup>
								</Select.Content>
							</Select.Positioner>
						</Select.Portal>
						<Select.HiddenSelect />
					</Select.Root>
				</Flex>
				<Flex w='300px' size='md'>
					<Select.Root items={items}>
						<Select.Label>Framework</Select.Label>
						<Select.Control>
							<Select.Trigger>
								<Select.ValueText placeholder='Select a Framework' />
								<Select.ClearTrigger>
									<Icon icon='material-symbols:cancel' />
								</Select.ClearTrigger>
								<Select.Indicator>
									<Icon icon='material-symbols:keyboard-arrow-down' />
								</Select.Indicator>
							</Select.Trigger>
						</Select.Control>
						<Select.Portal>
							<Select.Positioner>
								<Select.Content>
									<Select.ItemGroup>
										<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
										{items.map((item) => (
											<Select.Item key={item} item={item}>
												<Select.ItemText>{item}</Select.ItemText>
												<Select.ItemIndicator>
													<Icon icon='material-symbols:check-rounded' />
												</Select.ItemIndicator>
											</Select.Item>
										))}
									</Select.ItemGroup>
								</Select.Content>
							</Select.Positioner>
						</Select.Portal>
						<Select.HiddenSelect />
					</Select.Root>
				</Flex>
				<Flex w='300px'>
					<Select.Root items={items} size='lg'>
						<Select.Label>Framework</Select.Label>
						<Select.Control>
							<Select.Trigger>
								<Select.ValueText placeholder='Select a Framework' />
								<Select.ClearTrigger>
									<Icon icon='material-symbols:cancel' />
								</Select.ClearTrigger>
								<Select.Indicator>
									<Icon icon='material-symbols:keyboard-arrow-down' />
								</Select.Indicator>
							</Select.Trigger>
						</Select.Control>
						<Select.Portal>
							<Select.Positioner>
								<Select.Content>
									<Select.ItemGroup>
										<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
										{items.map((item) => (
											<Select.Item key={item} item={item}>
												<Select.ItemText>{item}</Select.ItemText>
												<Select.ItemIndicator>
													<Icon icon='material-symbols:check-rounded' />
												</Select.ItemIndicator>
											</Select.Item>
										))}
									</Select.ItemGroup>
								</Select.Content>
							</Select.Positioner>
						</Select.Portal>
						<Select.HiddenSelect />
					</Select.Root>
				</Flex>
			</VStack>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<Flex w='300px'>
				<Select.Root items={items} invalid>
					<Select.Label>Framework</Select.Label>
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder='Select a Framework' />
							<Select.ClearTrigger>
								<Icon icon='material-symbols:cancel' />
							</Select.ClearTrigger>
							<Select.Indicator>
								<Icon icon='material-symbols:keyboard-arrow-down' />
							</Select.Indicator>
						</Select.Trigger>
					</Select.Control>
					<Select.Portal>
						<Select.Positioner>
							<Select.Content>
								<Select.ItemGroup>
									<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
									{items.map((item) => (
										<Select.Item key={item} item={item}>
											<Select.ItemText>{item}</Select.ItemText>
											<Select.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Select.ItemIndicator>
										</Select.Item>
									))}
								</Select.ItemGroup>
							</Select.Content>
						</Select.Positioner>
					</Select.Portal>
					<Select.HiddenSelect />
				</Select.Root>
			</Flex>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<Flex w='300px'>
				<Select.Root items={items} disabled>
					<Select.Label>Framework</Select.Label>
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder='Select a Framework' />
							<Select.ClearTrigger>
								<Icon icon='material-symbols:cancel' />
							</Select.ClearTrigger>
							<Select.Indicator>
								<Icon icon='material-symbols:keyboard-arrow-down' />
							</Select.Indicator>
						</Select.Trigger>
					</Select.Control>
					<Select.Portal>
						<Select.Positioner>
							<Select.Content>
								<Select.ItemGroup>
									<Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
									{items.map((item) => (
										<Select.Item key={item} item={item}>
											<Select.ItemText>{item}</Select.ItemText>
											<Select.ItemIndicator>
												<Icon icon='material-symbols:check-rounded' />
											</Select.ItemIndicator>
										</Select.Item>
									))}
								</Select.ItemGroup>
							</Select.Content>
						</Select.Positioner>
					</Select.Portal>
					<Select.HiddenSelect />
				</Select.Root>
			</Flex>
		)
	},
}
