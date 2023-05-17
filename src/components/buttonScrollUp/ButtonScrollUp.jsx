import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPosition';
import styles from './ButtonScrollUp.module.css';
import hidden from '../../styles/vissually-hidden.module.css';

export const ScrollToTopButton = () => {
  const { scrollY } = useWindowScrollPositions();

  const buttonClasses = `${styles.scrollToTopBtn} ${
    scrollY >= 100 ? styles.showBtn : hidden.visuallyHidden
  }`;

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button className={buttonClasses} type="button" onClick={handlerScrollUp}>
      <IoIosArrowUp className={styles.arrowUpIcon} />
    </button>
  );
};
