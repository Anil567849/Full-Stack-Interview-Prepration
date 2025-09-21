import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React, {createContext} from 'react'

export const TemplateContext = createContext(null);

function TemplateProvider({children}) {

    const theme = createTheme ({

        overrides:{
            MuiDrawer : {
                paperAnchorLeft : {
                    height : '90%',
                    top : '31px',
                    left : 69,
                    width : '27%',

                }
            }
        }

    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
