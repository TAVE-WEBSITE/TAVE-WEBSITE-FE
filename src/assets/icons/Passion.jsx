import React from 'react';

function Passion({ fill, className }) {
    return (
        <svg
            width="162"
            height="167"
            viewBox="0 0 162 167"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M172.378 78.6312H133.969L161.127 51.4728C167.519 45.0809 167.519 34.7179 161.127 28.326C154.735 21.9341 144.372 21.9341 137.98 28.326L110.822 55.4844V17.0753C110.822 8.03792 103.496 0.706543 94.4533 0.706543C85.4159 0.706543 78.0845 8.03215 78.0845 17.0753V55.4844L50.9262 28.326C44.5343 21.9341 34.1712 21.9341 27.7793 28.326C21.3874 34.7179 21.3874 45.0809 27.7793 51.4728L54.9377 78.6312H16.5286C7.49122 78.6312 0.159851 85.9568 0.159851 95C0.159851 104.043 7.48546 111.369 16.5286 111.369H54.9377L27.7793 138.527C21.3874 144.919 21.3874 155.282 27.7793 161.674C34.1712 168.066 44.5343 168.066 50.9262 161.674L78.0845 134.516V172.925C78.0845 181.962 85.4101 189.293 94.4533 189.293C103.491 189.293 110.822 181.968 110.822 172.925V134.516L137.98 161.674C144.372 168.066 154.735 168.066 161.127 161.674C167.519 155.282 167.519 144.919 161.127 138.527L133.969 111.369H172.378C181.415 111.369 188.747 104.043 188.747 95C188.747 85.9626 181.421 78.6312 172.378 78.6312Z"
                fill={fill}
            />
        </svg>
    );
}

export default Passion;
