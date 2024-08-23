import { styled } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as Accordion from './Accordion'

const titles = [
	'Was sind die Vorteile von Reiseexpert*innen und Was sind die Vorteile von Reiseexpert*innen?',
	'Wie funktioniert die Beratung durch die Reiseexpert*innen?',
	'Wie teuer ist das Beratungsgespräch?',
	'Was ist der Unterschied zum klassischen Reisebüro?',
	'Im Reisebüro oder online buchen – was ist besser?',
	'Österreich und der Schweiz: Ist der Service hier verfügbar?',
	'Bekomme ich einen Sicherungsschein für meine Reise?',
	'Wie werde ich vor Ort während meiner Reise betreut?',
	'Vermittelt Tourlane Reiserücktrittsversicherungen?',
]

const text = `Seit Januar 2019 berechnen und kompensieren wir alle unsere
Scope 1, 2 und 3 Kohlenstoffemissionen. Dazu gehören alle
Unternehmens- und Kundenreisen sowie Flugemissionen.`

const meta: Meta<typeof Accordion.Root> = {
	component: Accordion.Root,
	decorators: [
		(Story) => (
			<styled.div maxW='600px' w={'100vw'} mx='auto'>
				<Story />
			</styled.div>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Accordion.Root>
				{titles.map((title, index) => (
					<Accordion.Item
						key={title}
						value={`item-${index + 1}`}
						disabled={index === 3}
					>
						<Accordion.ItemTrigger>
							{title}
							<Accordion.ItemIndicator>
								<Icon icon='material-symbols:keyboard-arrow-down-rounded' />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
						<Accordion.ItemContent>{text}</Accordion.ItemContent>
					</Accordion.Item>
				))}
			</Accordion.Root>
		)
	},
}
