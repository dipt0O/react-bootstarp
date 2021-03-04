import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/Top-Headline/TopHeadline';
import Fragment from './Components/Fragment/Fragment'
function App() {
  return (
    <div >
      <h2>React-Bootstrap</h2>
     
     <Header></Header>
     <TopHeadline></TopHeadline>
      <News></News>
      <Fragment></Fragment>


    </div>
  );
}

export default App;
