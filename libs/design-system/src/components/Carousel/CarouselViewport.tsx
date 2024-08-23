import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'

const style = cva({
	base: {
		backfaceVisibility: 'hidden',
		touchAction: 'pan-y',
		display: 'flex',
		marginInlineStart: 'calc(var(--spacing) * -1)',
	},
})

export const CarouselViewport = styled(ark.div, style)
