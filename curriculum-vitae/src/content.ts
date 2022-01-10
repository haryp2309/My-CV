import jsonContent from "./content.json";
type Content = {
  contactInfo: {
    title: string;
    content: {
      title: string;
      content: string;
      link: string | null;
    }[];
  };
  techologies: {
    title: string;
    content: { title: string }[];
  };
  summary: {
    title: string;
    content: string;
  };
  experience: {
    title: string;
    content: {
      jobPosition: string;
      from: string;
      to: string;
      company: string;
      companyCity: string;
      description: string;
    }[];
  };
  studies: {
    title: string;
    content: {
      title: string;
      school: string;
      location: string;
      fromTo: string;
    }[];
  };
  projects: {
    title: string;
    description: string;
    content: {
      title: string;
      description: string;
    }[];
  };
};

export const content: Content = jsonContent;
