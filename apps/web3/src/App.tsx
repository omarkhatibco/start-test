import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

import { Button, Image } from '@mando/design-system'
import { Box } from '@mando/styled-system/jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Box p={8}>
				<Image
					src='https://picsum.photos/600/400'
					alt='My random image'
					aspectRatio={16 / 9}
					w={'full'}
				/>
				<Box>
					<h1>Hello World!</h1>
					{/* <p>You have clicked {state} times.</p> */}
				</Box>
				<Button>Omaar</Button>
			</Box>
		</>
	)
}

export default App
