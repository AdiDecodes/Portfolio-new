import React, { useState, useRef } from 'react';
import styles from './Styles/Contact.module.scss';
import { IoMailOutline } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import {
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa6';
import { SiBuymeacoffee } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import axios from 'axios';
import {
	ToastContainer,
	toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from 'react-spinners/PuffLoader';

const Contact = () => {
	const serviceId = import.meta.env.VITE_serviceId;
	const templateId = import.meta.env
		.VITE_templateId;
	const userId = import.meta.env.VITE_userId;
	const toastRef = useRef(null);

	const toastProps = {
		position: 'top-right',
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		autoClose: 5000,
		draggable: true,
		progress: undefined,
		theme: 'light',
	};

	const updateToast = (message, success) => {
		if (success == true) {
			toast.update(toastRef.current, {
				hideProgressBar: false,
				type: toast.TYPE.SUCCESS,
				render: message,
				autoClose: 5000,
				closeButton: null,
			});
		} else {
			toast.update(toastRef.current, {
				hideProgressBar: false,
				type: toast.TYPE.ERROR,
				render: message,
				autoClose: 5000,
				closeButton: null,
			});
		}
	};

	const errorMsg = (msg) => {
		toast.error(msg);
	};

	const showToast = (message) => {
		toastRef.current = toast(
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<PuffLoader
					size={40}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
				<span style={{ margin: '0 0 0 15px' }}>
					{message}
				</span>
			</div>,
			toastProps
		);
	};

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

	const [isEmail, setMail] = useState(false);

	const resetInputs = () => {
		setData({ name: '', email: '', message: '' });
	};
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = data;

	const onInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailRegex.test(email)) {
			setMail(true);
			return true;
		} else {
			setMail(false);
			return false;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		var data = {
			service_id: serviceId,
			template_id: templateId,
			user_id: userId,
			template_params: {
				name: name,
				email: email,
				message: message,
			},
		};
		if (
			validateEmail(email) &&
			name.length >= 1 &&
			message.length >= 1
		) {
			showToast('Sending the message..');
			axios
				.post(
					'https://api.emailjs.com/api/v1.0/email/send',
					data
				)
				.then((response) => {
					if (response.status == 200) {
						updateToast('Message Sent', true);
						resetInputs();
					} else {
						updateToast('Failed to send!', false);
						resetInputs();
					}
				})
				.catch(function (error) {
					if (error.request) {
						updateToast(
							'Error occured! Try again',
							false
						);
						resetInputs();
					}
				});
		} else {
			errorMsg('Invalid Inputs!');
		}
	};
	return (
		<div
			className={styles.main}
			id='contact'
		>
			<p
				data-aos='fade-up'
				data-aos-delay='50'
			>
				Got Idea? We've got the skills. Let's Team Up
			</p>
			<p
				data-aos='fade-up'
				data-aos-delay='50'
			>
				Tell us more about yourself and about the
				idea.
			</p>
			<div className={styles.Wrapper}>
				<div className={styles.left}>
					<p
						data-aos='fade-up'
						data-aos-delay='50'
					>
						Let's get in touch
					</p>
					<p
						data-aos='fade-up'
						data-aos-delay='50'
					>
						I enjoy discussing new projects and design
						challenges. Please share as much info, as
						possible so we can get the most out of our
						first catch-up.
					</p>
					<div
						className={styles.mail}
						data-aos='fade-up'
						data-aos-delay='50'
					>
						<IoMailOutline />
						<p>contact@adidecodes.me</p>
					</div>

					<div
						className={styles.cardInfo}
						data-aos='fade-up'
						data-aos-delay='50'
					>
						<div>
							<p>ADITYA SINGH</p>
							<p>Yet another MERN Stack developer!</p>
						</div>

						<div className={styles.socialMedia}>
							<FaInstagram
								data-tooltip-id='instagram'
								data-tooltip-content='Follow on Instagram'
								data-tooltip-place='top'
								onClick={() => {
									openUrl(url[0].url);
								}}
							/>
							<FaLinkedin
								data-tooltip-id='linkedin'
								data-tooltip-content='Connect on LinkedIn'
								data-tooltip-place='top'
								onClick={() => {
									openUrl(url[1].url);
								}}
							/>
							<FaGithub
								data-tooltip-id='github'
								data-tooltip-content='Follow on Github'
								data-tooltip-place='top'
								onClick={() => {
									openUrl(url[2].url);
								}}
							/>
							<SiBuymeacoffee
								data-tooltip-id='coffee'
								data-tooltip-content='Chai peelado!! 😊'
								data-tooltip-place='top'
								onClick={() => {
									openUrl(url[3].url);
								}}
							/>

							<Tooltip
								style={{
									background: 'white',
									color: 'black',
								}}
								id='instagram'
							/>
							<Tooltip
								style={{
									background: 'white',
									color: 'black',
								}}
								id='github'
							/>
							<Tooltip
								style={{
									background: 'white',
									color: 'black',
								}}
								id='linkedin'
							/>
							<Tooltip
								style={{
									background: 'white',
									color: 'black',
								}}
								id='coffee'
							/>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<h3
						data-aos='fade-up'
						data-aos-delay='50'
					>
						Estimate Your Project?
					</h3>
					<label
						htmlFor='name'
						data-aos='fade-up'
						data-aos-delay='50'
					>
						What is Your Name:
					</label>
					<input
						id='name'
						type='text'
						data-aos='fade-up'
						data-aos-delay='50'
						onChange={onInputChange}
						name='name'
						value={name}
						autoComplete='off'
					/>
					<label
						htmlFor='name'
						data-aos='fade-up'
						data-aos-delay='50'
					>
						Your Email Address:
					</label>
					<input
						data-aos='fade-up'
						data-aos-delay='50'
						type='email'
						onChange={onInputChange}
						name='email'
						value={email}
						autoComplete='off'
					/>
					<label
						htmlFor='name'
						data-aos='fade-up'
						data-aos-delay='50'
					>
						How can I Help you?
					</label>
					<textarea
						data-aos='fade-up'
						data-aos-delay='50'
						className={styles.textArea}
						id=''
						cols='50'
						rows='5'
						onChange={onInputChange}
						name='message'
						value={message}
						autoComplete='off'
					></textarea>
					<div
						className={styles.submit}
						data-aos='fade-up'
						data-aos-delay='50'
						data-aos-offset='120'
						onClick={handleSubmit}
					>
						<p>SEND</p>
						<FaArrowRightLong />
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Contact;
