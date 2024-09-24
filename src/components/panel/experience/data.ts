import { StaticImageData } from 'next/image';
import image1 from './images/image1.png';
import image2 from './images/image2.png';

export interface IExperience {
  title: string;
  companyName: string;
  companyImage: StaticImageData;
  date: string;
  points: string[];
}

export const experienceData: IExperience[] = [
  {
    title: 'IT Infrastructure Support Analyst',
    companyName: 'Canada Revenue Agency',
    companyImage: image1,
    date: 'Sep 2022 - Aug 2023 (1 year)',
    points: ['Provided technical support and maintained IT infrastructure to ensure smooth operations', 'Collaborated with IT teams to escalate and resolve complex technical issues efficiently', 'Implemented monitoring tools and procedures to identify potential issues proactively and mitigate risks', 'Ensured system stability and reliability through continuous infrastructure maintenance', 'Facilitated communication between IT teams and end-users to ensure timely issue resolution'],
  },

  {
    title: 'Sr Multimedia Intern',
    companyName: 'University of Windsory',
    companyImage: image2,
    date: 'May 2021 - Apr 2022 (1 year)',
    points: ['Developed learning resources, including videos, graphics, websites, and animations', 'Designed visual learning elements for both student and faculty', 'Collaborated with departments and schools on multimedia projects', 'Enhanced the universitys multimedia presence through diverse contents', 'Supported faculty and students with custom course materials'],
  },
];
