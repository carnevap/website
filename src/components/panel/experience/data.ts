import { StaticImageData } from 'next/image';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

export interface IExperience {
  title: string;
  companyName: string;
  companyImage: StaticImageData;
  date: string;
  points: string[];
}

export const experienceData: IExperience[] = [
  {
    title: 'Bilingual Customer Support Representative',
    companyName: 'Toyota Canada',
    companyImage: image3,
    date: 'Jul 2024 - Present',
    points: ['Handled phone, email, in-app feedback, and supported Tier 2 staff with rental and part delivery cases', 'Utilized Amazon Web Services to aid Toyota Canada clients, providing information and technical support', 'Promoted to Email Support Specialist within two months, and started Tier 2 training within six months'],
  },
  
  {
    title: 'IT Infrastructure Support Analyst',
    companyName: 'Canada Revenue Agency',
    companyImage: image1,
    date: 'Sep 2022 - Aug 2023 (1 year)',
    points: ['Granted special le/folder/software permissions to CRA employees as requested', 'Created/Deleted/Reactivated new and old employee accounts and updated their permissions', 'Collaborated with IT teams to troubleshoot and resolve complex issues, such as operating system glitches, hardware incompatibilities, software bugs, lack of permissions and much more', 'Managed all French ticket requests as well as translating emails and documents'],
  },

  {
    title: 'Senior Multimedia Intern',
    companyName: 'University of Windsory',
    companyImage: image2,
    date: 'May 2021 - Apr 2022 (1 year)',
    points: ['Led multimedia projects including video and animation production, graphic design work, HTML and CSS website building, 3D modeling, game design and much more', 'Worked with various university departments and professors to create custom infographics, visually interesting presentations and engaging digital syllabi'],
  },

  {
    title: 'Sandwich Artist',
    companyName: 'Subway',
    companyImage: image4,
    date: 'Jul 2017 - Sep 2021 (4+ year)',
    points: ['Managed store operations including opening/closing, handling cash, supervising and training team members, cleaning, food prep, serving, stocking and so much more.', 'Being bilingual, I would often take orders of the French speaking customers', 'After 4 years of working here, I was in the highest position of seniority which meant I was trusted with many leadership responsibilities.', 'Took it upon myself to create custom training documentation and learning resources for the new hires I would train.', 'Learned a lot about customer interactions and how to effectively deescalate tense situations.'],
  },
];
