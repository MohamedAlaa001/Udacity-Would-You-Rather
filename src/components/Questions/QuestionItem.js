import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const QuestionItem = ({ question, users }) => {
  const { id, author, timestamp, optionOne, optionTwo } = question;

  const { name } = users.find((user) => user && user.id === author);

  const date = new Date(timestamp);

  const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className='question-body'>
      <Link to={`/dashboard/questions/${id}`}>
        <div className='title'>
          <strong>By {name}</strong>
          <span className='d-block'>Created on {formatedDate}</span>
        </div>
        <div className='question-body-votes'>
          <div>Would You Rather...?</div>
          <div>
            Option One:
            <strong className='d-block'>{optionOne.text}</strong>
          </div>
          <div className='mt-2'>
            Option Two:
            <strong className='d-block'>{optionTwo.text}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

export default connect(mapStateToProps)(QuestionItem);
