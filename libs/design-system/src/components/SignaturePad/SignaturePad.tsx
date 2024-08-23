'use client'

import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { SignaturePad } from '@ark-ui/react/signature-pad'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, SignaturePad.RootProps>,
		VariantsProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(
	SignaturePad.Root,
	'root',
)

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, SignaturePad.LabelProps>
>(SignaturePad.Label, 'label')

export const Control = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, SignaturePad.ControlProps>
>(SignaturePad.Control, 'control')

export const Segment = withContext<
	SVGSVGElement,
	Assign<JsxStyleProps, SignaturePad.SegmentProps>
>(SignaturePad.Segment, 'segment')

export const ClearTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, SignaturePad.ClearTriggerProps>
>(SignaturePad.ClearTrigger, 'clearTrigger')

export const Guide = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, SignaturePad.GuideProps>
>(SignaturePad.Guide, 'guide')

export {
	SignaturePadContext as Context,
	type SignaturePadContextProps as ContextProps,
} from '@ark-ui/react/signature-pad'
