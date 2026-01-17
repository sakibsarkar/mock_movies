"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSetSearchParams from "@/hooks/useSetSearchParams";
import { useState } from "react";

const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
  "Adventure",
  "Documentary",
];

const types = [
  "MOVIE",
  "TV_SERIES",
  "TV_MINI_SERIES",
  "TV_SPECIAL",
  "TV_MOVIE",
  "SHORT",
  "VIDEO",
  "VIDEO_GAME",
];
export const SORT_OPTIONS = [
  {
    label: "Popularity",
    value: "SORT_BY_POPULARITY",
  },
  {
    label: "Release Date",
    value: "SORT_BY_RELEASE_DATE",
  },
  {
    label: "User Rating",
    value: "SORT_BY_USER_RATING",
  },
  {
    label: "User Rating Count",
    value: "SORT_BY_USER_RATING_COUNT",
  },
  {
    label: "Year",
    value: "SORT_BY_YEAR",
  },
] as const;

const MovieFilterCard = () => {
  const { searchParams, updateSearchParams, clearSearchParams } =
    useSetSearchParams();
  const [genre, setGenre] = useState(searchParams.get("genre") || "");
  const [type, setType] = useState(searchParams.get("types") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");
  return (
    <div className="bg-secondary/50 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Genre Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium  block">Genre</label>
          <Select
            value={genre}
            onValueChange={(genre) => {
              setGenre(genre);
              updateSearchParams({ genre });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre.toLowerCase()}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium block">Type</label>
          <Select
            value={type}
            onValueChange={(type) => {
              updateSearchParams({ types: type });
              setType(type);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium block">Sort By</label>
          <Select
            value={sortBy}
            onValueChange={(sortBy) => {
              setSortBy(sortBy);
              updateSearchParams({ sortBy });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select sort" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map(({ label, value }) => {
                return (
                  <SelectItem value={value} key={value}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          onClick={() => {
            clearSearchParams();
            setGenre("");
            setSortBy("");
            setType("");
          }}
          variant="destructive"
          size="sm"
          className="cursor-pointer"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default MovieFilterCard;
