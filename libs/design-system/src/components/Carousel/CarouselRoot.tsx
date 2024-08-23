import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'
import type {
	EmblaCarouselType,
	EmblaOptionsType,
	EmblaPluginType,
} from 'embla-carousel'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import {
	type ComponentProps,
	type FC,
	useCallback,
	useEffect,
	useState,
} from 'react'

import { CarouselRootProvider } from './CarouselRoot.context'

useEmblaCarousel.globalOptions = { loop: true }

const style = cva({
	base: {
		position: 'relative',
		overflow: 'hidden',
		'--spacing': 0,

		'&.is-draggable': {
			cursor: 'grab',
		},

		'&.is-dragging': {
			cursor: 'grabbing',
		},
	},
})

export const Wrapper = styled(ark.div, style)

export type CarouselRootProps = ComponentProps<typeof Wrapper> & {
	options?: Omit<EmblaOptionsType, 'container' | 'slides'>
	plugins?: EmblaPluginType[]
}

export const CarouselRoot: FC<CarouselRootProps> = ({
	children,
	options,
	plugins = [],
	...props
}) => {
	const [carouselRef, carouselApi] = useEmblaCarousel(options, [
		ClassNames(),
		...plugins,
	])
	const [canScrollPrev, setCanScrollPrev] = useState(true)
	const [canScrollNext, setCanScrollNext] = useState(true)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

	const scrollPrev = useCallback(() => carouselApi?.scrollPrev(), [carouselApi])
	const scrollNext = useCallback(() => carouselApi?.scrollNext(), [carouselApi])
	const scrollTo = useCallback(
		(index: number) => carouselApi?.scrollTo(index),
		[carouselApi],
	)

	const onInit = useCallback((carouselApi: EmblaCarouselType) => {
		setScrollSnaps(carouselApi.scrollSnapList())
	}, [])

	const onSelect = useCallback((carouselApi: EmblaCarouselType) => {
		setSelectedIndex(carouselApi.selectedScrollSnap())
		setCanScrollPrev(carouselApi.canScrollPrev())
		setCanScrollNext(carouselApi.canScrollNext())
	}, [])

	useEffect(() => {
		if (!carouselApi) return

		onInit(carouselApi)
		onSelect(carouselApi)
		carouselApi.on('reInit', onInit)
		carouselApi.on('reInit', onSelect)
		carouselApi.on('select', onSelect)
	}, [carouselApi, onInit, onSelect])

	return (
		<CarouselRootProvider
			value={{
				carouselApi,
				canScrollPrev,
				canScrollNext,
				selectedIndex,
				scrollSnaps,
				scrollPrev,
				scrollNext,
				scrollTo,
			}}
		>
			<Wrapper ref={carouselRef} {...props}>
				{children}
			</Wrapper>
		</CarouselRootProvider>
	)
}
