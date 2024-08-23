import type { ComponentProps, FC } from 'react'

import { Icon } from '../'

import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'
import { useCarouselRootContext } from './CarouselRoot.context'

const style = cva({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		rounded: 'full',
		pointerEvents: 'auto',
		// color: 'fg.secondary',
		transition: 'all',
		bgColor: 'background/70',
		color: 'foreground',
		cursor: 'pointer',
		backdropBlur: 'sm',
		backdropFilter: 'auto',

		_hover: {
			opacity: 'hover',
		},
		w: 11,
		h: 11,
		_svg: {
			fontSize: 24,
		},
	},
})

export const Wrapper = styled(ark.button, style)

export type CarouselNextControlProps = ComponentProps<typeof Wrapper>

export const CarouselNextControl: FC<CarouselNextControlProps> = (props) => {
	const { canScrollNext, scrollNext } = useCarouselRootContext()

	return (
		<Wrapper
			type='button'
			order={1}
			{...props}
			onClick={scrollNext}
			disabled={!canScrollNext}
		>
			<Icon icon={'material-symbols:chevron-right'} />
		</Wrapper>
	)
}
