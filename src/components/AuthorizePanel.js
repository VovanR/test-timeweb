import React, {Component, PropTypes} from 'react';
import {Button, Jumbotron} from 'react-bootstrap';

class AuthorizePanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <Jumbotron>
        <h1>
          {'Welcome!'}
        </h1>

        <p>
          {'We need you'}
        </p>

        <p>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.handleClick}
            >
            {'Authorize'}
          </Button>
        </p>
      </Jumbotron>
    );
  }
}
AuthorizePanel.propTypes = {
  onClick: PropTypes.func.isRequired
};
// AuthorizePanel.defaultProps = {
// };

export default AuthorizePanel;
