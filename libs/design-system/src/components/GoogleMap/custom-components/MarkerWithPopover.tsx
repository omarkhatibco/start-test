import type { FC } from 'react'

import { CloseButton, Icon, Popover, UnstyledButton } from '../../'

import {
	AdvancedMarker,
	type AdvancedMarkerProps,
} from '@vis.gl/react-google-maps'

export const MarkerWithPopover: FC<AdvancedMarkerProps> = (props) => {
	return (
		<AdvancedMarker {...props}>
			<Popover.Root>
				<Popover.Trigger asChild>
					<UnstyledButton pointerEvents={'auto'}>
						<Icon
							icon='material-symbols:location-on-rounded'
							fontSize={40}
							color='foreground'
						/>
					</UnstyledButton>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Positioner>
						<Popover.Content>
							<Popover.Arrow>
								<Popover.ArrowTip />
							</Popover.Arrow>
							<Popover.Title>Favorite Framework</Popover.Title>
							<Popover.Description>
								Tell us what is your favorite framework and why you love to use
								it.
							</Popover.Description>
							<Popover.CloseTrigger asChild>
								<CloseButton inOverlay size='sm' />
							</Popover.CloseTrigger>
						</Popover.Content>
					</Popover.Positioner>
				</Popover.Portal>
			</Popover.Root>
		</AdvancedMarker>
	)
}
