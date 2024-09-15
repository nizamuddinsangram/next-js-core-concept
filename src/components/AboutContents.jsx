import Link from "next/link";

const AboutContents = () => {
  return (
    <div className="flex mx-10 ">
      <Link className="mx-10" href="about/history">
        History
      </Link>
      <Link href="about/mission">mission</Link>
    </div>
  );
};

export default AboutContents;
