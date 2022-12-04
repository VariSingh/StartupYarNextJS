import Link from "next/link";

const Home = () => {
  const categories = [
    {
      id: "0",
      name: "Got the idea",
      slug: "got-the-idea",
    },
    {
      id: "1",
      name: "Name my startup",
      slug: "name-my-startup",
    },
  ];
  return (
    <div className="container">
      <ul>
        {categories.map((category) => {
          return (
            <Link key={category.id} href={`/${category.slug}`}>
              <li>{category.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
