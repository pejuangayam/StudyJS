"use client";

import { Typography, Button, Container } from "@mui/material";

export default function Form() {
    return (
        <Container>
            <Typography variant="h3"
                color="secondary"
                align="left"
            >
                Fill this Form
            </Typography>

            <Button
                onClick={() => console.log('awok tekey saya')}
                variant="text"
                type="button"
                color="secondary"
            >
                Submit
            </Button>

        </Container>
    );
}