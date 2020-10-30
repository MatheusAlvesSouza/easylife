import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        margin: '0',
        padding: '0',
        width: 'auto',
        display: 'inline'
    },
    rating: {
        margin: '0',
        padding: '0',
        color: "#FF0000"
    }
});

export default function Favorite(props) {
    const classes = useStyles();

    const readOnly = props.isReadOnly ?? false;
    const [value, setValue] = React.useState(props.isFavorite);

    return (
        <Box component="fieldset" mb={3} borderColor="transparent" className={classes.root}>
            
            <Rating  className={classes.rating}
            size='large'
            name="simple-controlled"
            value={value}
            precision={1}
            max={1}
            onChange={(event, newValue) => {
                setValue(newValue);
                props.handle(newValue)
            }}
            readOnly={readOnly}
            icon={<FavoriteIcon fontSize="inherit" />}
            />
        </Box>
    );
}
