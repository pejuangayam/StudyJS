"use client"

import { Typography, TextField, Button, Container, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputForm() {
    const router = useRouter()
    const [firstName, setFirstName] = useState('');
    const [category, setCategory] = useState('Math');
    const [submittedData, setSubmittedData] = useState<{ name: string; subject: string; } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstName && category) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ firstName, category })
            }).then(() => router.push('/Notes'))
        }
    };

    return (
        <Container>
            <Typography variant="h3"
                color="secondary"
            >
                Create a New Form
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    variant="filled"
                    color="secondary"
                    required
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <FormGroup>
                    <FormLabel>Subjects</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="math" control={<Radio />} label="Math" />
                        <FormControlLabel value="ai" control={<Radio />} label="Ai" />
                        <FormControlLabel value="web" control={<Radio />} label="Web" />
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
