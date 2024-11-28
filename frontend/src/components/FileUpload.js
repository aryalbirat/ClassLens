import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/api/upload/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage('File uploaded successfully');
            console.log(res.data);
        } catch (err) {
            
        }
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onChange} accept="image/*" />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;
