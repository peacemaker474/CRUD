import React from 'react';
import Header from './component/Header';
import LinkPage from './component/LinkPage';
import Control from './component/Control';
import ReadContent from './component/ReadContent';
import CreateContnet from './component/CreateContent';
import UpdateContent from './component/Update';


class App extends React.Component {

  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_id: 2,
      subject: { title : "WEB", desc: "World Wide Web!!!!"},
      welcome: { title : "Welcome", desc: "Welcome to coding World"},
      contents: [
        {id:1, title: "HTML", desc: "HTML IS HYPERTEXT"},
        {id:2, title: "CSS", desc: "CSS IS FOR DESIGN"},
        {id:3, title: "JAVASCRIPT", desc:"JAVASCRIPT IS FOR INTERACTIVE"}
      ]
    };
  }

  getReadContent() {
    let _contents = this.state.contents;
    for (let i = 0; i < _contents.length; i++){
      let data = this.state.contents[i];
      if(data.id === this.state.selected_id){
        return data;
        }
      }
    }

  getContent() {
    let _title, _desc, _article = null;
    if(this.state.mode === "read"){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (<CreateContnet onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        let _contents = this.state.contents.concat({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        });
        this.setState({
          contents: _contents,
          mode: "read",
          selected_id: this.max_content_id
        });
      }.bind(this)} /> )
    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent 
        data={_content}
        onSubmit={function (_id, _title, _desc) {
          const _contents = Array.from(this.state.contents);
          for (let i = 0; i < _contents.length; i++) {
            if (_contents[i].id === _id) {
              _contents[i] = {id: _id, title:_title, desc:_desc};
            }
          }
          this.setState({
            contents: _contents,
            mode:"read"
          });
        }.bind(this)}
        />
      )
    }
    return _article
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.subject.title} desc={this.state.subject.desc} />
        <LinkPage data={this.state.contents} onChangePage={function(id) {
          this.setState({
            mode:"read",
            selected_id : id
          })
        }.bind(this)} />
        <Control onChangeMode={function (_mode) {
          if (_mode === "delete") {
            if (window.confirm("정말 삭제하실겁니까?")){
              const _contents = Array.from(this.state.contents);
              for (let i = 0; i < _contents.length; i++) {
                if (_contents[i].id === this.state.selected_id) {
                  _contents.splice(i, 1);
                }
              }
              this.setState({
                contents:_contents,
                selected_id: 1,
                mode:"welcome"
              });
              alert("삭제됐습니다.");
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}/>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
