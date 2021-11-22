import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#2F80ED',
            },
        },
    },
})(TextField);

const useStyles = makeStyles({
    inputfield: {
        width: '100%',
    },
});

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
            />
        </>
    );
}

export default TextFieldComponent;