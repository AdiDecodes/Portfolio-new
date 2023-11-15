import React, {
	useState,
	useEffect,
} from 'react';
import styles from './Styles/Header.module.scss';
import { IoMailOutline } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import {
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa6';
import { SiBuymeacoffee } from 'react-icons/si';

import { Tooltip } from 'react-tooltip';
import { Spin as Hamburger } from 'hamburger-react';

import 'animate.css';

const Header = () => {
	const menuClicked = () => {
		setShowMenu(!showMenu);
		if (showMenu) {
			document.body.style.overflow = 'auto';
			setMenuProps((data) => ({
				...data,
				color: 'white',
			}));
		} else {
			document.body.style.overflow = 'hidden';
			setMenuProps((data) => ({
				...data,
				color: 'white',
			}));
		}
	};
	const [showMenu, setShowMenu] = useState(false);
	const [MenuProps, setMenuProps] = useState({
		size: 20,
		color: 'white',
	});

	const [url, setUrl] = useState([
		{
			id: 1,
			url: 'https://www.instagram.com/_.adityyaa/',
			service: 'instagram',
		},
		{
			id: 2,
			url: 'https://www.linkedin.com/in/singhaditya18/',
			service: 'linkedin',
		},
		{
			id: 3,
			url: 'https://www.github.com/adidecodes/',
			service: 'github',
		},
		{
			id: 4,
			url: 'https://www.buymeacoffee.com/adidecodes',
			service: 'coffee',
		},
	]);

	const openUrl = (url) => {
		window.open(url, '_blank');
	};

	const scroll = (elementId) => {
		menuClicked();
		const element =
			document.getElementById(elementId);
		const headerHeight = window.innerHeight * 0.1;
		const topOffset =
			element.offsetTop - headerHeight;

		window.scrollTo({
			top: topOffset,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div
				className={`${styles.main} animate__animated animate__fadeIn`}
			>
				<h2>ADITYA SINGH</h2>
				<div className={styles.infoWrapper}>
					<div
						className={styles.mailInfo}
						onClick={() => {
							openUrl('mailto:contact@adidecodes.me');
						}}
					>
						<IoMailOutline />
						<p>aditya@mail.com</p>
					</div>
					<Hamburger
						size={MenuProps.size}
						color={MenuProps.color}
						toggled={showMenu}
						toggle={() => {
							menuClicked();
						}}
					/>
				</div>
			</div>
			<div
				className={
					showMenu
						? `${styles.menuScreen}`
						: `${styles.menuScreen} ${styles.menuScreenClosed}`
				}
			>
				<div>
					<Hamburger
						size={MenuProps.size}
						color={MenuProps.color}
						toggled={showMenu}
						toggle={() => {
							menuClicked();
						}}
					/>
				</div>
				<p
					onClick={() => {
						scroll('home');
					}}
				>
					Home
				</p>
				<p
					onClick={() => {
						scroll('about');
					}}
				>
					About Me
				</p>
				<p
					onClick={() => {
						scroll('skills');
					}}
				>
					Skills
				</p>
				<p
					onClick={() => {
						scroll('projects');
					}}
				>
					Projects
				</p>
				<p
					onClick={() => {
						scroll('contact');
					}}
				>
					Contact Me
				</p>
				<div className={styles.socialMedia}>
					<FaInstagram
						data-tooltip-id='instagram'
						data-tooltip-content='Follow on Instagram'
						data-tooltip-place='bottom'
						onClick={() => {
							openUrl(url[0].url);
						}}
					/>
					<FaLinkedin
						data-tooltip-id='linkedin'
						data-tooltip-content='Connect on LinkedIn'
						data-tooltip-place='bottom'
						onClick={() => {
							openUrl(url[1].url);
						}}
					/>
					<FaGithub
						data-tooltip-id='github'
						data-tooltip-content='Follow on Github'
						data-tooltip-place='bottom'
						onClick={() => {
							openUrl(url[2].url);
						}}
					/>
					<SiBuymeacoffee
						data-tooltip-id='coffee'
						data-tooltip-content='Chai peelado!! 😊'
						data-tooltip-place='bottom'
						onClick={() => {
							openUrl(url[3].url);
						}}
					/>

					<Tooltip
						style={{
							background: 'black',
							color: 'white',
						}}
						id='instagram'
					/>
					<Tooltip
						style={{
							background: 'black',
							color: 'white',
						}}
						id='github'
					/>
					<Tooltip
						style={{
							background: 'black',
							color: 'white',
						}}
						id='linkedin'
					/>
					<Tooltip
						style={{
							background: 'black',
							color: 'white',
						}}
						id='coffee'
					/>
				</div>
			</div>
		</>
	);
};

export default Header;
