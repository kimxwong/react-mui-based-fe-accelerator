import { createTheme } from '@mui/material/styles'
import TradeGothicBoldCondensed from 'assets/fonts/Trade-Gothic/TradeGothicLTPro-BdCn20.ttf'
import GraphieBook from 'assets/fonts/Graphie/Graphie-Book.ttf'
import GraphieRegular from 'assets/fonts/Graphie/Graphie-Regular.ttf'
import GraphieSemiBold from 'assets/fonts/Graphie/Graphie-SemiBold.ttf'
import GraphieBold from 'assets/fonts/Graphie/Graphie-Bold.ttf'

import { typography } from './typography'

const basicTheme = createTheme({
	palette: {
		primary: {
			main: '#002D72',
			lightBlue: '#D8E5ED',
			darkGrey: '#393D47',
			grey: '#97999B',
			lightGrey: '#E6E6E6',
		},
		secondary: {
			main: '#0063C6',
			torquise: '#00A3AD',
			lightTorquise: '#50C2CC',
			foamGreen: '#40C1AC',
			green: '#007A53',
			lavender: '#8194DD',
		},
		functional: {
			alert: '#FEDD00',
			urgency: '#CE0037',
			urgency0_05: '#FDF2F5',
			success: '#007A53',
			success0_05: '#F2F8F6',
			disabledGrey: '#8E8E8E',
			footerGrey: '#2A2D31',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 480,
			md: 768,
			lg: 1200,
			xl: 1440,
		},
	},
	typography: typography,
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: `
            @font-face {
                font-family: 'TradeGothicBoldCondensed'; # Trade Gothic Bold Condensed #20
                font-style: normal;
                src: url(${TradeGothicBoldCondensed}) format('truetype');
            }

			@font-face {
                font-family: 'GraphieBook'; # Graphie Book
                font-style: normal;
                src: url(${GraphieBook}) format('truetype');
            }

			@font-face {
                font-family: 'GraphieRegular'; # Graphie Regular
                font-style: normal;
                src: url(${GraphieRegular}) format('truetype');
            }

			@font-face {
                font-family: 'GraphieSemiBold'; # Graphie Semi Bold
                font-style: normal;
                src: url(${GraphieSemiBold}) format('truetype');
            }

			@font-face {
                font-family: 'GraphieBold'; # Graphie Bold
                font-style: normal;
                src: url(${GraphieBold}) format('truetype');
            }
      `,
		},
	},
})

export default basicTheme
