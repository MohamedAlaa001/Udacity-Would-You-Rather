import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionUser from './QuestionUser';

const QuestionItem = ({ question, users }) => {
  const { id, author, timestamp, optionOne, optionTwo } = question;

  const user = users.find((user) => user && user.id === author);
  return (
    <div className='question-body'>
      <Link to={`/dashboard/questions/${id}`}>
        <div className='row g-0 align-items-center'>
          <div className='col-md-8'>
            <div className='title'>
              <strong>Would You Rather...</strong>
            </div>
            <ul className='question-body-votes lead'>
              <li>{optionOne.text}</li>
              <li>{optionTwo.text}</li>
            </ul>
          </div>
          <div className='col-md-4'>
            <QuestionUser user={user} timestamp={timestamp} />
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
