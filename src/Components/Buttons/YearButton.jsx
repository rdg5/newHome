

export const YearButton = ({ year, onClick, selected }) => {
  return (
    <button
      type="button"
      className={`btn-year ${selected ? 'btn-year-selected' : ''}`}
      onClick={() => onClick(year)}
    >
      {year}
    </button>
  );
};