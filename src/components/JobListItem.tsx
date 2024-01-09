import { Job } from "@prisma/client";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import Image from "next/image";
import JobIcons from "./JobIcons";
import Badge from "./Badge";
import { Clock } from "lucide-react";
import { relativeDate } from "@/lib/utils";

type JobListItemProps = {
  job: Job;
};

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className=" flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <JobIcons
          type={type}
          locationType={locationType}
          location={location || "Worldwide"}
          salary={salary}
          createdAt={createdAt}
        />
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
}
