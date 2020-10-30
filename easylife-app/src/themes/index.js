export const Palette = {
    button: {
        textColor: '#FFF',
        primary: '#3B86FF',
        secundary: '#0062FF'
    },

    default: {
        fontFamily: "'Trebuchet MS', Helvetica, sans-serif"
    },

    light: {
        grey: '#cccccc',
        blue: '#3B86FF',
    },

    normal: {
        grey: '#858585',
        blue: '#0062FF',
    }
};

export const InputStyles = {
    width: '80%',
    height: 60,
    ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%'
    },
};