import {
  educationData,
  experienceData,
  aboutMeData,
  projectsData,
} from './staticData.js';
import config from '@/config/index.js';

// Enhanced error handling and security
const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

async function getEducation() {
  try {
    const response = await fetchWithTimeout(`${config.api.aws}/education`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching education data, using static fallback:',
      error
    );
    // Return static data as fallback
    return educationData;
  }
}

async function getExperience() {
  try {
    const response = await fetchWithTimeout(`${config.api.aws}/experience`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching experience data, using static fallback:',
      error
    );
    // Return static data as fallback
    return experienceData;
  }
}

async function getProjects() {
  try {
    const response = await fetchWithTimeout(`${config.api.aws}/projects`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching projects data, using static fallback:',
      error
    );
    return projectsData;
  }
}

async function getAboutMe() {
  try {
    const response = await fetchWithTimeout(`${config.api.aws}/about-me`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching about me data, using static fallback:',
      error
    );
    // Return static data as fallback
    return aboutMeData;
  }
}

async function postEmail({ name, email, description }) {
  // Input validation
  if (!name?.trim() || !email?.trim() || !description?.trim()) {
    throw new Error('All fields are required');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  try {
    // Use Next.js API route instead of direct AWS call for better security
    const response = await fetchWithTimeout('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        description: description.trim(),
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
}

// Static function for homepage projects
function getHomepageProjects() {
  return projectsData;
}

export {
  getEducation,
  getExperience,
  getProjects,
  getAboutMe,
  postEmail,
  getHomepageProjects,
};
