import React, { useState } from "react";
import { TextField, Button, Typography, Paper, box } from "@material-ui/core";

function ResumeUploadForm() {
  const [resumeFile, setResumeFile] = useState(null);
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [prefferedSectors, setPrefferedSectors] = useState([]);

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Preffered Sectors:</label>
        <input
          type="text"
          value={prefferedSectors}
          onChange={(event) => setPrefferedSectors(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Resume:</label>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ResumeUploadForm;
