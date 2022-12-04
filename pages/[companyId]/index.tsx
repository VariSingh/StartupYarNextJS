import Link from "next/link";
import { useRouter } from "next/router";

const ProductList = () => {
  const products = [
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
  ];

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
export default ProductList;
