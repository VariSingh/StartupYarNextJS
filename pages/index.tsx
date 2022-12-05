import Link from "next/link";

interface Categories {
  id: number;
  name: string;
  slug: string;
}
const Home: React.FC<{
  categories: Categories[];
}> = ({ categories }) => {
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
export const getStaticProps = async () => {
  return {
    props: {
      categories: [
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
      ],
    },
  };
};
export default Home;
