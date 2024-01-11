import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResult from "@/components/JobResult";
import { JobFilterValues } from "@/lib/validation";
import H1 from "@/components/ui/h1";
import type { Metadata } from "next";

type PageProps = {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
};

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";

  const titleSufix = location ? `in ${location}` : "";

  return `${titlePrefix} ${titleSufix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Flow Jobs`,
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filteredValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filteredValues)}</H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filteredValues} />
        <JobResult filteredValues={filteredValues} />
      </section>
    </main>
  );
}
