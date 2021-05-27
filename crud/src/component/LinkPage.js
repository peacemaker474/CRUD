import React from 'react';

class LinkPage extends React.Component {
    
    shouldComponentUpdate(newProps) {
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    
    render() {
        const lists = [];
        let newData = this.props.data;
        for (let i = 0; i < newData.length; i++) {
            lists.push(
                <li key={newData[i].id}>
                    <a href={`/content/${newData[i].id}`}
                    onClick={function (id, event) {
                        event.preventDefault();
                        this.props.onChangePage(id);

                    }.bind(this, newData[i].id)}
                    >
                        {newData[i].title}
                    </a>
                </li>
            );
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default LinkPage;