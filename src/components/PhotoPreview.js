import React, {Component, PropTypes} from 'react';
import {Thumbnail} from 'react-bootstrap';

class PhotoPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.photo);
  }

  render() {
    const {
      preview
    } = this.props;

    return (
      <div
        onClick={this.handleClick}
        >
        <Thumbnail
          src={preview}
          />
      </div>
    );
  }
}
PhotoPreview.propTypes = {
  preview: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
PhotoPreview.defaultProps = {
};

export default PhotoPreview;
