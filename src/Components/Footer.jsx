import React from 'react';
import styles from './Styles/Footer.module.scss';
const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.attribute}>
				Made with{' '}
				<span className={styles.loader}></span> by
				Aditya
			</div>
		</div>
	);
};

export default Footer;
