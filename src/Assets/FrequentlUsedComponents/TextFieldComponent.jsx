import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#2F80ED',
            },
            '& fieldset': {
                borderColor: '#BDBDBD',
            },
            '&:hover fieldset': {
                borderColor: '#2F80ED',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme)=>({
    inputfield: {
        width: '100%',
    },
    input: {
        '&::placeholder': {
            color: 'rgba(0, 0, 0, 0.5)',
            [theme.breakpoints.down('md')]: {
                color: 'white',
            },
        },

    },
}));

const TextFieldComponent = ({ variant, label, placeholder, type }) => {
    const classes = useStyles();
    return (
        <>
            <CssTextField
                variant={variant}
                label={label}
                placeholder={placeholder}
                type={type}
                className={classes.inputfield}
                InputProps={{
                    classes: { input: classes.input }
                }}
            />
        </>
    );
}

export default TextFieldComponent;