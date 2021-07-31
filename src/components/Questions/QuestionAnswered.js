import React from 'react';
import Progressbar from '../layout/Progressbar';

const QuestionAnswered = ({ question, optionChoice }) => {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const voteStyle =
    question.votes.choice === optionChoice
      ? 'question-vote active'
      : 'question-vote';

  return (
    <div className={voteStyle}>
      <strong className='d-block lead'>{question[optionChoice].text}</strong>
      <div className='votes mt-2'>
        <div>
          {question.votes[optionChoice].count} out of {totalVotes} votes
        </div>

        <Progressbar styleValue={question.votes[optionChoice].percentage} />
      </div>
    </div>
  );
};

export default QuestionAnswered;
