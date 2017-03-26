import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authorize} from './actions/user';
import {getPhotos} from './actions/photos';
import {Button, Thumbnail, Grid, Row, Col} from 'react-bootstrap';
import AuthorizePanel from './components/AuthorizePanel';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickAuthorize = this.handleClickAuthorize.bind(this);
    this.handleClickGetPhotos = this.handleClickGetPhotos.bind(this);
  }

  handleClickAuthorize() {
    this.props.onClickAutorize();
  }

  handleClickGetPhotos() {
    this.props.onClickGetPhotos(this.props.user.access_token);
  }

  render() {
    const {
      user,
      photos
    } = this.props;

    return (
      <div className="app">
        {user.access_token ? (
          <div>
            {photos && photos.data ? (
              <Grid>
                <Row>
                  {photos.data.map(item => (
                    <Col
                      key={item.id}
                      xs={2}
                      >
                      <Thumbnail
                        src={item.preview}
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
      dispatch(authorize())
    },

    onClickGetPhotos: accessToken => {
      dispatch(getPhotos(accessToken))
    }
  })
)(App);
