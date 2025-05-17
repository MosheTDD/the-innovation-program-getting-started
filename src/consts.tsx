import {
  FaPython,
  FaCode,
  FaGitAlt,
  FaDiscord,
  FaRobot,
  FaGithub,
} from 'react-icons/fa';

export const INSTALLATION_STEPS = [
  {
    label: 'Discord',
    description: `Discord is where our community chats, asks questions, and shares progress. It's the hub for support and collaboration.`,
    icon: <FaDiscord size={20} />,
    color: 'indigo',
    buttonText: 'Install Discord',
    buttonLink: 'https://discord.com/download',
  },
  {
    label: 'Python 3.11',
    description: `Python is the main language we'll use in this program. It's simple to learn, powerful in practice, and used by companies like Google, NASA, and Instagram.`,
    icon: <FaPython size={20} />,
    color: 'blue',
    buttonText: 'Install Python',
    buttonLink: 'https://www.python.org/downloads/release/python-3110/',
  },
  {
    label: 'PyCharm Community',
    description: `PyCharm is a smart code editor made for Python. It highlights errors, offers autocomplete, and helps you write and debug code more efficiently.`,
    icon: <FaCode size={20} />,
    color: 'teal',
    buttonText: 'Install PyCharm',
    buttonLink: 'https://www.jetbrains.com/pycharm/download/',
  },
  {
    label: 'Git',
    description: `Git lets you track changes in your code, go back in time, and work with others. It's used in every real-world programming project.`,
    icon: <FaGitAlt size={20} />,
    color: 'orange',
    buttonText: 'Install Git',
    buttonLink: 'https://git-scm.com/downloads',
  },
  {
    label: 'GitHub',
    description: `GitHub is where we host our code, track issues, and collaborate on open-source projects. It's essential for contributing and staying up-to-date.`,
    icon: <FaGithub size={20} />,
    color: 'gray',
    buttonText: 'Visit GitHub',
    buttonLink: 'https://github.com/',
  },
  {
    label: 'OpenAI Account (ChatGPT)',
    description: `ChatGPT is your 24/7 programming assistant. You can ask it for code help, explanations, or project ideas — like a super tutor.`,
    icon: <FaRobot size={20} />,
    color: 'cyan',
    buttonText: 'Create OpenAI Account',
    buttonLink: 'https://chat.openai.com/auth/login',
  },
];
