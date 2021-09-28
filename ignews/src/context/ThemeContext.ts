import { createContext } from 'react';


 export const Theme={
    light:{
        background:"#fffffe",
        headline:"#2b2c34",
        paragraph: "#2b2c34",
        button:"#6246ea",
        buttonText:"#fffffe"

    },
    dark:{
        background:"#121214",
        headline:"#ffffff",
        paragraph: "#fffffe",
        button:"#6246ea",
        buttonText:"#fffffe"

    }
}

 export const ContextTheme = createContext({})



