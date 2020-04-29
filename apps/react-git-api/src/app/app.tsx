import { actions } from '@git-api/core/src/lib/actions';
import { selectActiveUser, selectActiveUserRepos } from '@git-api/core/src/lib/selectors';
import UserForm from '@git-api/ui/src/lib/user-form/user-form';
import User from '@git-api/ui/src/lib/user/user';
import React from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { connect } from 'react-redux';

import './app.scss';

// eslint-disable-next-line no-console
interface AppProps {
  loadUserData: () => void;
}

// eslint-disable-next-line no-console
interface StateProps {
  user: any;
  repos: any;
}

class AppComponent extends React.Component<AppProps & StateProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <UserForm fetchUserData={this.props.loadUserData} />

        {this.props.user && (
          <User user={this.props.user} repos={this.props.repos} />
        )}

        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: selectActiveUser(state),
    repos: selectActiveUserRepos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserData: name => dispatch(actions.loadUserData(name))
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
