import React, { useState } from 'react'
import Menu from './components/Menu'
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core'

function App() {
    const [paletteMode, setPaletteMode] = useState(0)
    const theme = responsiveFontSizes(
        createMuiTheme({
            palette: {
                type: ['dark', 'light'][paletteMode],
            },
        })
    )

    const togglePaletteMode = () => {
        setPaletteMode((paletteMode + 1) % 2)
    }

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu togglePaletteMode={togglePaletteMode} />
        content
    </ThemeProvider>
}

export default App
