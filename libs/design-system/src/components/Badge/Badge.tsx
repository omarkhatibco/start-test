import {
	Float,
	type FloatProps,
	type HTMLStyledProps,
	styled,
} from '@mando/styled-system/jsx'
import { type PropsWithChildren, forwardRef } from 'react'

export type BadgeProps = FloatProps &
	PropsWithChildren<{
		content?: string
	}>

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ children, content, ...props }, ref) => {
		const hasContent = !!content

		return (
			<styled.span ref={ref} display={'block'} pos='relative'>
				<Float
					data-active={hasContent ? 'true' : undefined}
					className='__base'
					placement={'top-end'}
					bgColor='colorPalette'
					color={'colorPalette.foreground'}
					borderRadius={'full'}
					minW={{ _active: '1rem', base: '3' }}
					h={{ _active: '4', base: '3' }}
					textStyle={'label.sm'}
					lineHeight={'none'}
					px={{ _active: '1', base: '0' }}
					pointerEvents={'none'}
					zIndex={10}
					offset={'1'}
					colorPalette={'error'}
					{...props}
				>
					{content}
				</Float>
				{children}
			</styled.span>
		)
	},
)
