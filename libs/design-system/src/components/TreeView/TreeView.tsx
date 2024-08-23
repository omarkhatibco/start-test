'use client'

import { type Assign, TreeView } from '@ark-ui/react'
import type { JsxStyleProps } from '@mando/styled-system/types'
import { createStyleContext } from '@mando/styled-system/utils'
import { type VariantsProps, style } from './style'

const { withProvider, withContext } = createStyleContext(style)

export interface RootProps
	extends Assign<JsxStyleProps, TreeView.RootProps>,
		VariantsProps {}

export const Root = withProvider<HTMLDivElement, RootProps>(
	TreeView.Root,
	'root',
)

export const Tree = withContext<
	HTMLUListElement,
	Assign<JsxStyleProps, TreeView.TreeProps>
>(TreeView.Tree, 'tree')

export const Label = withContext<
	HTMLLabelElement,
	Assign<JsxStyleProps, TreeView.LabelProps>
>(TreeView.Label, 'label')

export const Item = withContext<
	HTMLLIElement,
	Assign<JsxStyleProps, TreeView.ItemProps>
>(TreeView.Item, 'item')

export const ItemText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, TreeView.ItemTextProps>
>(TreeView.ItemText, 'itemText')

export const ItemIndicator = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, TreeView.ItemIndicatorProps>
>(TreeView.ItemIndicator, 'itemIndicator')

export const Branch = withContext<
	HTMLLIElement,
	Assign<JsxStyleProps, TreeView.BranchProps>
>(TreeView.Branch, 'branch')

export const BranchContent = withContext<
	HTMLUListElement,
	Assign<JsxStyleProps, TreeView.BranchContentProps>
>(TreeView.BranchContent, 'branchContent')

export const BranchControl = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, TreeView.BranchControlProps>
>(TreeView.BranchControl, 'branchControl')

export const BranchIndicator = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, TreeView.BranchIndicatorProps>
>(TreeView.BranchIndicator, 'branchIndicator')

export const BranchText = withContext<
	HTMLSpanElement,
	Assign<JsxStyleProps, TreeView.BranchTextProps>
>(TreeView.BranchText, 'branchText')

export const BranchTrigger = withContext<
	HTMLDivElement,
	Assign<JsxStyleProps, TreeView.BranchTriggerProps>
>(TreeView.BranchTrigger, 'branchTrigger')

export {
	TreeViewContext as Context,
	TreeViewItemContext as ItemContext,
	type TreeViewContextProps as ContextProps,
	type TreeViewItemContextProps as ItemContextProps,
} from '@ark-ui/react/tree-view'
