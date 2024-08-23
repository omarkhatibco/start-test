import { styled } from '@mando/styled-system/jsx'

import { style } from './style'

import { Highlight as ArkHighlight } from '@ark-ui/react/highlight'

export const Highlight = styled(ArkHighlight, style)

export {
	type HighlightProps,
	type HighlightChunk,
	type UseHighlightProps,
	useHighlight,
} from '@ark-ui/react/highlight'
