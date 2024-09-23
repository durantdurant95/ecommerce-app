import AddCartButton from "@/components/add-cart-button";
import { getProductById } from "@/db/queries";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="px-4 py-8 sm:px-6 lg:pl-80">
      <Image
        className="overflow-hidden rounded-lg border object-cover"
        alt="Product Image"
        height={400}
        width={400}
        src={product.image_url}
      />
      <div className="mt-6 px-4 sm:px-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          {product.name}
        </h1>
        <div className="mt-3">
          <p className="text-3xl text-gray-900">$ {product.price}</p>
        </div>
        <div className="mt-6">
          <p className="max-w-6xl pb-6 text-base text-gray-700">
            {product.description}
          </p>
        </div>
        <AddCartButton id={params.id} name={product.name} userId={user?.id} />
      </div>
    </div>
  );
}
