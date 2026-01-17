"use server";

import { baseUrl } from "@/libs/api";
import { IMovie } from "@/types/movie.type";
import PrimaryMovieCard from "../movie/PrimaryMovieCard";

const TopMovies = async () => {
  const res = await fetch(`${baseUrl}/titles?sortBy=SORT_BY_POPULARITY`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  const data = (await res.json()) as { titles: IMovie[] };
  return (
    <section className="container_main mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Top Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.titles.map((movie) => (
          <PrimaryMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopMovies;
