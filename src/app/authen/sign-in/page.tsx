'use client';

import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';

export default function LoginPage() {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Hệ thống quản lý nghiên cứu khoa học</h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <input
                type="email"
                placeholder="Email"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
            />
            <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
            />
            <button
                type="submit"
                style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                }}
            >
                Sign In
            </button>
            </form>
        </div>
    );
}
