import React, {Component} from 'react';
import MainLayout from './layouts/MainLayout';
import { Route, Switch} from 'react-router-dom';
import PostTable from './posts/PostTable';
import FullPost from './posts/FullPost';
import AdminPostTable from './AdminPosts/AdminPostTable';
import ProfileConfig from './profile/ProfileConfig';
class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact={true} path="/" component={() => <MainLayout content={<PostTable  />}/>}/>
          <Route path={"/events"} render={(props) => <MainLayout content = {<AdminPostTable {...props} />} />}/>
          <Route path={"/post/:postID"} render={(props) => <MainLayout content={<FullPost {...props} />} /> } />
          <Route path={"/posts"} render={(props) => <MainLayout content={<PostTable {...props} />}/>} />
          <Route path={"/profile"} render={(props) => <MainLayout content={<ProfileConfig {...props} />}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
