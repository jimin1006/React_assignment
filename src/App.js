//Challenge 4 of 4 

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  //출력할 배열
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  //<hr />을 삭제합니다.
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}
