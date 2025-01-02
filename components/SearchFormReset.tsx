"use client";

import Link from "next/link";
import { FC, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface Props {}

const SearchFormReset: FC<Props> = ({}) => {
  const router = useRouter();
  const reset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = document.querySelector(".search-input") as HTMLInputElement;
    if (input) input.value = "";
    router.replace("/", { scroll: false });
  };

  return (
    <button type="reset" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
