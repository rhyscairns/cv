import {
  educationData,
  experienceData,
  aboutMeData,
  projectsData,
} from '@/lib/staticData';

describe('Static Data', () => {
  describe('educationData', () => {
    it('should contain valid education entries', () => {
      expect(educationData).toBeInstanceOf(Array);
      expect(educationData.length).toBeGreaterThan(0);

      educationData.forEach((entry) => {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('university');
        expect(entry).toHaveProperty('degree');
        expect(entry).toHaveProperty('year');
        expect(entry).toHaveProperty('location');
        expect(entry).toHaveProperty('modules');
        expect(entry).toHaveProperty('GPA');
        expect(entry).toHaveProperty('summary');
        expect(entry).toHaveProperty('degreeImage');
        expect(entry).toHaveProperty('universityWebsite');
        expect(entry).toHaveProperty('current');

        expect(typeof entry.id).toBe('number');
        expect(typeof entry.university).toBe('string');
        expect(typeof entry.degree).toBe('string');
        expect(typeof entry.year).toBe('string');
        expect(typeof entry.location).toBe('string');
        expect(Array.isArray(entry.modules)).toBe(true);
        expect(typeof entry.summary).toBe('string');
        expect(typeof entry.degreeImage).toBe('string');
        expect(typeof entry.universityWebsite).toBe('string');
        expect(typeof entry.current).toBe('boolean');
      });
    });

    it('should have one current education entry', () => {
      const currentEntries = educationData.filter((entry) => entry.current);
      expect(currentEntries).toHaveLength(1);
    });
  });

  describe('experienceData', () => {
    it('should contain valid experience entries', () => {
      expect(experienceData).toBeInstanceOf(Array);
      expect(experienceData.length).toBeGreaterThan(0);

      experienceData.forEach((entry) => {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('title');
        expect(entry).toHaveProperty('company');
        expect(entry).toHaveProperty('tabName');
        expect(entry).toHaveProperty('companyDescription');
        expect(entry).toHaveProperty('date');
        expect(entry).toHaveProperty('description');
        expect(entry).toHaveProperty('logo');
        expect(entry).toHaveProperty('website');
        expect(entry).toHaveProperty('current');

        expect(typeof entry.id).toBe('number');
        expect(typeof entry.title).toBe('string');
        expect(typeof entry.company).toBe('string');
        expect(typeof entry.tabName).toBe('string');
        expect(typeof entry.companyDescription).toBe('string');
        expect(typeof entry.date).toBe('string');
        expect(Array.isArray(entry.description)).toBe(true);
        expect(typeof entry.logo).toBe('string');
        expect(typeof entry.website).toBe('string');
        expect(typeof entry.current).toBe('boolean');
      });
    });

    it('should have one current experience entry', () => {
      const currentEntries = experienceData.filter((entry) => entry.current);
      expect(currentEntries).toHaveLength(1);
    });
  });

  describe('aboutMeData', () => {
    it('should contain valid about me entries', () => {
      expect(aboutMeData).toBeInstanceOf(Array);
      expect(aboutMeData.length).toBeGreaterThan(0);

      aboutMeData.forEach((entry) => {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('title');
        expect(entry).toHaveProperty('description');
        expect(entry).toHaveProperty('imageUrl');

        expect(typeof entry.id).toBe('number');
        expect(typeof entry.title).toBe('string');
        expect(typeof entry.description).toBe('string');
        expect(typeof entry.imageUrl).toBe('string');
      });
    });
  });

  describe('projectsData', () => {
    it('should contain valid project entries', () => {
      expect(projectsData).toBeInstanceOf(Array);
      expect(projectsData.length).toBeGreaterThan(0);

      projectsData.forEach((project) => {
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');

        expect(typeof project.title).toBe('string');
        expect(typeof project.description).toBe('string');
        expect(project.title.length).toBeGreaterThan(0);
        expect(project.description.length).toBeGreaterThan(0);
      });
    });
  });
});
