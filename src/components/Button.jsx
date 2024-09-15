"use client";

import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <button onClick={handleLogin} className="">
      {children}
    </button>
  );
};

export default Button;
