import { ILinkWithIcon } from '@/types';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export interface IAbout {
  name: string;
  links: ILinkWithIcon[];
  description: string;
}

export const aboutData: IAbout = {
  name: 'Patrick Carnevale',
  links: [
    { icon: faGithub, url: 'https://github.com/carnevap' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/patrick-carnevale/' },
    { icon: faYoutube, url: 'https://www.youtube.com/novipit' },
  ],
  description: `Hey! I’m Patrick Carnevale, a bilingual (English/French) Computer Science graduate with experience in IT support, multimedia, and software development. I’m skilled in Python, Java, C++, and more, and have worked on projects in AI, 3D modeling, and game design. I thrive in team environments, excel at problem-solving, and adapt quickly to new challenges!`,
};
