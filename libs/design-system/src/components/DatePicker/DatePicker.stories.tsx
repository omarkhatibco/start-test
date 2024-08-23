import { Divider, Flex } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import * as DatePicker from './DatePicker'

const meta: Meta<typeof DatePicker.Root> = {
	component: DatePicker.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<DatePicker.Root
				// selectionMode='range'
				fixedWeeks
				isDateUnavailable={(date) =>
					date.year === 2024 && date.month === 6 && date.day === 25
				}
				open
			>
				<DatePicker.Label>Label</DatePicker.Label>
				<DatePicker.Control>
					<DatePicker.Input index={0} />
					{/* <DatePicker.Input index={1} /> */}
					<DatePicker.ClearTrigger>
						<Icon icon='material-symbols:close-small-rounded' />
					</DatePicker.ClearTrigger>
					<DatePicker.Trigger>
						<Icon icon='material-symbols:calendar-today' />
					</DatePicker.Trigger>
				</DatePicker.Control>
				<DatePicker.Portal>
					<DatePicker.Positioner>
						<DatePicker.Content>
							<Flex gap={2}>
								<DatePicker.YearSelect />
								<DatePicker.MonthSelect />
							</Flex>
							<DatePicker.View view='day'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableHead>
													<DatePicker.TableRow>
														{datePicker.weekDays.map((weekDay, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableHeader key={id}>
																{weekDay.short}
															</DatePicker.TableHeader>
														))}
													</DatePicker.TableRow>
												</DatePicker.TableHead>
												<DatePicker.TableBody>
													{datePicker.weeks.map((week, id) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<DatePicker.TableRow key={id}>
															{week.map((day, id) => (
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																<DatePicker.TableCell key={id} value={day}>
																	<DatePicker.TableCellTrigger>
																		{day.day}
																	</DatePicker.TableCellTrigger>
																</DatePicker.TableCell>
															))}
														</DatePicker.TableRow>
													))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='month'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getMonthsGrid({ columns: 4, format: 'short' })
														.map((months, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{months.map((month, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={month.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{month.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='year'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getYearsGrid({ columns: 4 })
														.map((years, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{years.map((year, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={year.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{year.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
						</DatePicker.Content>
					</DatePicker.Positioner>
				</DatePicker.Portal>
			</DatePicker.Root>
		)
	},
}

export const WithRange: Story = {
	render: () => {
		return (
			<DatePicker.Root
				selectionMode='range'
				fixedWeeks
				isDateUnavailable={(date) =>
					date.year === 2024 && date.month === 6 && date.day === 25
				}
			>
				<DatePicker.Label>Label</DatePicker.Label>
				<DatePicker.Control>
					<DatePicker.Input index={0} />
					<Divider orientation='vertical' />
					<DatePicker.Input index={1} />
					<DatePicker.ClearTrigger>
						<Icon icon='material-symbols:close-small-rounded' />
					</DatePicker.ClearTrigger>
					<DatePicker.Trigger>
						<Icon icon='material-symbols:calendar-today' />
					</DatePicker.Trigger>
				</DatePicker.Control>
				<DatePicker.Portal>
					<DatePicker.Positioner>
						<DatePicker.Content>
							<Flex gap={2}>
								<DatePicker.YearSelect />
								<DatePicker.MonthSelect />
							</Flex>
							<DatePicker.View view='day'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableHead>
													<DatePicker.TableRow>
														{datePicker.weekDays.map((weekDay, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableHeader key={id}>
																{weekDay.short}
															</DatePicker.TableHeader>
														))}
													</DatePicker.TableRow>
												</DatePicker.TableHead>
												<DatePicker.TableBody>
													{datePicker.weeks.map((week, id) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<DatePicker.TableRow key={id}>
															{week.map((day, id) => (
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																<DatePicker.TableCell key={id} value={day}>
																	<DatePicker.TableCellTrigger>
																		{day.day}
																	</DatePicker.TableCellTrigger>
																</DatePicker.TableCell>
															))}
														</DatePicker.TableRow>
													))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='month'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getMonthsGrid({ columns: 4, format: 'short' })
														.map((months, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{months.map((month, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={month.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{month.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='year'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getYearsGrid({ columns: 4 })
														.map((years, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{years.map((year, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={year.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{year.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
						</DatePicker.Content>
					</DatePicker.Positioner>
				</DatePicker.Portal>
			</DatePicker.Root>
		)
	},
}

export const withDisabled: Story = {
	render: () => {
		return (
			<DatePicker.Root
				// selectionMode='range'
				fixedWeeks
				isDateUnavailable={(date) =>
					date.year === 2024 && date.month === 6 && date.day === 25
				}
				disabled
			>
				<DatePicker.Label>Label</DatePicker.Label>
				<DatePicker.Control>
					<DatePicker.Input index={0} />
					{/* <DatePicker.Input index={1} /> */}
					<DatePicker.ClearTrigger>
						<Icon icon='material-symbols:close-small-rounded' />
					</DatePicker.ClearTrigger>
					<DatePicker.Trigger>
						<Icon icon='material-symbols:calendar-today' />
					</DatePicker.Trigger>
				</DatePicker.Control>
				<DatePicker.Portal>
					<DatePicker.Positioner>
						<DatePicker.Content>
							<Flex gap={2}>
								<DatePicker.YearSelect />
								<DatePicker.MonthSelect />
							</Flex>
							<DatePicker.View view='day'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableHead>
													<DatePicker.TableRow>
														{datePicker.weekDays.map((weekDay, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableHeader key={id}>
																{weekDay.short}
															</DatePicker.TableHeader>
														))}
													</DatePicker.TableRow>
												</DatePicker.TableHead>
												<DatePicker.TableBody>
													{datePicker.weeks.map((week, id) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<DatePicker.TableRow key={id}>
															{week.map((day, id) => (
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																<DatePicker.TableCell key={id} value={day}>
																	<DatePicker.TableCellTrigger>
																		{day.day}
																	</DatePicker.TableCellTrigger>
																</DatePicker.TableCell>
															))}
														</DatePicker.TableRow>
													))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='month'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getMonthsGrid({ columns: 4, format: 'short' })
														.map((months, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{months.map((month, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={month.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{month.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
							<DatePicker.View view='year'>
								<DatePicker.Context>
									{(datePicker) => (
										<>
											<DatePicker.ViewControl>
												<DatePicker.PrevTrigger>
													<Icon icon='material-symbols:chevron-left' />
												</DatePicker.PrevTrigger>
												<DatePicker.ViewTrigger>
													<DatePicker.RangeText />
												</DatePicker.ViewTrigger>
												<DatePicker.NextTrigger>
													<Icon icon='material-symbols:chevron-right' />
												</DatePicker.NextTrigger>
											</DatePicker.ViewControl>
											<DatePicker.Table>
												<DatePicker.TableBody>
													{datePicker
														.getYearsGrid({ columns: 4 })
														.map((years, id) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<DatePicker.TableRow key={id}>
																{years.map((year, id) => (
																	<DatePicker.TableCell
																		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																		key={id}
																		value={year.value}
																	>
																		<DatePicker.TableCellTrigger>
																			{year.label}
																		</DatePicker.TableCellTrigger>
																	</DatePicker.TableCell>
																))}
															</DatePicker.TableRow>
														))}
												</DatePicker.TableBody>
											</DatePicker.Table>
										</>
									)}
								</DatePicker.Context>
							</DatePicker.View>
						</DatePicker.Content>
					</DatePicker.Positioner>
				</DatePicker.Portal>
			</DatePicker.Root>
		)
	},
}
