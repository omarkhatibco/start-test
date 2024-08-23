'use client'

import type { Assign } from '@ark-ui/react'
import { QrCode } from '@ark-ui/react/qr-code'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, QrCode.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(QrCode.Root, 'root')

export const Frame = withContext<
	SVGSVGElement,
	Assign<JsxStyleProps, QrCode.FrameProps>
>(QrCode.Frame, 'frame')

export const Pattern = withContext<
	SVGPathElement,
	Assign<JsxStyleProps, QrCode.PatternProps>
>(QrCode.Pattern, 'pattern')

export const Overlay = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, QrCode.OverlayProps>
>(QrCode.Overlay, 'overlay')

export {
	QrCodeContext as Context,
	type QrCodeContextProps as ContextProps,
} from '@ark-ui/react/qr-code'
