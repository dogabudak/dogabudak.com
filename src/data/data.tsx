import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Doğa Budak',
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Doğa Budak.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Münich based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">ParcelLab</strong> helping build a modern, post-purchase and customer experience tool.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing Apex legends,
        coding cool shit, or exploring our beautiful{' '}
        <strong className="text-stone-100">World</strong>.
      </p>
    </>
  ),
  actions: [
    {
      // TODO Put your resume
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  aboutItems: [
    {label: 'Location', text: 'Munich, Germany', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Computer games, Football, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Yıldız Technical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Parcellab', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Turkish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'German',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 7,
      },
      {
        name: 'Golang',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 5,
      },
      {
        name: 'NativeScript',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nuremberg',
    url: 'https://www.instagram.com/p/CeLb_0FKChLJmH0sJ9YyMOs7BmR8IP-g7PRXFw0/',
    image: porfolioImage3,
  },
  {
    title: 'Cuba',
    url: 'https://www.instagram.com/p/B4JDxdVKjaiggpDEZNMAD0lJM9qNJdzVTRt3P40/',
    image: porfolioImage4,
  },
  {
    title: 'Seychelles',
    url: 'https://www.instagram.com/p/Cg7yAHDq2j1trlYKMYOwFejHoIgkxN_qKATwIM0/',
    image: porfolioImage5,
  },
  {
    title: 'Maspolamas',
    url: 'https://www.instagram.com/p/BzEKbRAIy4xz4UBv4JEnmkbPSeZTikyEKe6FHo0/',
    image: porfolioImage6,
  },
  {
    title: 'Oktoberfest',
    url: 'https://www.instagram.com/p/BqNtIV7FeWuPZd4BFAxMprdsr6GkCLF8OGNphE0/',
    image: porfolioImage7,
  },
];

/**
 * Resume section --
 */
// TODO Content is tirt
export const education: TimelineItem[] = [
  {
    date: 'Mar. 2017 - Jan.2018',
    location: 'Clausthal Technical University, Niedersachsen Germany',
    title: 'M.Sc. Informatik',
    content: <p>Intensive german course and Masters in computer science.</p>,
  },
  {
    date: 'Sep. 2009-Jun.2014 ',
    location: 'Yıldız Technical University, Istanbul Turkey',
    title: 'BSc. Electronics and Comm. Engineering',
    content: <p>Electronics and communication engineering. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'ParcelLab',
    title: 'Backend Engineer',
    content: (
      <p>
        Backend engineer for a customer OXM product, developed with Amazon SQS, nodejs and mongoDB.
      </p>
    ),
  },
  {
    date: 'Jan. 2022 - July 2022',
    location: 'Timify',
    title: 'Backend Engineer',
    content: (
      <p>
        Backend engineer for an online scheduling and resource management software for small, medium businesses, developed with
        nodejs and graphql and aws lambda.
      </p>
    ),
  },
  {
    date: 'July. 2021 - Dec 2021',
    location: 'Kirinus Health',
    title: 'Fullstack Developer',
    content: (
      <p>
        Fullstack developer for an online therapy platform, developed with
        mongodb, golang and flutter.
      </p>
    ),
  },
  {
    date: 'Aug. 2018 - July 2021',
    location: 'Check24',
    title: 'Fullstack Developer',
    content: (
      <p>
        Fullstack developer for Germany's biggest comparison portal, developed with
        mongodb and React and typescript.
      </p>
    ),
  },
  {
    date: 'Jan. 2018 - Aug 2018',
    location: 'ProSieben Sat.1',
    title: 'Backend Developer',
    content: (
      <p>
        Backend engineer for ProSieben online services , developed with
        mongodb and nodejs and aws lambda.
      </p>
    ),
  },
  {
    date: 'Aug. 2014 - Mar. 2017',
    location: 'Matriks Bilgi Dagitim Hizmetleri',
    title: 'Backend Developer',
    content: (
      <p>
        Backend engineer for Stock market data provider, developed with
        cassandra and nodejs and rustlang.
      </p>
    ),
  }
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me if you have any further questions!',
  items: [
    {
      type: ContactType.Email,
      text: 'dogabudak@gmail.com',
      href: 'mailto:dogabudak@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Munich, Germany',
      href: 'https://www.google.ca/maps/place/Sachranger+Str.+14,+81549+M%C3%BCnchen/@48.1046092,11.5904181,17.31z',
    },
    {
      type: ContactType.Instagram,
      text: '@budakdoga',
      href: 'https://www.instagram.com/budakdoga/',
    },
    {
      type: ContactType.Github,
      text: 'dogabudak',
      href: 'https://github.com/dogabudak',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dogabudak'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/doga-budak-40635b95'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/budakdoga/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/dogabudak'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/doga.budak.3"'},
];
