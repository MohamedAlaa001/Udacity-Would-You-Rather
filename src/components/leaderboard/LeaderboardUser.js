const LeaderboardUser = ({ user }) => {
  const numberOfQuestions = user.questions.length;
  const numberOfAnswers = Object.keys(user.answers).length;

  return (
    <div className='card'>
      <div className='row g-0'>
        <div className='col-md-8 info'>
          <div className='title'>
            <strong>{user.name}</strong>
          </div>
          <div>Number of questions: {numberOfQuestions}</div>
          <div>Number of answers: {numberOfAnswers}</div>
        </div>
        <div className='col-md-4 img'>
          <img src={user.avatarURL} style={{ borderRadius: '50%' }} alt='' />
          <div className='card ms-5'>
            <div className='card-title'>Score</div>
            <div className='card-body'>
              {numberOfAnswers + numberOfQuestions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardUser;
