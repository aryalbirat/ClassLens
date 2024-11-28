import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [photo, setPhoto] = useState(null);
    const [report, setReport] = useState(null);

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!photo) return alert('Please upload a photo');
      
        const formData = new FormData();
        formData.append('photo', photo);
      
        try {
          // Upload photo to the backend
          const uploadResponse = await axios.post('/api/upload', formData); // Proxy will forward this to backend
          const filename = uploadResponse.data.file.filename;
      
          // Generate attentiveness report
          const reportResponse = await axios.post('/api/generate-report', { filename });
          setReport(reportResponse.data.report);
        } catch (error) {
          console.error('Error uploading file or generating report:', error);
          alert('Error uploading file or generating report. Please try again.');
        }
      };
      

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Student Attentiveness System</h1>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} accept="image/*" />
                <button type="submit">Upload and Generate Report</button>
            </form>

            {report && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Attentiveness Report</h2>
                    <p><strong>Overall Attentiveness:</strong> {report.attentiveness}</p>
                    <table border="1" style={{ margin: '0 auto' }}>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.actions.map((action, index) => (
                                <tr key={index}>
                                    <td>{action.name}</td>
                                    <td>{action.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default App;
