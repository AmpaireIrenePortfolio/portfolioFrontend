const API_URL = import.meta.env.VITE_API_URL;

// --- Projects ---
export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Could not fetch projects.');
  }
  return response.json();
};

// --- Contact ---
export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.');
  }
  return data;
};