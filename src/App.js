import './App.css';
import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '7fecfc3cfa0ea92f2d59ca3f954c770e2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
          setNewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div className="">
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
