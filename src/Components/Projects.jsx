import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Styles/Projects.module.scss';
import ModalC from '../Components/Modal.jsx';
import cleverstudio1 from '../Assets/cleverstudio1.png';
import cleverstudio2 from '../Assets/cleverstudio2.png';
import dropngo1 from '../Assets/dropngo1.png';
import vidzy from '../Assets/vidzy.png';
import skycloud from '../Assets/skycloud.png';
import superbattle from '../Assets/superbattle.png';

const Projects = () => {
	const [showModal, setshowModal] =
		useState(false);

	const [ProjectsData, setProjectsData] = useState(
		[
			{
				id: 1,
				title: 'DROP-N-GO - File sharing App',
				description:
					'Drop-N-Go is a web based file sharing website that enable users to share files and methods to protect them using passcode.',
				techStack: ['React', 'Spring Boot', 'SQL'],
				images: [
					{
						id: 1,
						url: dropngo1,
						alt: 'Drop-N-Go',
					},
				],
				url: 'https://drop-and-go-frontend.vercel.app/',
			},
			{
				id: 2,
				title: 'CleverStudio - Media Agency',
				description:
					'Cleverstudio is the media agency that helps small businesses or Individuals to get digital resources and assets that they require in this digital era.',
				techStack: ['HTML', 'CSS', 'Vanilla JS'],
				images: [
					{
						id: 1,
						url: cleverstudio1,
						alt: 'CleverStudio',
					},
					{
						id: 2,
						url: cleverstudio2,
						alt: 'CleverStudio',
					},
				],
				url: 'https://www.cleverstudio.in/',
			},
			{
				id: 3,
				title: 'Vidzy - Fast Video Saver',
				description:
					'VIDZY is an online video downloading website which allows users to download videos from YouTube & Facebook. Supports high quality downloads and can be saved locally',
				techStack: ['HTML', 'CSS', 'Vanilla JS'],
				images: [
					{
						id: 1,
						url: vidzy,
						alt: 'vidzy',
					},
				],
				url: 'https://adidecodes.github.io/Vidzy/',
			},
			{
				id: 4,
				title: 'SuperBattle - Esports Platform',
				description:
					'SuperBattle is an Esports competitive platform that has multiple games available to play and compete with other players. Playing or participating also ensures that with this gaming skill you earn more as you play more!',
				techStack: ['HTML', 'CSS', 'Vanilla JS'],
				images: [
					{
						id: 1,
						url: superbattle,
						alt: 'SuperBattle',
					},
				],
				url: 'https://www.superbattle.in/',
			},
			{
				id: 5,
				title: 'Skycloud - Weather Forecast',
				description: `Skycloud is a website that serves local weather information right when and where you want it. With Skycloud, you can see current conditions, forecasted temperatures of any city in the world. You'll be able to check out your local weather, or find out what's the weather!`,
				techStack: [
					'HTML',
					'CSS',
					'Javascript',
					'Bootstrap',
				],
				images: [
					{
						id: 1,
						url: skycloud,
						alt: 'Skycloud',
					},
				],
				url: 'https://adidecodes.github.io/Skycloud/',
			},
		]
	);

	const [propData, setPropData] = useState({
		id: 5,
		title: 'Skycloud - Weather Forecast',
		description: `Skycloud is a website that serves local weather information right when and where you want it. With Skycloud, you can see current conditions, forecasted temperatures of any city in the world. You'll be able to check out your local weather, or find out what's the weather!`,
		techStack: [
			'HTML',
			'CSS',
			'Javascript',
			'Bootstrap',
		],
		images: [
			{
				id: 1,
				url: 'https://aditya.cleverstudio.in/assets/skycloud-98bc54b1.png',
				alt: 'Drop-N-Go',
			},
			{
				id: 2,
				url: 'https://aditya.cleverstudio.in/assets/skycloud-98bc54b1.png',
				alt: 'Drop-N-Go',
			},
		],
		url: 'https://drop-and-go-frontend.vercel.app/',
	});

	const ProjClicked = (id) => {
		setPropData(ProjectsData[id - 1]);
		setshowModal(true);
	};

	// useEffect(() => {
	// 	console.log(propData);
	// 	if (propData.id) {
	// 		setshowModal(true);
	// 	}
	// }, [propData]);

	return (
		<>
			<div
				className={styles.main}
				id='projects'
			>
				<p
					data-aos='fade-up'
					data-aos-delay='50'
				>
					Projects
				</p>
				<p
					data-aos='fade-up'
					data-aos-delay='50'
				>
					Have a look over my projects
				</p>
				<div className={styles.projectContainer}>
					{ProjectsData.map((data) => {
						return (
							<div
								key={data.id}
								onClick={() => {
									ProjClicked(data.id);
								}}
								className={styles.projectItem}
								data-aos='zoom-in'
								data-aos-delay='50'
							>
								<img
									src={data.images[0].url}
									alt={data.images[0].alt}
								/>
								<div className={styles.hoverText}>
									{data.title}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<ModalC
				isVisible={showModal}
				onClose={() => setshowModal(false)}
				data={propData}
			/>
		</>
	);
};

export default Projects;
