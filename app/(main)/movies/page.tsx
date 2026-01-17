import { getPageMetaData } from "@/lib/meta";
import AllMoviesView from "@/view/AllMoviesView";
import { SearchParams } from "next/dist/server/request/search-params";
export const metadata = getPageMetaData("All Movies");
const page = ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
  return <AllMoviesView searchParams={searchParams} />;
};

export default page;
