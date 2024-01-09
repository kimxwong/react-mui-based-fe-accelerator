import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(MuiButton)(({ theme, ...props }) => {
	return {
		...theme.typography.button,

		// variant = primary by default
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},

		'&:focus::before': {
			content: '""',
			position: 'absolute',
			top: -2,
			right: -2,
			bottom: -2,
			left: -2,
			boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
			borderRadius: '4px',
		},

		// variant = primary-dark
		'&.MuiButton-primary-dark': {
			backgroundColor: theme.palette.common.white,
			borderColor: theme.palette.common.white,
			color: theme.palette.primary.main,
			'&:hover': {
				backgroundColor: 'transparent',
				color: theme.palette.common.white,
			},
			'&:focus::before': {
				boxShadow: `0 0 0 2px ${theme.palette.common.white}`,
			},
		},

		// variant = secondary
		'&.MuiButton-secondary': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.primary.main,
			'&:hover': {
				backgroundColor: theme.palette.secondary.main,
				color: theme.palette.common.white,
			},
		},

		// variant = secondary-dark
		'&.MuiButton-secondary-dark': {
			backgroundColor: 'transparent',
			borderColor: theme.palette.common.white,
			color: theme.palette.common.white,
			'&:hover': {
				backgroundColor: theme.palette.common.white,
				color: theme.palette.primary.main,
			},
			'&:focus::before': {
				boxShadow: `0 0 0 2px ${theme.palette.common.white}`,
			},
		},

		'&.Mui-disabled': {
			backgroundColor: theme.palette.primary.grey,
			borderColor: theme.palette.primary.grey,
			color: theme.palette.common.white,
		},

		border: '1px solid',
		textTransform: 'uppercase', // Make the text all uppercase
		boxShadow: 'none', // removes the box-shadow MUI applies by default
		borderRadius: '12px',
		gap: '8px',
		padding: '20px 56px 16px 56px',
		textWrap: 'nowrap',
		...props,
	}
})

export default StyledButton
