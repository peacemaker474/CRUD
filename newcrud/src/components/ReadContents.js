import React from 'react';

function ReadContents (props) {

    const tocData = props.tocData;
    return (
        <article>
            <h2> {tocData.title} </h2>
            <p> {tocData.desc} </p>
        </article>
    )
}

export default ReadContents;