"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ChapterDetailsProps {
  chapter: {
    title: string;
    fullContent: string;
  };
}

export default function CourseCurriculum({ chapter }: ChapterDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-4 bg-transparent border-gray-500 hover:bg-gray-700/10"
        >
          Vezi detalii
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-[#121212] border-white/10 text-white">
        <DialogHeader>
          <span className="text-primary font-mono text-sm mb-2">
            Capitol detaliat
          </span>
          <DialogTitle className="text-2xl font-bold">
            {chapter.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400 pt-4 leading-relaxed">
            {chapter.fullContent}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
