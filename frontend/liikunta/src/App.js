import React, {Component} from 'react';
import MainLayout from './layouts/MainLayout';
import { Route, Switch} from 'react-router-dom';
import PostForm from './posts/PostForm';
import PostTable from './posts/PostTable';
import FullPost from './posts/FullPost';
class App extends Component {
  render() {
    return (
      <div className="App" class="container-fluid">
        <Switch>
          <Route exact={true} path="/" component={() => <MainLayout content={<PostTable/>}/>}/>
          <Route path={"/post/:postID"} render={(props) => <MainLayout content={<FullPost {...props} />} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
