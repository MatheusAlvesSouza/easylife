import { InputStyles } from '~/themes';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; 

export const InputField = withStyles({
    root: InputStyles,
    label: {
        height: 40,
        top: -6
    }
})(TextField);