import { Profile } from "./Profile/Profile"
import { FriendList } from "./FriendList/FriendList"

import user from './Data/userData.json'
import friends from "./Data/friends.json"

const App = () => {
  return (
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

<FriendList friends={friends} />
  </div>
  );
};

export default App