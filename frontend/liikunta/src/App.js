import React, {Component} from 'react';
import MainLayout from './layouts/MainLayout';
import { Route, Switch} from 'react-router-dom';
import PostForm from './posts/PostForm';
import PostTable from './posts/PostTable';
import FullPost from './posts/FullPost';
import AdminPostTable from './AdminPosts/AdminPostTable';
class App extends Component {

  render() {
    return (
      <div className="App" class="container-fluid">
        <Switch>
          <Route exact={true} path="/" component={() => <MainLayout content={<PostTable  />}/>}/>
          <Route path={"/events"} render={(props) => <MainLayout content = {<AdminPostTable {...props} />} />}/>
          <Route path={"/post/:postID"} render={(props) => <MainLayout content={<FullPost {...props} />} /> } />
          <Route path={"/posts"} render={(props) => <MainLayout content={<PostTable {...props} />} />} />        
        </Switch>
      </div>
    );
  }
}

export default App;
