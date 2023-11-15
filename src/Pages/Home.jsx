import React, {
	useEffect,
	useState,
} from 'react';

import Header from '../Components/Header.jsx';
import Projects from '../Components/Projects.jsx';
import About from '../Components/About.jsx';
import Preloader from '../Components/Preloader.jsx';
import Footer from '../Components/Footer.jsx';

import styles from '../Styles/Home.module.scss';
import { Typewriter } from 'react-simple-typewriter';
import Contact from '../Components/Contact.jsx';

const Home = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 6000);
	}, []);

	return (
		<>
			{loading ? (
				<Preloader data={loading} />
			) : (
				<>
					<Header />
					<div
						className={`${styles.main} animate__animated animate__fadeIn`}
						id='home'
					>
						<div className={styles.heroWrapper}>
							<div className={styles.hero}>
								<div
									className={`${styles.left} animate__animated animate__fadeIn`}
								>
									<h1>
										Hey There, I am <br />
										<span>
											<Typewriter
												loop={0}
												cursor
												cursorStyle='/'
												typeSpeed={40}
												deleteSpeed={100}
												delaySpeed={1000}
												words={[
													'Aditya Singh',
													'MERN Developer',
													'Javascript Developer',
													'Full Stack Developer',
												]}
											/>
										</span>
									</h1>
									<p> based in Mumbai, India</p>
									<div className={styles.contactDiv}>
										<div className={styles.viewWorks}>
											View My Works
										</div>
										<div className={styles.contactMe}>
											<h3>Contact Me</h3>
											<i className='fa-regular fa-sort-down'></i>
										</div>
									</div>
								</div>
								<div
									className={`${styles.right} animate__animated animate__pulse`}
								>
									<img
										src='https://aditya.cleverstudio.in/assets/img-49cb8e7f.jpeg'
										alt=''
									/>
								</div>
							</div>
							<i className='fa-solid fa-angles-down'></i>
						</div>
					</div>
					<About />
					<Projects />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
};

export default Home;
