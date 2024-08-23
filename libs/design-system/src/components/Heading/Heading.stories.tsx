import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof styled.h1> = {
	component: styled.h1,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<>
			<styled.h1 textStyle={'display.2xl'} fontWeight={'bold'}>
				Display 2xl
			</styled.h1>
			<styled.h1 textStyle={'display.xl'}>Display xl</styled.h1>
			<styled.h1 textStyle={'display.lg'}>Display lg</styled.h1>
			<styled.h1 textStyle={'display.md'}>Display md</styled.h1>
			<styled.h1 textStyle={'display.sm'}>Display sm</styled.h1>
			<styled.h1 textStyle={'display.xs'} fontWeight={'semibold'}>
				Display xs
			</styled.h1>
			<styled.p textStyle={'text.lg'}>Text lg</styled.p>
			<styled.p textStyle={'text.md'}>Text md</styled.p>
			<styled.p textStyle={'text.sm'}>Text sm</styled.p>
			<styled.p textStyle={'text.xs'}>Text xs</styled.p>
		</>
	),
}
export const Arabic: Story = {
	render: () => (
		<>
			<styled.h1 textStyle={'display.2xl'} fontWeight={'bold'}>
				نص عربي
			</styled.h1>
			<styled.h1 textStyle={'display.xl'}> نص عربي</styled.h1>
			<styled.h1 textStyle={'display.lg'}> نص عربي</styled.h1>
			<styled.h1 textStyle={'display.md'}> نص عربي</styled.h1>
			<styled.h1 textStyle={'display.sm'}> نص عربي</styled.h1>
			<styled.h1 textStyle={'display.xs'} fontWeight={'semibold'}>
				نص عربي
			</styled.h1>
			<styled.p textStyle={'text.lg'}> نص عربي</styled.p>
			<styled.p textStyle={'text.md'}> نص عربي</styled.p>
			<styled.p textStyle={'text.sm'}> نص عربي</styled.p>
			<styled.p textStyle={'text.xs'}> نص عربي</styled.p>
		</>
	),
}
