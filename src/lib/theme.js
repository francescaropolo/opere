export const theme = {
    typography: {
        fontFamily: {
            primary: "'Source Sans Pro', sans-serif;",
            secondary: "'Gentium Book Basic', serif;",
        },
        fontSize: {
            title: 48,
            subTitle: 16,
            body: 14,
            caption: 12,
            overline: 10
        }
    },
    palette: {
        primary: {
            main: '#333',
            light: '#333',
            dark: '#333',
            contrast: '#F4f4f6'
        },
        secondary: {
            main: '#555',
            light: '#e6e6e9',
            dark: '#353535',
            contrast: '#F4f4f6'
        },
        tertiary: {
            main: '#f5cb5c',
            light: '#deb841',
            dark: '#de9e36',
            contrast: '#333'
        },
        common: {
            black: '#333',
            white: '#FFF'
        }
    },
    spacing: (value) => `${8 * value}px`
}