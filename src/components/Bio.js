import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';
import styled from 'styled-components';

const Blogby = styled.div`
  font-size: 23px;
  font-family: 'Just Another Hand', cursive;
  font-weight: 500;
`;

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`스티브성`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <div class="blogby" style={{ maxWidth: 310 }}>
          <div
            style={{
              fontSize: '1.7em',
              fontFamily: 'Just Another Hand, cursive',
              fontWeight: 500,
            }}
          >
            Blog by SteveSung
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
