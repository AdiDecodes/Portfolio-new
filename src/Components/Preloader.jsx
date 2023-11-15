import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Styles/Preloader.module.scss';

const Preloader = ({ data }) => {
	const [word, setWord] = useState(
		'Loading Portfolio'
	);
	const [wordList, setWordList] = useState([
		'Building Up Resources',
		'Almost Done',
	]);

	useEffect(() => {
		let i = 0;
		setInterval(() => {
			if (i <= wordList.length) {
				setWord(wordList[i++]);
			}
		}, 2000);
	}, []);

	return (
		<div
			className={
				data
					? `${styles.main}`
					: `${styles.main} ${styles.hide}`
			}
		>
			<h3>{word}</h3>
			<div className={styles.loader}></div>
		</div>
	);
};

export default Preloader;
