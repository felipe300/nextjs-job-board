import JobDetailsPage from "@/components/JobDetailsPage";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-grow md:items-start">
      <JobDetailsPage job={job} />
    </main>
  );
}
