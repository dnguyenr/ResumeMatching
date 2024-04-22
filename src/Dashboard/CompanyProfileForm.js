import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

function CompanyProfileForm() {
    const [companyProfile, setCompanyProfile] = useState({
        companyName:'',
        aboutUs:'',
        values:'',
        location:'',
        jobDescription:'',
});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCompanyProfile(prevState => ({   
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data submitted: ", companyProfile);
    };

    return (
        <Box sx={{ padding: 2}}>
            <Paper elevation={3} sx={{ padding: 3}}>
                <Typography variant = "h6" gutterBottom>
                    Company Profile
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Company Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={companyProfile.companyName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="About Us"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={companyProfile.aboutUs}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Values"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={companyProfile.values}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={companyProfile.location}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Job Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={companyProfile.jobDescription}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
export default CompanyProfileForm;
    
