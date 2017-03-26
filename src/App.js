import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authorize, getLoginStatus} from './actions/user';
import {getPhotos, setActivePhoto} from './actions/photos';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import AuthorizePanel from './components/AuthorizePanel';
import PhotoPreview from './components/PhotoPreview';
import ActivePhotoPanel from './components/ActivePhotoPanel';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickAuthorize = this.handleClickAuthorize.bind(this);
    this.handleClickGetPhotos = this.handleClickGetPhotos.bind(this);
    this.handleClickPhotoPreview = this.handleClickPhotoPreview.bind(this);
  }

  componentWillMount() {
    this.props.onGetLoginStatus();
  }

  handleClickAuthorize() {
    this.props.onClickAutorize();
  }

  handleClickGetPhotos() {
    this.props.onClickGetPhotos();
  }

  handleClickPhotoPreview(photoSrc) {
    this.props.onClickSetActivePhoto(photoSrc);
  }

  render() {
    const {
      user,
      photos
    } = this.props;

    if (user.isLoading) {
      return null;
    }

    return (
      <div className="app">
        {photos.active ? (
          <ActivePhotoPanel src={photos.active}/>
        ) : null}

        {user.session ? (
          <div>
            {photos && photos.data ? (
              <Grid>
                <Row>
                  {photos.data.map(item => (
                    <Col
                      key={item.id}
                      xs={2}
                      >
                      <PhotoPreview
                        {...item}
                        onClick={this.handleClickPhotoPreview}
                        />
                    </Col>
                  ))}
                </Row>
              </Grid>
            ) : (
              <Button
                bsStyle="success"
                bsSize="lg"
                onClick={this.handleClickGetPhotos}
                >
                {'Load photos'}
              </Button>
            )}
          </div>
        ) : (
          <AuthorizePanel onClick={this.handleClickAuthorize}/>
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    const {
      user,
      photos
    } = state;

    return {
      user,
      photos
    };
  },

  dispatch => ({
    onClickAutorize: () => {
      dispatch(authorize());
    },

    onClickGetPhotos: () => {
      dispatch(getPhotos());
    },

    onClickSetActivePhoto: photoSrc => {
      dispatch(setActivePhoto(photoSrc));
    },

    onGetLoginStatus: () => {
      dispatch(getLoginStatus());
    }
  })
)(App);
