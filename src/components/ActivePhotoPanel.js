import React, {Component, PropTypes} from 'react';
import {Image, Jumbotron} from 'react-bootstrap';

class ActivePhotoPanel extends Component {
  render() {
    const {
      src
    } = this.props;

    return (
      <Jumbotron>
        <Image
          src={src}
          thumbnail
          />
      </Jumbotron>
    );
  }
}
ActivePhotoPanel.propTypes = {
  src: PropTypes.string.isRequired
};
// ActivePhotoPanel.defaultProps = {
// };

export default ActivePhotoPanel;
