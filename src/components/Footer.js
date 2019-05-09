import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: '70px',
          fontSize: '1.2em',
          textDecoration: 'none',
          fontFamily: 'Noto Sans KR, sans-serif',
          fontWeight: '700',
        }}
      >
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
      </footer>
    );
  }
}

export default Footer;
