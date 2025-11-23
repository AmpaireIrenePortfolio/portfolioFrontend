
const API_URL = "https://portfolio-yev7.onrender.com";


// --- Projects ---
export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Could not fetch projects.');
  }
  return response.json();
};

// --- Contact ---
export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  // Check if the response was successful FIRST
  if (!response.ok) {
    // If not, try to get the error message from the server
    const errorData = await response.json().catch(() => ({ message: 'Server error.' }));
    throw new Error(errorData.message || 'Something went wrong.');
  }
  
  // If successful, return the data
  return response.json();
};