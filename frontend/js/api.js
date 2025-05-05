const API_BASE_URL = '/api';

export async function apiRequest(endpoint, options = {}) {
    const token = sessionStorage.getItem('token');
    
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        });

        // Check content type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response');
        }

        const data = await response.json();

        // Handle API errors
        if (!response.ok) {
            throw new Error(data.error || 'API request failed');
        }

        return data;
    } catch (error) {
        // Log error for debugging
        console.error('API Request failed:', error);

        // Re-throw with user-friendly message
        throw new Error(error.message || 'Failed to communicate with server');
    }
}
