import React from "react";
import { Button } from "../ui";
import Link from "next/link";

export const ExitPreviewButton = () => {
  return (
    <Link href="/api/exit-preview">
      <Button
        variant="primary"
        className="rounded-none bg-black text-white p-8 text-center fixed bottom-0 left-0 right-0 z-10"
      >
        Exit Preview
      </Button>
    </Link>
  );
};
