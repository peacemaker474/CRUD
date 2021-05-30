import React, {useState} from 'react';

function Welcome () {

    const [welcome, setWelcome] = useState([
        {
            title: "CRUD 기능",
            desc: "기능 구현은 완료했지만, 부족한 부분이 많습니다."
        }
    ])

    return (
        <article>
            <h3> {welcome[0].title} </h3>
            <p> {welcome[0].desc} </p>
        </article>
    )
}

export default Welcome;