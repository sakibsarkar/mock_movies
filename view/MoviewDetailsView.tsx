import { Card, CardContent } from "@/components/ui/card";
import { baseUrl } from "@/libs/api";
import { IMovie } from "@/types/movie.type";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  params: Promise<{ id: string }>;
}
const MoviewDetailsView: React.FC<IProps> = async ({ params }) => {
  const resolved = await params;
  const movieId = resolved.id;

  const res = await fetch(`${baseUrl}/titles/${movieId}`, {
    cache: "no-cache",
  });
  const movie = (await res.json()) as IMovie;
  return (
    <main>
      <section className="container_main py-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 w-fit center gap-2"
        >
          <ArrowLeft /> Back to Movies
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Movie Poster */}
          {movie.primaryImage?.url && (
            <div className="md:col-span-1">
              <Image
                src={movie.primaryImage.url}
                alt={movie.primaryTitle}
                width={300}
                height={450}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          )}

          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-2">
              <h1 className="text-4xl font-bold">{movie.primaryTitle}</h1>
              {movie.originalTitle !== movie.primaryTitle && (
                <p className="text-muted-foreground">{movie.originalTitle}</p>
              )}
              <p className="text-lg text-muted-foreground mt-2">
                {movie.startYear}
                {movie.endYear ? `–${movie.endYear}` : ""}
              </p>
            </div>
            <Card>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h4 className="text-[20px] font-bold">
                    Sample Dynamic Nested Routes
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/movies/${movieId}/2023402/product`}
                      className="w-full bg-primary py-3 text-accent text-center rounded-lg"
                    >
                      Nested Product Route
                    </Link>
                    <Link
                      href={`/movies/${movieId}/2023402/review`}
                      className="w-full bg-primary py-3 text-accent text-center rounded-lg"
                    >
                      Nested Review Route
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rating</p>
                    <p className="text-2xl font-bold center gap-1 w-fit">
                      <Star className="text-yellow-300" />
                      {movie.rating?.aggregateRating.toFixed(1)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {movie.rating?.voteCount.toLocaleString()} votes
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Runtime
                    </p>
                    <p className="text-2xl font-bold">
                      {Math.floor(movie.runtimeSeconds / 60)} min
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {movie.genres && movie.genres.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground ">Plot</p>
              <p className="text-base leading-relaxed">{movie.plot}</p>
            </div>

            {(movie.originCountries?.length > 0 ||
              movie.spokenLanguages?.length > 0) && (
              <div className="grid grid-cols-2 gap-4">
                {movie.originCountries?.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground">Countries</p>
                    <p className="text-sm">
                      {movie.originCountries.map((c) => c.name).join(", ")}
                    </p>
                  </div>
                )}
                {movie.spokenLanguages?.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground mb-2">
                      Languages
                    </p>
                    <p className="text-sm">
                      {movie.spokenLanguages.map((l) => l.name).join(", ")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Directors, Writers, Stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Directors */}
          {movie.directors && movie.directors.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">Directors</h2>
              <div className="space-y-3">
                {movie.directors.map((director) => (
                  <div key={director.id} className="flex gap-3">
                    {director.primaryImage?.url && (
                      <Image
                        src={director.primaryImage.url || "/placeholder.svg"}
                        alt={director.displayName}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {director.displayName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Writers */}
          {movie.writers && movie.writers.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">Writers</h2>
              <div className="space-y-3">
                {movie.writers.map((writer) => (
                  <div key={writer.id} className="flex gap-3">
                    {writer.primaryImage?.url && (
                      <Image
                        src={writer.primaryImage.url || "/placeholder.svg"}
                        alt={writer.displayName}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {writer.displayName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stars */}
          {movie.stars && movie.stars.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">Stars</h2>
              <div className="space-y-3">
                {movie.stars.map((star) => (
                  <div key={star.id} className="flex gap-3">
                    {star.primaryImage?.url && (
                      <Image
                        src={star.primaryImage.url || "/placeholder.svg"}
                        alt={star.displayName}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{star.displayName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MoviewDetailsView;
