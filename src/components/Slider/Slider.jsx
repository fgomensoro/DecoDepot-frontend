import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./Slider.module.css";
import Item from "../Item/Item";

function Slider({ products, title }) {
  return (
    <div className="pt-5 container">
      <h2 className={styles.sliderTitle}>{title}</h2>
      <div className={`${styles.sliderContainer}`}>
        <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={2.5} navigation>
          {products.map((product) => {
            return (
              <SwiperSlide key={product._id}>
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
