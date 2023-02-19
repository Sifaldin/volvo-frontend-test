export const carouselConfig = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
