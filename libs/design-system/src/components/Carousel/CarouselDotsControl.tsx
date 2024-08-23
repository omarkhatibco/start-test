import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'
import type { ComponentProps, FC } from 'react'

import { UnstyledButton } from '../'
import { useCarouselRootContext } from './CarouselRoot.context'

const style = cva({
	base: {
		position: 'absolute',

		insetInlineStart: '50%',
		translate: 'auto',
		translateX: '-50%',
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		mb: 4,
		gap: 4,
		p: 3,
		pointerEvents: 'none',
		rounded: 'full',
		bgColor: 'background/70',

		// bgColor: { base: 'white/70', _dark: 'volcan.950/70' },
		backdropBlur: 'sm',
		backdropFilter: 'auto',

		'& button': {
			width: 2.5,
			height: 2.5,
			rounded: 'full',
			appearance: 'none',
			cursor: 'pointer',
			transition: 'all',
			pointerEvents: 'all',
			bgColor: 'foreground/30',

			_disabled: {
				bgColor: 'foreground',
				pointerEvents: 'none',
			},
		},
	},
})

const DotsWrapper = styled(ark.div, style)

export type CarouselDotsControlProps = ComponentProps<typeof DotsWrapper>

export const CarouselDotsControl: FC<CarouselDotsControlProps> = (props) => {
	const { scrollSnaps, selectedIndex, scrollTo } = useCarouselRootContext()

	return (
		<DotsWrapper {...props}>
			{scrollSnaps.map((_, index) => (
				<UnstyledButton
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					onClick={() => scrollTo(index)}
					disabled={index === selectedIndex}
				>
					<styled.span srOnly>{index + 1}</styled.span>
				</UnstyledButton>
			))}
		</DotsWrapper>
	)
}
