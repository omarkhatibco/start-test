import type { FC } from 'react'

import { Icon } from '../'

import { useCarouselRootContext } from './CarouselRoot.context'

import { type CarouselNextControlProps, Wrapper } from './CarouselNextControl'

export const CarouselPrevControl: FC<CarouselNextControlProps> = (props) => {
	const { canScrollPrev, scrollPrev } = useCarouselRootContext()

	return (
		<Wrapper
			order={0}
			{...props}
			onClick={scrollPrev}
			disabled={!canScrollPrev}
		>
			<Icon icon={'material-symbols:chevron-left'} />
		</Wrapper>
	)
}
