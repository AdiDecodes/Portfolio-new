import React from 'react';
import styles from '../Styles/AboutMe.module.scss';
import {
	BiLogoReact,
	BiLogoSass,
	BiLogoMongodb,
	BiLogoGit,
	BiLogoWordpress,
} from 'react-icons/bi';

import {
	SiExpress,
	SiPostman,
	SiFirebase,
} from 'react-icons/si';
import resume from '../Assets/Resume.pdf';

const About = () => {
	const skills = [
		{
			id: 1,
			name: 'React',
			icon: <BiLogoReact />,
		},

		{
			id: 2,
			name: 'Sass',
			icon: <BiLogoSass />,
		},

		{
			id: 3,
			name: 'Express',
			icon: <SiExpress />,
		},

		{
			id: 4,
			name: 'MongoDB',
			icon: <BiLogoMongodb />,
		},

		{
			id: 5,
			name: 'Firebase',
			icon: <SiFirebase />,
		},

		{
			id: 6,
			name: 'Postman',
			icon: <SiPostman />,
		},

		{
			id: 7,
			name: 'Git',
			icon: <BiLogoGit />,
		},

		{
			id: 8,
			name: 'Wordpress',
			icon: <BiLogoWordpress />,
		},
	];

	const MyData = [
		{
			title: 'Name',
			data: 'Aditya Singh',
			id: 1,
			delay: '50',
		},
		{
			id: 2,
			title: 'Email',
			data: 'contact@adidecodes.me',
			delay: '100',
		},
		{
			id: 3,
			title: 'Date Of Birth',
			data: '26th December, 2003',
			delay: '150',
		},
		{
			id: 4,
			title: 'From',
			data: 'Mumbai, India',
			delay: '200',
		},
	];
	return (
		<div
			className={styles.main}
			id='about'
		>
			<p
				data-aos='fade-up'
				data-aos-delay='50'
			>
				About Me
			</p>
			<p
				data-aos='fade-up'
				data-aos-delay='50'
			>
				Know Me More
			</p>

			<div className={styles.aboutMe}>
				<div className={styles.left}>
					<h3
						data-aos='fade-up'
						data-aos-delay='50'
					>
						Hi! I'm <strong>Aditya Singh</strong>
					</h3>
					<p
						data-aos='fade-up'
						data-aos-delay='50'
					>
						A learning Data Scientist having some skills
						in the particular field. Along with that, I
						have interest in web development with a
						passion for creating visually stunning and
						intuitive websites. You can find me
						tinkering with new frameworks and tools, or
						collaborating with fellow developers on open
						source projects . I am excited to bring my
						skills and experience to new challenges and
						am always looking for opportunities to
						collaborate and create amazing websites.
					</p>
				</div>
				<div className={styles.InfoWrapper}>
					{MyData.map((data) => {
						return (
							<div
								data-aos-delay={data.delay}
								data-aos='fade-up'
								key={data.id}
								className={styles.InfoChunk}
							>
								<p>{data.title}</p>
								<p>{data.data}</p>
							</div>
						);
					})}
				</div>
				<div
					className={styles.downloadCV}
					data-aos='fade-up'
					data-aos-delay='50'
				>
					<a
						href={resume}
						target='_blank'
					>
						Download CV
					</a>
				</div>
			</div>

			<div
				className={styles.skillSets}
				id='skills'
			>
				<p
					data-aos='fade-up'
					data-aos-delay='50'
				>
					Skills
				</p>
				<p
					data-aos='fade-up'
					data-aos-delay='50'
				>
					Tech Stack I Use
				</p>

				<div className={styles.skillWrapper}>
					{skills.map((skill) => {
						return (
							<div
								data-aos='fade-up'
								data-aos-delay='250'
								key={skill.id}
								className={styles.skill}
							>
								{skill.icon}
								<p>{skill.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
