'use client'

import { type Assign, Pagination } from '@ark-ui/react'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, Pagination.RootProps>,
		VariantsProps {}

export const Root = withProvider<HTMLElement, RootProps>(
	Pagination.Root,
	'root',
)

export const Item = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, Pagination.ItemProps>
>(Pagination.Item, 'item')

export const Ellipsis = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, Pagination.EllipsisProps>
>(Pagination.Ellipsis, 'ellipsis')

export const PrevTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, Pagination.PrevTriggerProps>
>(Pagination.PrevTrigger, 'prevTrigger')

export const NextTrigger = withContext<
	HTMLButtonElement,
	Assign<JsxStyleProps, Pagination.NextTriggerProps>
>(Pagination.NextTrigger, 'nextTrigger')

export {
	PaginationContext as Context,
	type PaginationContextProps as ContextProps,
} from '@ark-ui/react/pagination'
