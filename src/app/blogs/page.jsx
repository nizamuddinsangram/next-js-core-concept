import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="p-4">
      {blogs.map((blog) => (
        <div className="border-2 p-12 " key={blog.slug}>
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="bg-teal-500 px-2 rounded-md py-2 mt-2 text-gray-200">
            <Link href={`/blogs/${blog.slug}`}> View Details</Link>
          </button>
        </div>
      ))}
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

export default BlogPage;
