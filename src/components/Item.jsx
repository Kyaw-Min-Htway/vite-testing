import {
    Box,
    Card,
    CardContent,
    Typography,
    IconButton,
} from "@mui/material";

import {
    Alarm as TimeIcon,
    AccountCircle as UserIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";

export default function Item({ item, remove }) {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1,
                        }}>
                        <TimeIcon
                            sx={{ fontSize: 16 }}
                            color="success"
                        />
                        <Typography
                            variant="caption"
                            color={green[500]}>
                            A few seconds ago
                        </Typography>
                    </Box>
                    <IconButton
                        size="small"
                        onClick={() => remove(item.id)}
                        aria-label="delete item">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Typography sx={{ my: 2 }}>{item.content}</Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                    }}>
                    <UserIcon
                        sx={{ fontSize: 16 }}
                        color="info"
                    />
                    <Typography variant="caption">{item.name}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
