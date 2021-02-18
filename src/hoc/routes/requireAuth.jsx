import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getUserDataSelector } from "store/selectors/auth/login";

function requireAuth(Component) {
  class ProtectedRoute extends React.PureComponent {
    render() {
      const { isAuthenticated } = this.props;
      return isAuthenticated ? (
        <Component {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getUserDataSelector(state),
  });

  return compose(connect(mapStateToProps, null))(ProtectedRoute);
}

export { requireAuth };
