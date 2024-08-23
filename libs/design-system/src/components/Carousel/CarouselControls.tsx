import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'

const style = cva({
	base: {
		position: 'absolute',
		inset: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 4,
		p: 4,
		pointerEvents: 'none',
		transition: 'all',
	},
})

export const CarouselControls = styled(ark.div, style)
