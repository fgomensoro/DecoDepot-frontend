import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./Slider.module.css";
import Item from "../Item/Item";

function Slider({ products }) {
  return (
    <div>
      <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation>
        {products.map((product) => {
          return (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
