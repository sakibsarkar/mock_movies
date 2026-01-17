import { getPageMetaData } from "@/lib/meta";
import Link from "next/link";
export const metadata = getPageMetaData("Nested Product Link");
const page = async ({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) => {
  const resolvedParams = await params;
  const movieId = resolvedParams.id;
  const slug = resolvedParams.slug;
  return (
    <section className="py-6 container_main">
      <h1 className="text-2xl font-bold mb-4">Product Nested Page</h1>

      <p className="text-lg font-bold mb-2">
        Movie ID: <span className="font-normal">{movieId}</span>
      </p>

      <p className="text-lg font-bold">
        Slug ID: <span className="font-normal">{slug}</span>
      </p>
      <Link
        href={`/movies/${movieId}/${Date.now()}/review`}
        className="text-lg font-bold text-primary underline mt-4"
      >
        GO TO Nested Review Route
      </Link>
    </section>
  );
};

export default page;
