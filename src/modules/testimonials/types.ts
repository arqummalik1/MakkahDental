export type Testimonial = {
  name: string;
  title: string;
  company: string;
  image: {
    src: string;
    alt: string;
  };
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};
