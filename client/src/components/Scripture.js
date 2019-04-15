import React from 'react';
import scriptures from './utils/scriptures/scriptures.json';
import reference from './utils/scriptures/reference.json';

const Scripture = ({ r, children, edit }) => {
  let url;
  const verses = [];
  let split = r.split(' : ');
  const lastSpace = split[0].lastIndexOf(' ');
  const book = split[0].slice(0, lastSpace);
  const br = reference[book];
  const chapter = split[0].slice(lastSpace + 1, split[0].length);
  url = `https://www.lds.org/study/scriptures/${br.webWork}/${
    br.webBook
  }/${chapter}.`;
  if (r.includes('-')) {
    split = split[1].split(' - ');
    const start = split[0];
    const end = Number(split[1]);
    for (let i = start; i <= end; i++) {
      const text = scriptures[book][chapter - 1][i - 1];
      verses.push(
        <Verse
          number={i}
          text={text}
          last={i === end ? true : false}
          key={book + chapter + i}
        />
      );
    }
    url += `${start}-${end}?lang=eng`;
  } else {
    const verse = split[1];
    const text = scriptures[book][chapter - 1][verse - 1];
    verses.push(
      <Verse number={verse} text={text} key={book + chapter + verse} />
    );
    url += `${split[1]}?lang=eng`;
  }

  return (
    <div className="border p-3 p-sm-4 shadow scripture my-4 my-lg-5 bg-white">
      <h5>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {r}
        </a>
      </h5>
      <p className="mb-0">{edit ? children : verses}</p>
    </div>
  );
};

const Verse = ({ number, text, last }) => {
  return (
    <>
      <strong>{number}</strong>&nbsp;{text}
      {!last && <br />}
    </>
  );
};

export default Scripture;
