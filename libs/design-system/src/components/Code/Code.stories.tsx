import { Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

const meta: Meta<typeof Code> = {
	component: Code,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Flex gap='2'>
				{/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
				<Code children='console.log(welcome)' />
				{/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
				<Code children="var chakra = 'awesome!'" />
				{/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
				<Code children='npm install chakra' />
			</Flex>
		)
	},
}
