import React, {
	useEffect,
	useState,
} from 'react';
import { IoMdClose } from 'react-icons/io';

import styles from './Styles/Modal.module.scss';
import { BsArrowUpRightSquare } from 'react-icons/bs';

import {
	MdNavigateNext,
	MdNavigateBefore,
} from 'react-icons/md';

import {
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	EffectFade,
} from 'swiper/modules';

import {
	Swiper,
	SwiperSlide,
	useSwiper,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const ModalC = ({ isVisible, data, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = isVisible
			? 'hidden'
			: 'auto';
	}, [isVisible]);

	const OpenUrl = (url) => {
		window.open(url, '_blank');
	};

	const childDivs = (arrayList) =>
		arrayList.map((text, index) => (
			<div
				key={index}
				className={styles.techStack}
			>
				{text}
			</div>
		));

	return (
		<div
			style={{
				display: isVisible ? 'flex' : 'none',
			}}
			className={styles.Wrapper}
		>
			<div
				className={
					isVisible
						? `${styles.main} ${styles.fadeIn}`
						: `${styles.main} ${styles.fadeOut}`
				}
			>
				<div className={styles.closeContainer}>
					<IoMdClose onClick={() => onClose()} />
				</div>
				<div className={styles.modal}>
					<div className={styles.left}>
						{data.images.length > 1 ? (
							<Swiper
								modules={[
									Autoplay,
									EffectFade,
									Pagination,
								]}
								spaceBetween={0}
								slidesPerView={1}
								pagination={{ clickable: true }}
								autoplay={{
									delay: 1500,
									pauseOnMouseEnter: true,
									disableOnInteraction: false,
								}}
								effect='fade'
								loop
								className={styles.Swiper}
							>
								{data.images.map((data1) => {
									return (
										<SwiperSlide key={data1.id}>
											<img
												src={data1.url}
												alt=''
											/>
										</SwiperSlide>
									);
								})}
							</Swiper>
						) : (
							<img src={data.images[0].url} />
						)}
					</div>
					<div className={styles.right}>
						<p>{data.title}</p>
						<p>{data.description}</p>
						<div className={styles.techContainer}>
							{childDivs(data.techStack)}
						</div>
						<div className={styles.Url}>
							<p>URL : </p>
							<p
								onClick={() => {
									OpenUrl(data.url);
								}}
							>
								{data.url}
							</p>
							<BsArrowUpRightSquare />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalC;
