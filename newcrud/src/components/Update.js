import React, { useState } from 'react';

function UpdateContent (props) {

    const newData = props.tocData;
    let i = props.resetNumber;
    let [data, setData] = useState({
        id: newData[i].id,
        title: newData[i].title,
        desc: newData[i].desc
    });
    
    const setTocData = props.setTocData;

    return (
        <article>
            <h2> Update </h2>
            <form action="/update_process" method="post" onSubmit={(e) => {
                e.preventDefault();
                let copyData = newData;
                copyData[i] = data;
                // copyData = copyData.push(data);
                setTocData(copyData);
            }}>
                <input type="hidden" name="id" value={data.id} />
                <p>
                    <input type="text" placeholder="title" value={data.title} 
                    onChange={(event) => {
                        let copyData = data.title;
                        copyData = event.target.value;
                        setData((prev) => {
                            return {...prev, title:copyData}
                        });
                    }}
                    /> 
                </p>
                <p>
                    <textarea name="desc" value={data.desc} onChange={(event) => {
                        let copyData = data.desc;
                        copyData = event.target.value;
                        console.log(data);
                        setData((prev) => {
                            return {...prev, desc:copyData}
                        })
                    }} />
                </p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
        </article>
    );
}

export default UpdateContent; 