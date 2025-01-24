import React, { useState } from 'react';

const Simulation = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = 'https://w42zvst3nji.execute-api.us-east-1.amazonaws.com/prod/simulation';

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 'user123',
                    answers: [input]
                })
            });

            if (!res.ok) {
                throw new Error('Failed to submit data');
            }

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('API error:', error);
            setError('Failed to submit. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Interview Simulation</h2>
            <input 
                type="text" 
                placeholder="Enter your answer..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleSubmit} style={styles.button} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>

            {response && (
                <div style={styles.response}>
                    <strong>Feedback:</strong> {response.message}
                </div>
            )}
            {error && (
                <div style={styles.error}>
                    {error}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '30px',
        maxWidth: '500px',
        margin: '50px auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '90%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '5px',
        width: '95%',
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '15px',
        width: '95%',
    },
    response: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#d4edda',
        color: '#155724',
        borderRadius: '5px',
        fontSize: '16px',
    },
    error: {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderRadius: '5px',
        fontSize: '16px',
    }
};

export default Simulation;
