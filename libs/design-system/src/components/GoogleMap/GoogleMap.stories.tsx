import { AspectRatio } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'
// biome-ignore lint/suspicious/noShadowRestrictedNames: it's fine
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import { useId } from 'react'

import { Icon } from '../'

import { MarkerWithPopover } from './custom-components'

const meta: Meta<typeof Icon> = {
	component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const mapId = useId()
		return (
			<APIProvider apiKey={''}>
				<AspectRatio ratio={16 / 9} width='50vw' bgColor={'bg.secondary'}>
					<div>
						<Map
							mapId={mapId}
							defaultCenter={{
								lat: 52.518927,
								lng: 13.404935,
							}}
							defaultZoom={3}
							gestureHandling={'greedy'}
							disableDefaultUI={true}
						/>
						<AdvancedMarker
							position={{
								lat: 52.518927,
								lng: 13.404935,
							}}
						>
							<Icon
								icon='material-symbols:location-on-rounded'
								fontSize={40}
								color='foreground'
							/>
						</AdvancedMarker>
					</div>
				</AspectRatio>
			</APIProvider>
		)
	},
}

export const WithPopover: Story = {
	render: () => {
		const mapId = useId()
		return (
			<APIProvider apiKey={API_KEY}>
				<AspectRatio ratio={16 / 9} width='50vw' bgColor={'bg.secondary'}>
					<div>
						<Map
							mapId={mapId}
							defaultCenter={{
								lat: 52.518927,
								lng: 13.404935,
							}}
							defaultZoom={3}
							gestureHandling={'greedy'}
							disableDefaultUI={true}
						/>
						<MarkerWithPopover
							position={{
								lat: 52.518927,
								lng: 13.404935,
							}}
						/>
					</div>
				</AspectRatio>
			</APIProvider>
		)
	},
}
