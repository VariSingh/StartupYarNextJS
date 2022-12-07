import Link from "next/link";
import { useRouter } from "next/router";

interface Product {
  id: number;
  name: string;
  slug: string;
}

const ProductList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { companyId } = router.query;
  return (
    <>
      <div>This is product list page of {companyId}</div>
      <ul>
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/${companyId}/${product.slug}`}>
              <li>{product.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { companyId: "got-the-idea" } }],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const companyId = params.companyId;
  return {
    props: {
      products: [
        {
          id: "0",
          name: "Point",
          slug: "point",
        },
        {
          id: "1",
          name: "Evernote",
          slug: "evernote",
        },
        {
          id: "2",
          name: "My idealist",
          slug: "my-idea-list",
        },
        {
          id: "3",
          name: "Box Notes",
          slug: "box-notes",
        },
      ],
    },
  };
};
export default ProductList;
