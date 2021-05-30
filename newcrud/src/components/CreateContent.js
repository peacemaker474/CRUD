import React, {useState} from 'react';

function CreateContent (props) {

    const tocData = props.tocData;
    const setTocData = props.setTocData;
    const [maxContentId, setMaxContentId] = useState(3);

    function createMode (e) {
        e.preventDefault();
        setMaxContentId(maxContentId + 1);
        let copyData = [...tocData, 
        {
            id: maxContentId,
            title: e.target.title.value,
            desc: e.target.desc.value
        }];
        setTocData(copyData);
    }

    return (
        <>
            <h2> Create </h2>
            <form action="create/process" method="post"
            onSubmit={createMode}
            >
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="desc" placeholder="desc" />
                </p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
        </>
    );
}

export default CreateContent ;