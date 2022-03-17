import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

const selectCountries = createSelector(
  (state) => state.countries.list,
  (list) =>
    list
      .filter((country) => country.name.common.startsWith("A"))
      .map((country) => ({
        name: country.name.common,
      }))
);

const Countries = () => {
  const loading = useSelector((state) => state.countries.loading);
  const list = useSelector(selectCountries);
  const { fetchCountries } = useActions();

  console.log("loading", loading);
  console.log("list", list);

  useEffect(() => {
    (async () => {
      await fetchCountries();
    })();
  }, [fetchCountries]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {list.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default Countries;
