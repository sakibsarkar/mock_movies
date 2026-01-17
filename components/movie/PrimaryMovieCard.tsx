import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IMovie } from "@/types/movie.type";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface IProps {
  movie: IMovie;
}
const PrimaryMovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="line-clamp-2">{movie.primaryTitle}</CardTitle>
        <CardDescription>{movie.startYear}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {movie.primaryImage?.url && (
          <div className="w-full aspect-316/395 overflow-hidden rounded-lg">
            <Image
              src={movie.primaryImage.url || "/placeholder.svg"}
              alt={movie.primaryTitle}
              width={movie.primaryImage.width}
              height={movie.primaryImage.height}
              className="w-full h-full rounded-lg  object-contain"
            />
          </div>
        )}
        <div className="space-y-2 text-sm">
          <p className="text-muted-foreground line-clamp-4">{movie.plot}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">
              ⭐ {movie.rating?.aggregateRating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              {movie.rating?.voteCount.toLocaleString()} votes
            </span>
          </div>

          <Link href={`/movies/${movie.id}`}>
            <Button
              variant={"default"}
              className="w-full text-primary-foreground cursor-pointer"
            >
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrimaryMovieCard;
