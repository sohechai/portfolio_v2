import img_cub3d from '../images/cub3d-screen.png';
import img_transcendance from '../images/transcendance-screen.png';
import img_python_script from '../images/python-script-screen.png';
import img_portfolio from '../images/portfolio-screen.png';

const projectsData = [
	{
	  title: 'Cub3D',
	  tag: 'C minilibX',
	  description: 'Inspired by the game Wolfenstein 3D, Cub3D is a realistic 3D labyrinth using ray-casting.',
	  websiteUrl: '',
	  githubUrl: 'https://github.com/sohechai/cub3D',
	  image: img_cub3d,
	  tags: 'Game Developer, solo project, school',
	},
	{
	  title: 'Transcendance',
	  tag: 'React NestJS TypeScript',
	  description: 'Full-stack Pong game website with an integrated text chat feature.',
	  websiteUrl: '',
	  githubUrl: 'https://github.com/hamanmax/ft_transcendence', // TODO : change to my repo
	  image: img_transcendance,
	  tags: 'Full-stack Developer, chat feature, 4 people team, school',
	},
	{
	  title: 'Python Script',
	  tag: 'Python',
	  description: 'Crafted Python scripts to boost my productivity at work.',
	  websiteUrl: '',
	  githubUrl: 'https://github.com/sohechai/IDAP', // TODO : change to my repo
	  image: img_python_script,
	  tags: 'Developer, personal solo project, personal',
	},
	{
	  title: 'Portfolio',
	  tag: 'reactJS html scss',
	  description: 'My very first Portfolio. We all start somewhere !',
	  websiteUrl: 'https://sofiahechaichi.vercel.app/',
	  githubUrl: 'https://github.com/sohechai/portfolio',
	  image: img_portfolio,
	  tags: 'Fullstack Developer, solo project, personal',
	},
];

export default projectsData;