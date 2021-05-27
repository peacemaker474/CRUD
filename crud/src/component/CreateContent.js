import React from 'react';

class CreateContnet extends React.Component {
    render () {
        return (
            <article>
                <h2> Create </h2>
                <form action="create/process" method="post"
                onSubmit={function (event) {
                    event.preventDefault();
                    this.props.onSubmit(
                    event.target.title.value,
                    event.target.desc.value
                    );
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title" />
                    </p>
                    <p>
                        <textarea name="desc" placeholder="desc"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </article>
        )
    }
}

export default CreateContnet;