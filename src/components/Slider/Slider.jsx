import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
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
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3.2}
          navigation
          pagination={{ clickable: true }}
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
