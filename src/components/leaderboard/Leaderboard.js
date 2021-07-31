import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LeaderboardUser from './LeaderboardUser';

const Leaderboard = ({ users }) => {
  const sortedUsers = users.sort((a, b) => {
    let totalA = a.questions.length + Object.keys(a.answers).length;
    let totalB = b.questions.length + Object.keys(b.answers).length;

    if (totalA < totalB) {
      return 1;
    } else if (totalA > totalB) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <section>
      <div className='container-fluid'>
        <div className='leaderboard-block block'>
          <div className='title'>
            <strong>Leaderboard</strong>
          </div>

          {sortedUsers.map((user) => (
            <LeaderboardUser key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

Leaderboard.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

export default connect(mapStateToProps)(Leaderboard);
