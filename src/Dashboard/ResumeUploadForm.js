import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

function ResumeUploadForm() {
  const [resumeFile, setResumeFile] = useState(null);
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [prefferedSectors, setPrefferedSectors] = useState('');

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("experience", experience);
    formData.append("prefferedSectors", prefferedSectors);
    formData.append("resumeDile", resumeFile);

    console.log("Form data submmited: ", formData);
  };

  return (
    <Box sx={{ padding: 2}}>

    
      <Paper elevation={3} sx={{ padding: 3}}>
      
        <Typography variant = "h6" gutterBottom>
          Upload Your Resume
        </Typography> {/* Added closing curly brace here */}
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        />
        <TextField
        label= "Experience Level"
        ariant="outlined"
        fullWidth
        margin="normal"
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
        required
        />
        <TextField
        label= "Preffered Job Sectors"
        ariant="outlined"
        fullWidth
        margin="normal"
        value={prefferedSectors}
        onChange={(event) => setPrefferedSectors(event.target.value)}
        required
        />
    <Button 
    variant="contained"
    component="label"
    fullWidth
    sx={{ marginTop: 2}}>
      Upload file
      <input
      type = "file"
      hidden
      onChange={handleFileChange}
      accept=".pdf,.doc,.docx"
      required
      />
    </Button>
  <Button
  type="submit"
  variant="contained"
  color="primary"
  fullWidth
  sx={{ mt: 2, mb: 2}}>
    Submit
    </Button>
    </form>
    </Paper>
    </Box>
  );
}
export default ResumeUploadForm;
