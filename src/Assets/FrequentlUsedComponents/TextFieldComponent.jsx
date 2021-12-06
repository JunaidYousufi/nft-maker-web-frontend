import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#2F80ED',
                marginTop: '3px'

            },
            '& fieldset': {
                borderColor: '#BDBDBD',
                marginTop: '3px'

            },
            '&:hover fieldset': {
                borderColor: '#2F80ED',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    input: {
        background: 'rgba(0, 0, 0, 0.03)',
        borderRadius: "10px",
    },
    
    inputfield: {
        width: '100%',
        margin: '10px 0px',
        
    },
    formLabel: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18.4px',
        color: '#808080',
        top: '-22px',
        left: '-13px',
        '&.Mui-focused': {
            color: '#2F80ED'
        }
    },

}));

const TextFieldComponent = ({ variant, label, placeholder, type, HandleFocus, InputValue, HandleInputChange,name }) => {
    const classes = useStyles();
    return (
        <>
            <CssTextField
                variant={variant}
                label={label}
                placeholder={placeholder}
                type={type}
                value={InputValue}
                onChange={HandleInputChange}
                className={`${classes.inputfield} ${classes.root}`}
                InputLabelProps={{
                    shrink: true,
                    className: classes.formLabel
                }}
                name={name}
                onFocus={HandleFocus}
                InputProps={{ className: classes.input }}
            />
        </>
    );
}

export default TextFieldComponent;