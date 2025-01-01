import { FC } from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

interface Props {}

const SearchForm: FC<Props> = ({}) => {
  const query = "Test";

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <button type="submit" className="search-btn text-white">S</button>
    </Form>
  );
};

export default SearchForm;
