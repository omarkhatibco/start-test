import { Icon as Iconify, type IconProps as IconifyProps } from '@iconify/react'
import { cx } from '@mando/styled-system/css'
import { styled } from '@mando/styled-system/jsx'
import { forwardRef } from 'react'

export type IconProps = IconifyProps

const InternalIcon = forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => {
		return (
			<Iconify
				ref={ref}
				className={cx('__icon', className)}
				aria-hidden={true}
				focusable={false}
				pointerEvents={'none'}
				{...props}
			/>
		)
	},
)

export const Icon = styled(InternalIcon)
