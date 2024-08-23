import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Carousel } from './Carousel'

import { Image } from '../'

const meta: Meta<typeof Carousel.Root> = {
	component: Carousel.Root,
	decorators: [
		(Story) => (
			<styled.div w={'60vw'} mx='auto'>
				<Story />
			</styled.div>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Carousel.Root>
				<Carousel.Viewport>
					{Array.from({ length: 10 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Carousel.Item key={i}>
							<Image
								alt='My random image'
								src={`https://picsum.photos/1200/800?random=${i}`}
								aspectRatio={16 / 9}
								w={'full'}
							/>
						</Carousel.Item>
					))}
				</Carousel.Viewport>
				<Carousel.Controls>
					<Carousel.PrevControl />
					<Carousel.NextControl />
				</Carousel.Controls>
				<Carousel.DotsControl />
			</Carousel.Root>
		)
	},
}

export const WithMulti: Story = {
	render: () => {
		return (
			<Carousel.Root
				css={{
					'--spacing': '1rem',
				}}
			>
				<Carousel.Viewport>
					{Array.from({ length: 10 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Carousel.Item key={i} flexBasis={'2/3'}>
							<styled.div rounded='xl' overflow={'hidden'} pos={'relative'}>
								<Image
									alt='My random image'
									src={`https://picsum.photos/1200/800?random=${i}`}
									aspectRatio={16 / 9}
									w={'full'}
								/>
								<styled.div
									pos={'absolute'}
									insetX={0}
									bottom={0}
									zIndex={1}
									display={'flex'}
									alignItems={'flex-end'}
									px={8}
									pb={8}
									pt={8}
									color='white'
									bgImage='linear-gradient(to top,rgba(0, 0, 0, 0.85),transparent)'
								>
									<styled.h1>Hello World!</styled.h1>
								</styled.div>
							</styled.div>
						</Carousel.Item>
					))}
				</Carousel.Viewport>
				<Carousel.Controls>
					<Carousel.PrevControl />
					<Carousel.NextControl />
				</Carousel.Controls>
				<Carousel.DotsControl />
			</Carousel.Root>
		)
	},
}

export const WithDragFree: Story = {
	render: () => {
		return (
			<Carousel.Root
				options={{
					dragFree: true,
					align: 'start',
				}}
				css={{
					'--spacing': '1rem',
				}}
			>
				<Carousel.Viewport>
					{Array.from({ length: 10 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Carousel.Item key={i} flexBasis={'40%'}>
							<styled.div rounded='xl' overflow={'hidden'}>
								<Image
									alt='My random image'
									src={`https://picsum.photos/1200/800?random=${i}`}
									aspectRatio={1}
									w={'full'}
								/>
							</styled.div>
						</Carousel.Item>
					))}
				</Carousel.Viewport>
			</Carousel.Root>
		)
	},
}

export const WithControlsOnHover: Story = {
	render: () => {
		return (
			<Carousel.Root className='group'>
				<Carousel.Viewport>
					{Array.from({ length: 10 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Carousel.Item key={i}>
							<Image
								alt='My random image'
								src={`https://picsum.photos/1200/800?random=${i}`}
								aspectRatio={16 / 9}
								w={'full'}
							/>
						</Carousel.Item>
					))}
				</Carousel.Viewport>
				<Carousel.Controls opacity={{ md: 0, _groupHover: 1 }}>
					<Carousel.PrevControl />
					<Carousel.NextControl />
				</Carousel.Controls>
				<Carousel.DotsControl />
			</Carousel.Root>
		)
	},
}
