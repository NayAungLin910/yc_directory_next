import SearchForm from "@/components/SearchForm";
import Image from "next/image";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneur{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All startups"}
        </p>
        <ul className="mt-7"></ul>
      </section>
    </>
  );
}
