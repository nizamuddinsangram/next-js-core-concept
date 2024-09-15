import Button from "./Button";
import Nav from "./Nav";

const Navbar = () => {
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "contacts",
      path: "/contacts",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <nav className="bg-red-300 px-6 py-4 flex justify-between items-center ">
      <h6 className="text-3xl">
        Next <span className="text-teal-500">Hero</span>
      </h6>
      <ul className=" flex justify-between items-center space-x-4">
        {links.map((link) => (
          <Nav link={link} />
        ))}
      </ul>
      <Button>Login</Button>
    </nav>
  );
};

export default Navbar;
