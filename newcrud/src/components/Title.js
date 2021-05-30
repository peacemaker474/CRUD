import React, {useState} from 'react';


function Title (props) {

    const [titleData] = useState([
        {
        title: "안녕하세요",
        desc: "어서오세요! 방문해주셔서 감사합니다."
        }
    ]);

    return (
        <header>
            <h1> {titleData[0].title} </h1>
            <p> {titleData[0].desc} </p>
        </header>
    )
}


export default Title;