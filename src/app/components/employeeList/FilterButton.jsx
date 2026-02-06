export default function FilterButton({
  label,
  sortKeyName,
  activeSortKey,
  sortDir,
  onSort,
}) {
  const isActive = activeSortKey === sortKeyName;

  return (
    <button
      type="button"
      className={
        "searchButton__button" + (isActive ? ` is-active ${sortDir}` : "")
      }
      onClick={() => onSort(sortKeyName)}
    >
      {label}
    </button>
  );
}
