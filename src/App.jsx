import "./App.css";
import GoogleSearchButton from "./GoogleSearchButton";
import SearchableDropdown from "./SearchableDropdown";
import { lotrCharacters } from "./data/lotr";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

const handleChange = (val) => {
  setValue(val);
};

  return (
    <div className="App">
      <SearchableDropdown
        options={lotrCharacters}
        name="name"
        id="id"
        selectedVal={value}
        handleChange={handleChange}
      />
      <GoogleSearchButton query={value}/>
    </div>
  );
}
