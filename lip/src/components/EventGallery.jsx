import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const eventImages = [
  {
    id: 1,
    src: "/event-gallery/new1.jpeg",
    alt: "Annual Science Fair 2023"
  },
  {
    id: 2,
    src: "/event-gallery/new2.jpeg",
    alt: "Cultural Festival Performances"
  },
  {
    id: 3,
    src: "/event-gallery/new3.jpeg",
    alt: "Inter-College Sports Competition"
  },
  
];

export default function ImageSlider() {
  return (
    <div className="relative w-full mb-10 max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect={'fade'}
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {eventImages.map((image) => (
          <SwiperSlide key={image.id} className="relative">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-medium md:text-2xl">
                {image.alt}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}