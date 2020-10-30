import React from 'react';
import { Palette } from '~/themes';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

export const CustomCheckbox = withStyles({
    root: {
      color: Palette.light.blue,
      '&$checked': {
        color: Palette.normal.blue,
      },
      display: 'block'
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
