"use client"

import { Typography, TextField, Button, Container, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export default function InputForm() {
    const [firstname, setFirstName] = useState('');
    const [category, setCategory] = useState('Math');
    const [SubmittedData, setSubmittedData] = useState<{ me: string; subject: string; } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form Submitted:", { firstname, category });

        setSubmittedData({
            name: firstname,
            subject: category
        });
    };

    return (
        <Container>
            <Typography variant="h3"
                color="secondary"
            >
                Create a New Form
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="First Name"
                    variant="filled"
                    color="secondary"
                    required
                    fullWidth
                    margin="normal"
                    value={firstname}
                    onChange={(e) => setFirsName(e.target.value)}
                />

                <FormGroup>
                    <FormLabel>Subjects</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="Math" control={<Radio />} label="Math" />
                        <FormControlLabel value="AI" control={<Radio />} label="AI" />
                        <FormControlLabel value="Web" control={<Radio />} label="Web" />
                    </RadioGroup>
                </FormGroup>

                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={() => console.log(category)}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}