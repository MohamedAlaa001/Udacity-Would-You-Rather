const PollsFilter = ({ pollsFilter, setPollsfilter }) => {
  const { answered, unanswered } = pollsFilter;

  const handlerOnChangeFilter = (e) => {
    setPollsfilter({
      ...pollsFilter,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <div className='questions-filter'>
      <div className='form-check-inline form-check form-switch'>
        <input
          type='checkbox'
          name='answered'
          id='__answered'
          checked={answered}
          className='form-check-input'
          onChange={(e) => handlerOnChangeFilter(e)}
        />
        <label htmlFor='__answered' className='form-check-label'>
          Answered Questions
        </label>
      </div>
      <div className='form-check-inline form-check form-switch'>
        <input
          type='checkbox'
          name='unanswered'
          id='__unanswered'
          checked={unanswered}
          className='form-check-input'
          onChange={(e) => handlerOnChangeFilter(e)}
        />
        <label htmlFor='__unanswered' className='form-check-label'>
          Unanswered Questions
        </label>
      </div>
    </div>
  );
};

export default PollsFilter;
