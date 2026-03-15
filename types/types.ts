export type TESTIMONIAL_PROPS = {
  text: string;
  image: string;
  name: string;
  role: string;
};
export type BLOG_CARDS_PROPS = {
  title: string;
  discription: string;
  datePosted: string;
};

export type WORK_COMPANIES_PROPS = {
  companyName: string;
  companyLogo: string;
  companyUrl: string;
  role: string;
  duration: string;
  description: string;
};

export type LinksProps = {
  link: string;
  Icon: React.ReactNode;
};
