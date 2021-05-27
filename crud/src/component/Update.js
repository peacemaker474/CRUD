import React from 'react';

class UpdateContent extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        };
        this.inputFormHandle = this.inputFormHandle.bind(this);
    }

    inputFormHandle(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render () {
        return (
            <article>
                <h2> Update </h2>
                <form action="update/process" method="post"
                onSubmit={function (event) {
                    event.preventDefault();
                    this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                    );
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <p>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.inputFormHandle} />
                    </p>
                    <p>
                        <textarea 
                        name="desc" 
                        placeholder="desc"
                        value={this.state.desc}
                        onChange={this.inputFormHandle}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </article>
        )
    }
}

export default UpdateContent;