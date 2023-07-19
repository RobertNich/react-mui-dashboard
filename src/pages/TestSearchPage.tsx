import { AutoCompleteItem } from "../components/search-items/AutoCompleteItem";
import { SelectItem } from "../components/search-items/SelectItem";

export const TestSearchPage = () => {
  const autoData = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const selectData = [
    { value: "Test value 1", label: "label 1" },
    { value: "Test value 2", label: "label 2" },
    { value: "Test value 3", label: "label 3" },
  ];

  return (
    <>
      <AutoCompleteItem
        label={"test auto complete"}
        data={autoData}
        helpText={"This is just a test auto complete component"}
      />
      <SelectItem label={""} options={selectData} helpText={""} />
    </>
  );
};
