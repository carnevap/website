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
    companyName: 'CRA',
    companyImage: image1,
    date: 'Sep 2022 - Aug 2023 (1 year)',
    points: ['Provided technical support and maintained IT infrastructure to ensure smooth operations', 'Collaborated with IT teams to escalate and resolve complex technical issues efficiently', 'Implemented monitoring tools and procedures to identify potential issues proactively and mitigate risks', 'Ensured system stability and reliability through continuous infrastructure maintenance', 'Facilitated communication between IT teams and end-users to ensure timely issue resolution'],
  },

  {
    title: 'Fullstack Developer',
    companyName: 'Facebook',
    companyImage: image2,
    date: 'Dec 2022 - Apr 2023',
    points: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
  },
];
