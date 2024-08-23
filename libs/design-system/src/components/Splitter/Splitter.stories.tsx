import type { Meta, StoryObj } from '@storybook/react'

import { Flex, styled } from '@mando/styled-system/jsx'
import { Card } from '../'
import * as Splitter from './Splitter'

const meta: Meta<typeof Splitter.Root> = {
	component: Splitter.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Flex w='600px'>
			<Splitter.Root
				defaultSize={[
					{ id: 'a', size: 50 },
					{ id: 'b', size: 50 },
				]}
			>
				<Splitter.Panel id='a'>
					<Card.Root>
						<Card.Body>
							<styled.h1 color='text.primary' fontWeight={'semibold'}>
								Lorem ipsum dolor sit amet
							</styled.h1>
							<styled.p color='text.tertiary' lineClamp={2}>
								Duis a libero id lorem bibendum tincidunt vel et mi. Mauris
								dapibus volutpat cursus. Phasellus scelerisque turpis at magna
								mattis lobortis. Nulla id lectus vitae lorem consectetur
								pellentesque.
							</styled.p>
						</Card.Body>
					</Card.Root>
				</Splitter.Panel>
				<Splitter.ResizeTrigger id='a:b' />
				<Splitter.Panel id='b'>
					{' '}
					<Card.Root>
						<Card.Body>
							<styled.h1 color='text.primary' fontWeight={'semibold'}>
								Lorem ipsum dolor sit amet
							</styled.h1>
							<styled.p color='text.tertiary' lineClamp={2}>
								Duis a libero id lorem bibendum tincidunt vel et mi. Mauris
								dapibus volutpat cursus. Phasellus scelerisque turpis at magna
								mattis lobortis. Nulla id lectus vitae lorem consectetur
								pellentesque.
							</styled.p>
						</Card.Body>
					</Card.Root>
				</Splitter.Panel>
			</Splitter.Root>
		</Flex>
	),
}
