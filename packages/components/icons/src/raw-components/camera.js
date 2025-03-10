import * as React from 'react';

function Camera(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g id="camera__Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="camera__MC-icon-set" transform="translate(-24 -504)" fill="#000">
          <g id="camera__Images" transform="translate(24 504)">
            <g id="camera__Camera">
              <path
                d="M19.444 17.149v-7.87a.602.602 0 00-.594-.608h-4.164l-.782-2.13H10.06l-.782 2.13H5.113a.6.6 0 00-.592.609v7.869a.6.6 0 00.592.608H18.85a.602.602 0 00.594-.608m1.185-7.87v7.87c0 1.006-.798 1.824-1.779 1.824H5.113c-.98 0-1.777-.818-1.777-1.824v-7.87c0-1.006.797-1.826 1.777-1.826h3.345l.782-2.128h5.483l.783 2.128h3.344c.98 0 1.78.82 1.78 1.827zm-5.154 1.642c-.719-1.277-2.057-2.07-3.492-2.07-1.437 0-2.776.793-3.494 2.07a4.245 4.245 0 000 4.14c.718 1.278 2.057 2.07 3.494 2.07 1.435 0 2.773-.792 3.492-2.07a4.245 4.245 0 000-4.14zm-.935 3.587a2.94 2.94 0 01-2.56 1.517 2.942 2.942 0 01-2.558-1.517 3.11 3.11 0 010-3.034 2.943 2.943 0 012.56-1.517c1.056 0 2.031.58 2.558 1.517.529.939.529 2.096 0 3.034z"
                id="camera__shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Camera;
