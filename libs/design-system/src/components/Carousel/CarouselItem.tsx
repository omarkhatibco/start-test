import { ark } from '@ark-ui/react'
import { cva } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'

const style = cva({
	base: {
		position: 'relative',
		minW: 0,
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '100%',
		paddingInlineStart: 'var(--spacing)',
	},
})

export const CarouselItem = styled(ark.div, style)
