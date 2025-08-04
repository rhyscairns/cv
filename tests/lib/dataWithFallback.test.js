import {
  getEducation,
  getExperience,
  getProjects,
  getAboutMe,
  getHomepageProjects,
  postEmail,
} from '@/lib/dataWithFallback';
import {
  educationData,
  experienceData,
  aboutMeData,
  projectsData,
} from '@/lib/staticData';

// Mock the config
jest.mock('@/config/index.js', () => ({
  api: {
    aws: 'https://test-api.com',
  },
}));

describe('Data Layer with Fallback', () => {
  beforeEach(() => {
    fetch.mockClear();
    console.error = jest.fn(); // Mock console.error to avoid noise in tests
  });

  describe('getEducation', () => {
    it('should return AWS data when API call succeeds', async () => {
      const mockEducationData = [{ id: 1, university: 'Test University' }];
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockEducationData),
      });

      const result = await getEducation();
      expect(result).toEqual(mockEducationData);
      expect(fetch).toHaveBeenCalledWith(
        'https://test-api.com/education',
        expect.any(Object)
      );
    });

    it('should return static data when API call fails', async () => {
      fetch.mockRejectedValueOnce(new Error('API Error'));

      const result = await getEducation();
      expect(result).toEqual(educationData);
      expect(console.error).toHaveBeenCalledWith(
        'Error fetching education data, using static fallback:',
        expect.any(Error)
      );
    });

    it('should return static data when API returns error status', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const result = await getEducation();
      expect(result).toEqual(educationData);
    });
  });

  describe('getExperience', () => {
    it('should return AWS data when API call succeeds', async () => {
      const mockExperienceData = [{ id: 1, company: 'Test Company' }];
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockExperienceData),
      });

      const result = await getExperience();
      expect(result).toEqual(mockExperienceData);
    });

    it('should return static data when API call fails', async () => {
      fetch.mockRejectedValueOnce(new Error('Network Error'));

      const result = await getExperience();
      expect(result).toEqual(experienceData);
    });
  });

  describe('getAboutMe', () => {
    it('should return AWS data when API call succeeds', async () => {
      const mockAboutData = [{ id: 1, title: 'Test Title' }];
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockAboutData),
      });

      const result = await getAboutMe();
      expect(result).toEqual(mockAboutData);
    });

    it('should return static data when API call fails', async () => {
      fetch.mockRejectedValueOnce(new Error('Timeout Error'));

      const result = await getAboutMe();
      expect(result).toEqual(aboutMeData);
    });
  });

  describe('getProjects', () => {
    it('should return AWS data when API call succeeds', async () => {
      const mockProjectsData = [{ id: 1, title: 'Test Project' }];
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockProjectsData),
      });

      const result = await getProjects();
      expect(result).toEqual(mockProjectsData);
    });

    it('should return static data when API call fails', async () => {
      fetch.mockRejectedValueOnce(new Error('Server Error'));

      const result = await getProjects();
      expect(result).toEqual(projectsData);
    });
  });

  describe('getHomepageProjects', () => {
    it('should return static projects data', () => {
      const result = getHomepageProjects();
      expect(result).toEqual(projectsData);
      expect(result).toHaveLength(3);
      expect(result[0]).toHaveProperty('title');
      expect(result[0]).toHaveProperty('description');
    });
  });

  describe('postEmail', () => {
    it('should successfully send email with valid data', async () => {
      const mockResponse = { success: true, message: 'Email sent' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const emailData = {
        name: 'John Doe',
        email: 'john@example.com',
        description: 'Test message',
      };

      const result = await postEmail(emailData);
      expect(result).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          description: 'Test message',
        }),
        signal: expect.any(AbortSignal),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });

    it('should throw error for missing fields', async () => {
      await expect(
        postEmail({ name: '', email: 'test@test.com', description: 'test' })
      ).rejects.toThrow('All fields are required');

      await expect(
        postEmail({ name: 'Test', email: '', description: 'test' })
      ).rejects.toThrow('All fields are required');

      await expect(
        postEmail({ name: 'Test', email: 'test@test.com', description: '' })
      ).rejects.toThrow('All fields are required');
    });

    it('should throw error for invalid email format', async () => {
      await expect(
        postEmail({
          name: 'Test',
          email: 'invalid-email',
          description: 'test',
        })
      ).rejects.toThrow('Invalid email format');
    });

    it('should handle API errors gracefully', async () => {
      fetch.mockRejectedValueOnce(new Error('Network Error'));

      await expect(
        postEmail({
          name: 'Test',
          email: 'test@example.com',
          description: 'Test message',
        })
      ).rejects.toThrow('Failed to send message. Please try again.');
    });
  });
});
