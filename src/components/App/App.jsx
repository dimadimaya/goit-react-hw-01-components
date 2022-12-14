import Profile from 'components/Profile/Profile';
import user from '../../components/data/user';
import Statistics from 'components/Statistics/Statistics';
import data from '../../components/data/data';
import FriendList from 'components/FriendList/FriendList';
import friends from '../../components/data/friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../components/data/transactions';
import Container from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
