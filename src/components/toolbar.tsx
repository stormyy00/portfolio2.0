import { Projectprops } from "@/types";
import { useState } from "react";

interface props {
  data: Projectprops[];
  setSearch: (filteredData: Projectprops[]) => void;
}

const Toolbar = ({ data, setSearch }: props) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          setSearch(
            value === ""
              ? data
              : data.filter(({ name }) =>
                  name.toLowerCase().includes(value.toLowerCase()),
                ),
          );
        }}
        placeholder="Search Projects"
        className="w-full px-5 py-1 bg-white/10 text-white border border-white/20 rounded-md placeholder-white/60 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-jt-lightblue focus:border-jt-lightblue transition"
      />
    </div>
  );
};

export default Toolbar;
