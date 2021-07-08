import styles from './carousel.module.scss';
const Carousel = () => (
  //   const nextSlide = () => {
  //     return {let activeSlide = document.querySelector('.slide.translate-x-0');
  //     activeSlide.classList.remove('translate-x-0');
  //     activeSlide.classList.add('-translate-x-full');

  //     let nextSlide = activeSlide.nextElementSibling;
  //     nextSlide.classList.remove('translate-x-full');
  //     nextSlide.classList.add('translate-x-0')}
  // }

  //   };
  //   const prevSlide = () => {
  //     let activeSlide = document.querySelector('.slide.translate-x-0');
  //     activeSlide.classList.remove('translate-x-0');
  //     activeSlide.classList.add('translate-x-full');

  //     let previousSlide = activeSlide.previousElementSibling;
  //     previousSlide.classList.remove('-translate-x-full');
  //     previousSlide.classList.add('translate-x-0');
  //   };
  <div className={styles.pRelative}>
    <div className={styles.hello}>Hello</div>
    <div className={styles.there}>There</div>
    <div className={styles.booya}>Booya!</div>
    <button onClick={nextSlide} className={styles.next}>
      Next
    </button>
    <button onclick={prevSlide} className={styles.prev}>
      Prev
    </button>
  </div>
);

export default Carousel;
