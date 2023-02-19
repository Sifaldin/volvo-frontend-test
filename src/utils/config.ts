export const carouselConfig = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        dots: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};
