import { createContext, useState, useContext } from "react";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";

import App from "./App";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const AppContext = createContext(); // Export AppContext

export function useApp() {
    return useContext(AppContext);
}

export default function ThemedApp() {
    const [showForm, setShowForm] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContext.Provider value={{ showForm, setShowForm }}>
                <App />
            </AppContext.Provider>
        </ThemeProvider>
    );
}
