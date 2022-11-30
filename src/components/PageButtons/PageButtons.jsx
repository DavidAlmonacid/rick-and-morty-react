const PageButtons = ({ page, setPage }) => {
  const handlePrev = () => {
    setPage(() => page - 1);
  };

  const handleNext = () => {
    setPage(() => page + 1);
  };

  return (
    <div className='flex mx-12 py-2 justify-between'>
      <button
        disabled={page === 1 && true}
        title={page !== 1 && `Previous: Page ${page - 1}`}
        className='disabled:opacity-60 disabled:cursor-not-allowed'
        onClick={handlePrev}
      >
        Prev
      </button>

      <button
        disabled={page === 42 && true}
        title={page !== 42 && `Next: Page ${page + 1}`}
        className='disabled:opacity-60 disabled:cursor-not-allowed'
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default PageButtons;
