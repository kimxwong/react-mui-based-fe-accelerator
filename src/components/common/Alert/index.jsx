import React from 'react'
import PropTypes from 'prop-types'
import { Alert as MuiAlert, Typography } from '@mui/material'
import { styled } from '@mui/system'
import IconButton from '../Buttons/IconButton'

import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import { ReactComponent as ErrorIcon } from 'assets/svgs/actions/circleWarning.svg'
import { ReactComponent as InfoIcon } from 'assets/svgs/actions/circleInfo.svg'
import { ReactComponent as SuccessIcon } from 'assets/svgs/actions/completed.svg'

const icons = {
	error: <ErrorIcon />,
	info: <InfoIcon />,
	success: <SuccessIcon />,
}

const CustomAlert = styled(MuiAlert)(({ theme }) => ({
	'&.MuiAlert-standard': {
		display: 'flex',
		alignItems: 'flex-start',
		gap: 4,
		maxWidth: '1440px',
		width: '100%',
		borderRadius: '8px',
		border: '3px solid',
		'& .MuiAlert-action': {
			paddingTop: 0,
		},
	},
	'&.MuiAlert-standardSuccess': {
		backgroundColor: theme.palette.functional.success0_05,
		borderColor: theme.palette.functional.success,
		'.MuiAlert-icon': {
			color: theme.palette.functional.success,
		},
	},
	'&.MuiAlert-standardInfo': {
		backgroundColor: theme.palette.primary.lightBlue,
		borderColor: theme.palette.secondary.main,
		'.MuiAlert-icon': {
			color: theme.palette.secondary.main,
		},
	},
	'&.MuiAlert-standardError': {
		backgroundColor: theme.palette.functional.urgency0_05,
		borderColor: theme.palette.functional.urgency,
		'.MuiAlert-icon': {
			color: theme.palette.functional.urgency,
		},
	},
}))

const Alert = ({ type, title, message, onClose }) => (
	<CustomAlert
		severity={type}
		iconMapping={icons}
		action={
			onClose !== undefined ? (
				<IconButton aria-label="close" color="inherit" onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null
		}
	>
		<Typography variant="bodySmall" color={'functional.footerGrey'}>
			<strong>{title}</strong> {message}
		</Typography>
	</CustomAlert>
)

Alert.propTypes = {
	type: PropTypes.oneOf(['error', 'info', 'success']).isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onClose: PropTypes.func,
}

Alert.propTypes = {}

export default Alert
