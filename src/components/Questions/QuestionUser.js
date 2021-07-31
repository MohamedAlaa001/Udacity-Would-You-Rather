const QuestionUser = ({ user, timestamp }) => {
  const date = new Date(timestamp);

  const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className='question-user'>
      <img src={user.avatarURL} alt='' />

      <div className='mt-3'>By {user.name}</div>
      <div>Created On: {formatedDate}</div>
    </div>
  );
};

export default QuestionUser;
