import React from 'react';
import scriptures from '../scriptures/scriptures.json';
import reference from '../scriptures/reference.json';
import uuid from 'uuid';

const Scripture = (props) => {
  let url;
  const r = props.r;
  const verses = [];
  let split = r.split(' : ');
  const lastSpace = split[0].lastIndexOf(' ');
  const book = split[0].slice(0, lastSpace);
  const br = reference[book];
  const chapter = split[0].slice(lastSpace + 1, split[0].length);
  if (r.includes('-')) {
    split = split[1].split(' - ');
    const start = split[0];
    const end = split[1];
    for (let i = start; i <= end; i++) verses.push(scriptures[book][chapter - 1][i - 1]);
    url = `https://www.lds.org/study/scriptures/${br.webWork}/${br.webBook}/${chapter}.${start}-${end}?lang=eng`;
  } else {
    verses.push(scriptures[book][chapter - 1][split[1] - 1]);
    url = `https://www.lds.org/study/scriptures/${br.webWork}/${br.webBook}/${chapter}.${split[1]}?lang=eng`;
  }

  return (
    <div className="border p-4 shadow scripture my-5">
      <h5><a href={url} target="_blank" rel="noopener noreferrer">{r}</a></h5>
      <p className="mb-0">
        {
          props.edit ?
            props.children
            :
            verses.map((verse, index) =>
              <React.Fragment key={uuid.v4()}>
                <strong>{index + 1}</strong>&nbsp;{verse}
                {index + 1 !== verses.length ? <br /> : null}
              </React.Fragment>
            )
        }
      </p>
    </div>
  )
}

export default Scripture;