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
  description: `Hi, I'm Patrick Carnevale a computer science graduate. Don't hesitate to reach out through LinkedIn if you'd like to connect.`,
};
