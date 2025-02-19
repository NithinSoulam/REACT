// src/components/RichTextEditor.tsx
import React, { useState, useEffect} from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; // import styles
import { Card, CardContent, Typography } from '@mui/material';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState('');

  // Load saved content from localStorage when component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem('userRichText');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save content to localStorage on change
  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('userRichText', value);
  };

  // Define toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
  ];

  return (
    <Card
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        boxShadow: 5,
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          background: 'linear-gradient(135deg,rgb(228, 252, 248),rgb(187, 236, 248))',
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          sx={{ mb: 2, color: '#ad1457' }}
        >
          Rich Text Editor
        </Typography>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          style={{
            height: '300px',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;