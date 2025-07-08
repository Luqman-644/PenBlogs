import React from 'react';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function RTE({ name, control, label, defaultValue = '' }) {
  return (
    <div className="w-full mb-17">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || 'body'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            theme="snow"
            value={value || defaultValue}
            onChange={onChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'color',
              'background',
              'align',
              'blockquote',
              'code-block',
              'list',
              'bullet',
              'link',
              'image',
            ]}
            style={{
              height: '500px', 
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '16px',
            }}
          />
        )}
      />
    </div>
  );
}