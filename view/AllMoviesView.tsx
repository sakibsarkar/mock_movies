import MovieFilterCard from "@/components/movie/MovieFilterCard";
import PrimaryMovieCard from "@/components/movie/PrimaryMovieCard";
import { baseUrl } from "@/libs/api";
import { IMovie } from "@/types/movie.type";
import { SearchParams } from "next/dist/server/request/search-params";

const getQueryParams = (query: SearchParams) => {
  if (!query) return "";
  const fetchQuery = ["genre", "types", "sortBy"];

  const queryStr = fetchQuery
    .filter(
      (key) =>
        query[key] !== undefined &&
        query[key] !== null &&
        query[key] !== "" &&
        query[key] !== "all",
    )
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`,
    )
    .join("&");

  return queryStr;
};

const AllMoviesView = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const resolvedSearchParams = await searchParams;

  const queryString = getQueryParams(resolvedSearchParams);
  const url = queryString
    ? `${baseUrl}/titles?${queryString}`
    : `${baseUrl}/titles`;

  const res = await fetch(url);
  const data = (await res.json()) as { titles: IMovie[] };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">All Movies</h1>
      <p className="text-muted-foreground mb-8">Browse and discover movies</p>

      {/* Filters Component */}
      <MovieFilterCard />

      {/* Movies Grid */}
      {data.titles ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.titles?.map((movie) => (
            <PrimaryMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>no data found</div>
      )}
    </main>
  );
};

export default AllMoviesView;
