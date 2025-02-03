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
    title: 'Bilingual Support Representative',
    companyName: 'Toyota Canada',
    companyImage: image3,
    date: 'Jul 2024 - Present',
    points: ['Utilized AWS cloud services to aid Toyota Canada clients', 'Provided clients with information and technical support', 'Promoted multiple times in quick succession after only a few months of working', 'Handle high priority emails and sensitive informations as well as address in-app feedback issues', 'Made use of my bilingualism to support both English and French clients'],
  },
  
  {
    title: 'IT Infrastructure Support Analyst',
    companyName: 'Canada Revenue Agency',
    companyImage: image1,
    date: 'Sep 2022 - Aug 2023 (1 year)',
    points: ['Provided technical support and maintained IT infrastructure to ensure smooth operations', 'Collaborated with IT teams to escalate and resolve complex technical issues efficiently', 'Implemented monitoring tools and procedures to identify potential issues proactively and mitigate risks', 'Ensured system stability and reliability through continuous infrastructure maintenance', 'Facilitated communication between IT teams and end-users to ensure timely issue resolution'],
  },

  {
    title: 'Senior Multimedia Intern',
    companyName: 'University of Windsory',
    companyImage: image2,
    date: 'May 2021 - Apr 2022 (1 year)',
    points: ['Developed learning resources, including videos, graphics, websites, and animations', 'Designed visual learning elements for both student and faculty', 'Collaborated with departments and schools on multimedia projects', 'Enhanced the universitys multimedia presence through diverse contents', 'Supported faculty and students with custom course materials'],
  },

  {
    title: 'Sandwich Artist',
    companyName: 'Subway',
    companyImage: image4,
    date: 'Jul 2017 - Sep 2021 (4+ year)',
    points: ['Managed store operations including opening/closing, handeling cash, supervising and training team members, cleaning, food prep, serving, stocking and so much more.', 'Being bilingual, I would often take orders of the French speaking customers', 'After 4 years of working here, I was in the highest position of seniority which meant I was trusted with many leadership responsibilities.', 'Took it upon myself to create custom training documentation and learning ressources for the new hires I would train.', 'Learnt a lot about customer interactions and how to effectively deescalate tense situations.'],
  },
];
