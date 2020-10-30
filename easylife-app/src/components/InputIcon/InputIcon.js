import React from 'react';
import { InputStyles } from '~/themes';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
    root: InputStyles
});

export default function InputWithIcon (props) {
    const classes = useStyles(); 
    
    const onInput = (e) => {
        props.handle(e.target.value);
    };

    return (
        <div>
            <InputLabel htmlFor="input-with-icon-adornment">{props.label}</InputLabel>
            
            <Input 
                defaultValue={props.defaultValue}
                onChange={ onInput } 
                className={classes.root}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </div>
    );
}