export default function TableTh({
  label,
  sortKeyName,
  activeSortKey,
  sortDir,
  onSort,
}) {
  const isActive = activeSortKey === sortKeyName;

  return (
    <th
      scope="col"
      className={
        "listName" + (isActive ? ` is-active ${sortDir}` : " not-active")
      }
      onClick={() => onSort(sortKeyName)}
    >
      {label}
    </th>
  );
}
