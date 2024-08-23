import { ark } from '@ark-ui/react'
import { styled } from '@mando/styled-system/jsx'
import type { ComponentProps } from 'react'

export type UnstyledButtonProps = ComponentProps<typeof UnstyledButton>

export const UnstyledButton = styled(ark.button)
