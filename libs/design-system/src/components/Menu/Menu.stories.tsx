import { HStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { Button, Icon } from '../'

import { Kbd } from '../Kbd/Kbd'
import * as Menu from './Menu'

const meta: Meta<typeof Menu.Root> = {
	component: Menu.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)
		const [value, setValue] = useState('React')
		return (
			<Menu.Root>
				<Menu.Trigger asChild>
					<Button>Open Menu</Button>
				</Menu.Trigger>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.RadioItemGroup
							value={value}
							onValueChange={(e) => setValue(e.value)}
						>
							<Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
							{/* <Menu.Separator /> */}
							{['React', 'Solid', 'Vue'].map((framework) => (
								<Menu.RadioItem key={framework} value={framework}>
									<Menu.ItemText>{framework}</Menu.ItemText>
									<Menu.ItemIndicator>
										<Icon icon='material-symbols:radio-button-checked' />
									</Menu.ItemIndicator>
								</Menu.RadioItem>
							))}
						</Menu.RadioItemGroup>
						<Menu.ItemGroup>
							<Menu.ItemGroupLabel>Light Dark</Menu.ItemGroupLabel>
							{/* <Menu.Separator /> */}
							<Menu.CheckboxItem
								checked={checked}
								onCheckedChange={setChecked}
								value='checked'
							>
								<Menu.ItemText>Check me</Menu.ItemText>
								<Menu.ItemIndicator>
									<Icon icon='material-symbols:check-box-rounded' />
								</Menu.ItemIndicator>
							</Menu.CheckboxItem>
						</Menu.ItemGroup>
						<Menu.ItemGroup>
							{/* <Menu.Separator /> */}
							<Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
							{/* <Menu.Separator /> */}
							<Menu.Item value='profile'>
								<HStack gap='6' justify='space-between' flex='1'>
									<HStack gap='2'>
										<Icon icon='material-symbols:person-2-outline' />
										Profile
									</HStack>
									<Kbd>⇧⌘P</Kbd>
								</HStack>
							</Menu.Item>
							<Menu.Item value='billing' disabled>
								<HStack gap='2'>
									<Icon icon='material-symbols:credit-card-outline' /> Billing
								</HStack>
							</Menu.Item>
							<Menu.Item value='settings'>
								<HStack gap='6' justify='space-between' flex='1'>
									<HStack gap='2'>
										<Icon icon='material-symbols:settings-outline' /> Settings
									</HStack>
									<Kbd>⌘,</Kbd>
								</HStack>
							</Menu.Item>
							<Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
								<Menu.TriggerItem justifyContent='space-between'>
									<HStack gap='2'>
										<Icon icon='material-symbols:person-add-outline' />
										Invite member
									</HStack>

									<Icon icon='material-symbols:chevron-right-rounded' />
								</Menu.TriggerItem>
								<Menu.Positioner>
									<Menu.Content>
										<Menu.Item value='email'>
											<HStack gap='2'>
												<Icon icon='material-symbols:mail-outline' /> Email
											</HStack>
										</Menu.Item>
										<Menu.Item value='message'>
											<HStack gap='2'>
												<Icon icon='material-symbols:chat-bubble-outline' />{' '}
												Message
											</HStack>
										</Menu.Item>
										{/* <Menu.Separator /> */}
										<Menu.Item value='other'>
											<HStack gap='2'>
												<Icon icon='material-symbols:add-circle-outline' /> More
												Options...
											</HStack>
										</Menu.Item>
									</Menu.Content>
								</Menu.Positioner>
							</Menu.Root>
							<Menu.Separator />
							<Menu.Item value='logout'>
								<HStack gap='2'>
									<Icon icon='material-symbols:power-settings-new-outline' />
									Logout
								</HStack>
							</Menu.Item>
						</Menu.ItemGroup>
					</Menu.Content>
				</Menu.Positioner>
			</Menu.Root>
		)
	},
}
