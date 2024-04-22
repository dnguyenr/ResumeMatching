import React from 'react';
import './App.css';
import ResumeUploadForm from './Dashboard/ResumeUploadForm';
import CompanyProfileForm from './Dashboard/CompanyProfileForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResumeUploadForm />
        <CompanyProfileForm />
      </header>
    </div>
  );
}

export default App;
