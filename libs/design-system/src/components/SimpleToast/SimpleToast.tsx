'use client'
import { css } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'
import type { FC } from 'react'
import { Toaster, type ToasterProps } from 'sonner'
import { Icon } from '../Icon'

export { toast } from 'sonner'

const buttonStyle = {
	position: 'relative',
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 'base',
	flexShrink: 0,
	ms: 'var(--toast-button-margin-start)',
	me: 'var(--toast-button-margin-end)',

	appearance: 'none',
	userSelect: 'none',
	whiteSpace: 'nowrap',
	verticalAlign: 'middle',
	overflow: 'hidden',

	cursor: 'pointer',
	transition: 'all',
	translate: 'auto',
	minW: 'max-content',

	colorPalette: 'default',
	fontWeight: 'medium',

	color: 'colorPalette.foreground',

	px: 3,
	gap: 2,
	rounded: 'sm',
	height: 8,
	fontSize: 'xs',
	bgColor: 'colorPalette',

	_hover: {
		opacity: 'hover',
	},
} satisfies SystemStyleObject

export const SimpleToast: FC<ToasterProps> = (props) => {
	return (
		<Toaster
			// richColors
			closeButton
			toastOptions={{
				unstyled: true,
				classNames: {
					toast: css({
						height: 'var(--initial-height)',
						px: 3,
						py: 3,
						rounded: 'lg',
						bgColor: 'content1',
						color: 'content1.foreground',
						boxShadow: 'md',
						width: 'var(--width)',
						display: 'flex',
						alignItems: 'center',
						gap: 2,
					}),
					title: css({
						fontSize: 'sm',
						fontWeight: 'semibold',
					}),
					description: css({
						fontSize: 'sm',
					}),
					// loader: css({}),
					// closeButton: css({}),
					cancelButton: css({
						...buttonStyle,
						colorPalette: 'default',
					}),
					actionButton: css({
						...buttonStyle,
						colorPalette: 'primary',
					}),
					success: css({
						bgColor: 'success.100',
						color: 'success.700',
					}),
					error: css({
						bgColor: 'error.100',
						color: 'error.700',
					}),
					info: css({
						bgColor: 'info.100',
						color: 'info.700',
					}),
					warning: css({
						bgColor: 'warning.100',
						color: 'warning.700',
					}),
					// loading: css({}),
					// default: css({}),
					content: css({
						flexGrow: 1,
					}),
					icon: css({
						w: 5,
						h: 5,
						fontSize: 20,
					}),
				},
			}}
			icons={{
				success: <Icon icon='material-symbols:check-circle-rounded' />,
				info: <Icon icon='material-symbols:info' />,
				warning: <Icon icon='material-symbols:warning-rounded' />,
				error: <Icon icon='material-symbols:error-med' />,
				loading: <Icon icon='svg-spinners:ring-resize' />,
			}}
			{...props}
		/>
	)
}
