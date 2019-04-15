/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const Title = ({ title }) => {
  const display = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <Link to={`/${title}`} css={{ ':hover': { textDecoration: 'none' } }}>
      <div className="text-grey">{display}</div>
    </Link>
  );
};

export default Title;
