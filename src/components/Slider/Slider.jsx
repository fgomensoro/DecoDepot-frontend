import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import { Navigation, Pagination,  A11y } from 'swiper';
import styles from "./Slider.module.css";
import Item from "../Item/Item";

function Slider({ products, title }) {
  return (
    <div className="pt-5 container">
      <h2 className={styles.sliderTitle}>{title}</h2>
      <div className={`${styles.sliderContainer}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3700 }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide className="mb-4" key={product._id}>
                <Item product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
