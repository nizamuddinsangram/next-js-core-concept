const page = ({ params }) => {
  console.log(params.slug);
  const { slug, title, description } = blogs.find(
    (blog) => blog.slug === params.slug
  );
  return (
    <div>
      <h5>{title}</h5>
    </div>
  );
};
const blogs = [
  {
    slug: "how-to-learn-javascript",
    title: "How to Learn JavaScript",
    description:
      "A comprehensive guide to learning JavaScript for beginners, covering essential concepts and tips.",
  },
  {
    slug: "react-vs-vue",
    title: "React vs Vue: Which Framework to Choose?",
    description:
      "An in-depth comparison of React and Vue, exploring their features, pros, and cons to help you decide which framework is best for your project.",
  },
  {
    slug: "nodejs-best-practices",
    title: "Node.js Best Practices",
    description:
      "A collection of best practices for writing clean, efficient, and maintainable code in Node.js applications.",
  },
  {
    slug: "fullstack-development-roadmap",
    title: "Full-Stack Development Roadmap",
    description:
      "A step-by-step roadmap for becoming a full-stack developer, focusing on the necessary skills and technologies to master.",
  },
  {
    slug: "tailwind-css-guide",
    title: "Tailwind CSS: A Beginner's Guide",
    description:
      "An introduction to Tailwind CSS, explaining its utility-first approach to styling and how to get started with it.",
  },
];
export default page;
