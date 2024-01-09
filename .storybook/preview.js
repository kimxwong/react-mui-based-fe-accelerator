/** @type { import('@storybook/react').Preview } */
import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import basicTheme from 'theme'

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme={basicTheme}>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<CssBaseline />
				<Story />
			</ThemeProvider>
		),
	],
}

export default preview
