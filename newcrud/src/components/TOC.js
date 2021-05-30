import React from 'react';


function TOC (props) {
    
    const lists = props.tocData;
    const showContents = props.showContents;
    const setShowContents = props.setShowContents;

    function changeMode () {
        let copyContent = showContents;
        copyContent = {mode:"read"};
        setShowContents(copyContent)
    }

    // function createLi () {
    //     let contents = Array.from(lists);
    //     console.log(contents);
    //     for (let i = 0; i < lists.length; i++) {
    //         return contents.push(
    //         <li>
    //             <a href="#" onClick={function (e) {
    //                 e.preventDefault();
    //                 changeMode();
    //                 props.setResetNumber(lists[i].id);
    //             }} >
    //             {lists[i].title}
    //             </a>
    //         </li>)
    //     }
    // }


    return (
        <nav>
            <ul>
                {
                    lists.map((list, i) => 
                    <li> 
                        <a href="#" onClick={function (e) {
                            e.preventDefault();
                            changeMode();
                            props.setResetNumber(list.id);
                        }}
                        > {list.title} </a>
                    </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default TOC;