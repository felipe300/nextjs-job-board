"use client";

import FormSubmitBtn from "@/components/FormSubmitBtn";
import { Job } from "@prisma/client";
import { useFormState } from "react-dom";
import { approvedSubmission, deleteJob } from "./actions";

type AdminSidebarProps = {
  job: Job;
};

export default function AdminSidebar({ job }: AdminSidebarProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApproveSubmitionBtn jobId={job.id} />
      )}
      <DeleteJobBtn jobId={job.id} />
    </aside>
  );
}

type AdminButtonProps = {
  jobId: number;
};

function ApproveSubmitionBtn({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(approvedSubmission, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitBtn className="w-full bg-green-500 hover:bg-green-600">
        Approve
      </FormSubmitBtn>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}

function DeleteJobBtn({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(deleteJob, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" defaultValue={jobId} />
      <FormSubmitBtn className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitBtn>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
