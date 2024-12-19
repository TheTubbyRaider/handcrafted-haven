// pages/product/[id].js
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Product Details: {id}</h1>
      <p>Details about product {id} will go here.</p>
    </div>
  );
}
