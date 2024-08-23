'use client'

import { CarouselControls } from './CarouselControls'
import { CarouselDotsControl } from './CarouselDotsControl'
import { CarouselItem } from './CarouselItem'
import { CarouselNextControl } from './CarouselNextControl'
import { CarouselPrevControl } from './CarouselPrevControl'
import { CarouselRoot } from './CarouselRoot'
import { CarouselViewport } from './CarouselViewport'

export const Carousel = {
	Root: CarouselRoot,
	Viewport: CarouselViewport,
	Item: CarouselItem,
	Controls: CarouselControls,
	PrevControl: CarouselPrevControl,
	NextControl: CarouselNextControl,
	DotsControl: CarouselDotsControl,
}

export {
	CarouselRoot,
	CarouselViewport,
	CarouselItem,
	CarouselControls,
	CarouselPrevControl,
	CarouselNextControl,
	CarouselDotsControl,
}
