export default function ButtonGroup({ handleSetId }: any) {
  const handlePrevious = () => handleSetId((id: any) => (id > 1 ? id - 1 : id));
  const handleNext = () => handleSetId((id: any) => id + 1);

  return (
    <div className="button-group">
      <button
        name="previous"
        onClick={handlePrevious}
        className="btn btn-primary"
      >
        ←
      </button>
      <button name="next" onClick={handleNext} className="btn btn-primary">
        →
      </button>
    </div>
  );
}
