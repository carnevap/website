import { ILinkWithIcon } from '@/types';
import { faGithub, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { StaticImageData } from 'next/image';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

export interface IProject {
  name: string;
  description: string;
  images: StaticImageData[];
  links: ILinkWithIcon[];
}

export const projectsData: IProject[] = [
  {
    name: 'Multipleyer Video Game',
    description: 'This custom Capture the Flag game offers an exciting blend of strategy, teamwork, and problem-solving. With challenging obstacles and puzzles, it delivers a thrilling experience for all players.',
    images: [image1, image2, image3],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/carnevap/flag-fight-game',
      },
      {
        icon: faGoogle,
        url: 'https://youtu.be/Wjym5V8B9-c',
      },
    ],
  },
  {
    name: 'AI Powered Web Scrapper',
    description: 'This project was created to enhance Stack Overflow answers by utilizing Large Language Models like ChatGPT. It involves creating a program to extract programming questions and answers, generating improved responses using a LLM API, and combining them with the original to produce more accurate, descriptive, and straightforward answers.',
    images: [image1, image2, image3],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/carnevap/llm-api-web-scraper',
      },
      {
        icon: faYoutube,
        url: 'https://youtube.com',
      },
    ],
  },
  {
    name: 'Tiny Language Compiler',
    description: 'I love making AI stuff!',
    images: [image1, image2, image3],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/',
      },
    ],
  },
];
