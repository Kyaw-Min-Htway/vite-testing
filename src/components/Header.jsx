import { useApp } from "../ThemedApp";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Tooltip
} from "@mui/material";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
} from "@mui/icons-material";

export default function Header() {
    const { showForm, setShowForm } = useApp();

    return (
        <AppBar position="static">
            <Toolbar>
                <Tooltip title="Open Menu">
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="open menu">
                        <MenuIcon />
                    </IconButton>
                </Tooltip>

                <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>

                <Box>
                    <Tooltip title="Add">
                        <IconButton
                            color="inherit"
                            onClick={() => setShowForm(!showForm)}
                            aria-label="add new">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Toggle Light Mode">
                        <IconButton
                            color="inherit"
                            edge="end"
                            aria-label="toggle light mode">
                            <LightModeIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
