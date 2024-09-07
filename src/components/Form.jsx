import { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function Form({ add }) {
    const contentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = contentRef.current.value.trim();

        if (content) {
            console.log("Adding content:", content); // Debugging log
            add(content, "Alice");
            e.currentTarget.reset();
        } else {
            console.warn("Content cannot be empty"); // Warning log
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4, textAlign: "right" }}>
                <TextField
                    inputRef={contentRef}
                    type="text"
                    placeholder="Enter your content here..."
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                    aria-label="Content input"
                />
                <Button variant="contained" type="submit">
                    Post
                </Button>
            </Box>
        </form>
    );
}
