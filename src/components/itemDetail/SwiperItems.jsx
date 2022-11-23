import { Swiper, SwiperSlide } from "swiper/react";
import "./itemDetailStyles.css";
import styles from "./ItemDetail.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function SwiperItems({ product }) {
  return (
    product && (
      <div className={styles.container}>
        <Swiper
          className={styles.swiperContainer}
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img
              className={styles.swiperSlideImg}
              src={process.env.REACT_APP_IMAGE_PATH + product.images[0]}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img
              className={styles.swiperSlideImg}
              src={process.env.REACT_APP_IMAGE_PATH + product.images[1]}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img
              className={styles.swiperSlideImg}
              src={process.env.REACT_APP_IMAGE_PATH + product.images[2]}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
        <img src={process.env.REACT_APP_IMAGE_PATH + product.images[3]} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={process.env.REACT_APP_IMAGE_PATH + product.images[4]} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={process.env.REACT_APP_IMAGE_PATH + product.images[5]} />
      </SwiperSlide> */}
        </Swiper>
      </div>
    )
  );
}

export default SwiperItems;
