import { ILinkWithIcon } from '@/types';
import { faGithub, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { StaticImageData } from 'next/image';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

export interface IProject {
  name: string;
  description: string;
  images: StaticImageData[];
  links: ILinkWithIcon[];
}

export const projectsData: IProject[] = [
  {
    name: 'Multiplayer Video Game',
    description: 'This custom Capture the Flag game offers an exciting blend of strategy, teamwork, and problem-solving. With challenging obstacles and puzzles, it delivers a thrilling experience for all players.',
    images: [image1, image2, image3],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/carnevap/flag-fight-game',
      },
      {
        icon: faYoutube,
        url: 'https://youtu.be/Wjym5V8B9-c',
      },
    ],
  },
  {
    name: 'AI Powered Web Scraper',
    description: 'This project was created to enhance Stack Overflow answers by utilizing Large Language Model API's, such as GPT. It involves creating a python program to extract programming related questions and answers, generating improved responses using the LLM API, and combining them with the original question / answer to produce more accurate, descriptive, and straightforward responces.',
    images: [image4, image5, image6],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/carnevap/llm-api-web-scraper',
      },
      {
        icon: faGoogle,
        url: 'https://drive.google.com/drive/folders/1N5ytE9o7ZTMPhWL9uIgdbpxJzXcTP1Hj?usp=sharing',
      },
    ],
  },
];
