import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '@mando/styled-system/jsx'
import { Icon } from '../'
import * as TreeView from './TreeView'

const meta: Meta<typeof TreeView.Root> = {
	component: TreeView.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Flex w='400px' bgColor={'bg.primary.alt'}>
			<TreeView.Root>
				<TreeView.Label>Tree</TreeView.Label>
				<TreeView.Tree>
					<TreeView.Branch value='1.0'>
						<TreeView.BranchControl>
							<TreeView.BranchIndicator>
								<Icon icon='material-symbols:chevron-right-rounded' />
							</TreeView.BranchIndicator>
							<TreeView.BranchText>Item 1</TreeView.BranchText>
						</TreeView.BranchControl>
						<TreeView.BranchContent>
							<TreeView.Item value='1.1'>
								<TreeView.ItemText>Item 1.1</TreeView.ItemText>
							</TreeView.Item>
							<TreeView.Branch value='1.2'>
								<TreeView.BranchControl>
									<TreeView.BranchIndicator>
										<Icon icon='material-symbols:chevron-right-rounded' />
									</TreeView.BranchIndicator>
									<TreeView.BranchText>Item 1.2</TreeView.BranchText>
								</TreeView.BranchControl>
								<TreeView.BranchContent>
									<TreeView.Item value='1.2.1'>
										<TreeView.ItemText>Item 1.1.1</TreeView.ItemText>
									</TreeView.Item>
									<TreeView.Item value='1.2.2'>
										<TreeView.ItemText>Item 1.2.2</TreeView.ItemText>
									</TreeView.Item>
								</TreeView.BranchContent>
							</TreeView.Branch>
						</TreeView.BranchContent>
					</TreeView.Branch>
					<TreeView.Branch value='2.0'>
						<TreeView.BranchControl>
							<TreeView.BranchIndicator>
								<Icon icon='material-symbols:chevron-right-rounded' />
							</TreeView.BranchIndicator>
							<TreeView.BranchText>Item 1</TreeView.BranchText>
						</TreeView.BranchControl>
						<TreeView.BranchContent>
							<TreeView.Item value='2.1'>
								<TreeView.ItemText>Item 2.1</TreeView.ItemText>
							</TreeView.Item>
							<TreeView.Item value='2.2'>
								<TreeView.ItemText>Item 2.2</TreeView.ItemText>
							</TreeView.Item>
						</TreeView.BranchContent>
					</TreeView.Branch>
					<TreeView.Item value='3.0'>
						<TreeView.ItemText>Item 3</TreeView.ItemText>
					</TreeView.Item>
				</TreeView.Tree>
			</TreeView.Root>
		</Flex>
	),
}
