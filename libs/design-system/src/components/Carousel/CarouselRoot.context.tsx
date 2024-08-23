'use client'

import type { EmblaCarouselType } from 'embla-carousel'
import { createContext, useContext } from 'react'

export type CarouselRootContextValue = {
	carouselApi: EmblaCarouselType | undefined
	canScrollPrev: boolean
	canScrollNext: boolean
	selectedIndex: number
	scrollSnaps: number[]
	scrollPrev: () => void
	scrollNext: () => void
	scrollTo: (index: number) => void
}

const CarouselRootContext = createContext<CarouselRootContextValue>({
	carouselApi: undefined,
	canScrollPrev: false,
	canScrollNext: false,
	selectedIndex: 0,
	scrollSnaps: [],
	scrollPrev: () => {},
	scrollNext: () => {},
	scrollTo: () => {},
})

export const CarouselRootProvider = CarouselRootContext.Provider

export function useCarouselRootContext() {
	const context = useContext(CarouselRootContext)
	if (context === null) {
		throw new Error('CarouselRootContext is undefined')
	}
	return context
}
