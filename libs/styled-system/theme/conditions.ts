import type { Preset } from '@pandacss/types'

export const conditions: Preset['conditions'] = {
	extend: {
		// from park UI
		// collapsed:
		// 	'&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
		// current: '&:is([data-current])',
		// hidden: '&:is([hidden])',
		// hover: [
		// 	'@media (hover: hover) and (pointer: fine)',
		// 	'&:is(:hover, [data-hover])',
		// ],
		// indeterminate:
		// 	'&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
		// underValue: '&:is([data-state="under-value"])',
		children: '&>*',

		svg: '& svg',
		hasSvg: '&:has(svg)',

		// dragged: '&[data-dragged]',
		today: '&:is([data-today])',
		dragging: '&[data-dragging]',
		visible: '&[data-state="visible"]',
		hidden: '&[data-state="hidden"]',
		off: '&:is([data-state="off"])',
		on: '&:is([data-state="on"])',

		roleGroupFocus: '[role="group"]:is(:focus, [data-focus]) &',
		roleGroupHover: '[role="group"]:is(:hover, [data-hover]) &',
		roleGroupActive: '[role="group"]:is(:active, [data-active]) &',
		roleGroupFocusWithin: '[role="group"]:focus-within &',
		roleGroupFocusVisible:
			'[role="group"]:is(:focus-visible, [data-focus-visible]) &',
		roleGroupDisabled:
			'[role="group"]:is(:disabled, [disabled], [data-disabled]) &',
		roleGroupChecked:
			'[role="group"]:is(:checked, [data-checked], [aria-checked=true], [data-state="checked"]) &',
		roleGroupExpanded:
			'[role="group"]:is([aria-expanded=true], [data-expanded], [data-state="expanded"]) &',
		roleGroupInvalid: '[role="group"]:is(:invalid, [data-invalid]) &',
	},
}
