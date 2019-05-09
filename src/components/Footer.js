import React from 'react';

import { rhythm } from '../utils/typography';

import styled from 'styled-components';

const SFooter = styled.footer`
  margin-top: 70px;
  font-size: 8px;
  text-decoration: none;
  font-family: 'Noto Sans KR', sans-serif;
`;

class Footer extends React.Component {
  render() {
    return (
      <SFooter>
        <a
          href="https://github.com/hyunjaesung"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://hardworkingcoder.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          wordpress
        </a>
      </SFooter>
    );
  }
}

export default Footer;
