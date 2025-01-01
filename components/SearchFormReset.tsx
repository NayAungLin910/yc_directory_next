"use client";

import Link from "next/link";
import { FC, MouseEvent } from "react";

interface Props {}

const SearchFormReset: FC<Props> = ({}) => {
  const reset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.querySelector("search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  );
};

export default SearchFormReset;
