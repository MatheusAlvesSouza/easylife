import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: '0',
        padding: '0',
        width: 'auto'
    },
    rating: {
        margin: '0',
        padding: '0',
        color: "#FF0"
    }
});

export default function StarsRating(props) {
    const classes = useStyles();

    const max = props.max ?? 5;
    const readOnly = props.isReadOnly ?? false;
    const hasTypography = props.hasTypography ?? true;

    const [value, setValue] = React.useState(props.stars ?? 3);

    return (
        <Box component="fieldset" mb={3} borderColor="transparent" className={classes.root}>
            
            {
                hasTypography &&
                 <Typography component="legend">Estrelas</Typography>
            }
            
            <Rating  className={classes.rating}
            size='large'
            name="simple-controlled"
            value={value}
            precision={0.5}
            max={max}
            onChange={(event, newValue) => {
                setValue(newValue);
                props.handle(newValue)
            }}
            readOnly={readOnly}
            />
        </Box>
    );
}
