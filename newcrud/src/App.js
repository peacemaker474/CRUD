import React, {useState} from 'react';
import Title from './components/Title';
import TOC from './components/TOC';
import ReadContents from './components/ReadContents';
import Control from './components/Control';
import Welcome from './components/Welcome';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/Update';


function App() {

  const [tocData, setTocData] = useState([
      {
        id: 0,
        title: "HTML",
        desc: "HTML IS HYPERTEXT ... "
      },
      {
        id: 1,
        title: "CSS",
        desc: "CSS IS FOR DESIGN ... "
      },
      {
        id: 2,
        title:"JAVASCRIPT",
        desc: "JAVASCRIPT IS FOR INTERACTIVE ..."
      }
    ]);

    const [showContents, setShowContents] = useState({mode:"welcome"});
    const [resetNumber, setResetNumber] = useState(0);
    const [selectedId, setSelectedId] = useState(0);

    function getReadContent () {
      for (let i = 0; i < tocData.length; i++){
        let data = tocData[i];
        if (data.id === resetNumber) {
          return data;
        }
      }
    }

    function getContent () {
      let _article = null;
      if (showContents.mode === "welcome") {
        _article = <Welcome />;
      } else if (showContents.mode === "read") {
        let readContents = getReadContent();
        _article = <ReadContents tocData={readContents} />;
      } else if (showContents.mode === "create") {
        let createContents = [...tocData];
        _article = <CreateContent tocData={createContents} setTocData={setTocData} />
      } else if (showContents.mode === "update") {
        let _updataData = tocData;
        _article = <UpdateContent tocData={_updataData} setTocData={setTocData} resetNumber={resetNumber} />
    
      }
      return _article;
    }


  return (
    <div className="App">
      <Title />
      <TOC 
      tocData={tocData} 
      showContents={showContents} 
      setShowContents={setShowContents} 
      setResetNumber={setResetNumber} />

      <Control 
      showContents={showContents}
      setShowContents={setShowContents}
      />
      { getContent() }
    </div>
  );
}

export default App;
