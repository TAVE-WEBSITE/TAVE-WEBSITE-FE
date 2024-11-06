import React from 'react';

function Growth({ fill, className }) {
    return (
        <svg
            width="164"
            height="164"
            viewBox="0 0 164 164"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M121.168 121.167C177.892 177.891 -13.8833 177.891 42.8408 121.167C-13.8833 177.891 -13.8833 -13.8839 42.8337 42.8331C-13.8903 -13.891 177.885 -13.891 121.161 42.8331C177.885 -13.891 177.885 177.884 121.161 121.16L121.168 121.167Z"
                fill={fill}
            />
        </svg>
    );
}

export default Growth;
