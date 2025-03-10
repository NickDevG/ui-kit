import * as React from 'react';

function Redo(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          d="M12.458 7.41a8.524 8.524 0 00-6.7 3.246L3.796 8.693c-.437-.438-.795-.29-.795.33v7.335c0 .618.024.593.643.593h7.286c.619 0 .767-.358.33-.795l-2.243-2.243a6.283 6.283 0 015.697-3.64 6.283 6.283 0 016.277 6.085 8.542 8.542 0 00-8.531-8.948z"
          id="redo__path-1"
        />
      </defs>
      <g
        id="redo__Component-/-icon-/-24px-/-Richtext-/-Redo"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="redo__Component-/-icon-/-12px-/-redo--"
          transform="matrix(-1 0 0 1 24 0)"
        >
          <mask id="redo__mask-2" fill="#fff">
            <use xlinkHref="#redo__path-1" />
          </mask>
          <use id="redo__Shape" fill="#1A1A1A" xlinkHref="#redo__path-1" />
        </g>
      </g>
    </svg>
  );
}

export default Redo;
