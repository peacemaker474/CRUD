import React from 'react';

function Control (props) {

    return (
        <ul>
            <li>
                <a href="/create" onClick={(e) => {
                    e.preventDefault();
                    let copyContent = props.showContents;
                    copyContent = {mode:"create"};
                    props.setShowContents(copyContent);
                }}
                > Create </a>
            </li>
            <li>
                <a href="/update" onClick={(e) => {
                    e.preventDefault();
                    let copyContent = props.showContents;
                    copyContent = {mode:"update"};
                    props.setShowContents(copyContent);
                }}> Update </a>
            </li>
            <li>
                <input type="button" name="DEL" value="DEL" />
            </li>
        </ul>
    )
}

export default Control;