"use server";
import { baseUrl } from "@/libs/api";
import { IMovie } from "@/types/movie.type";
import MoviewDetailsPage from "@/view/MoviewDetailsView";
import { Metadata } from "next";
interface IProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const resolved = await params;
  const movieId = resolved.id;

  const res = await fetch(`${baseUrl}/titles/${movieId}`);
  const data = (await res.json()) as IMovie;
  return {
    title: `${data?.primaryTitle} | Details`,
    description: data?.plot || "",
  };
}
const page = async ({ params }: IProps) => {
  return <MoviewDetailsPage params={params} />;
};

export default page;
