import React, {useRef,useContext,useState, useEffect} from 'react';
import DatePicker from 'react-date-picker';
import {useMediaQuery} from 'react-responsive';
import { Tab } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

import ReactGA from 'react-ga';
const newsUrlComponent = React.createContext({});
const _ = require('lodash');

function App() {
  ReactGA.initialize('UA-165908026-1');
  const PageView = () => {  
    ReactGA.pageview(window.location.pathname +  
                     window.location.search); 
  }
  const countpageview=PageView();
  

  const [newsDate,setDate] = useState(new Date());
  const [country,setCountry] = useState('us');
  const [source,setSource] = useState('associated-press');
  const [keyword, setKeyword]= useState('Coronavirus OR Covid-19 pandemic');
  return (
    <div className="App">
      <newsUrlComponent.Provider value={{newsDate,setDate,country,setCountry,source,setSource,keyword, setKeyword}}>
        <CalendarDisplay />
        <input type='text' placeholder='Search News...' value={keyword} onChange = {userInput=>{setKeyword(userInput.target.value)}}></input>
        <NewsBoard />
      </newsUrlComponent.Provider>
    </div>
  );
}

function CalendarDisplay(){
  const value= useContext(newsUrlComponent);
  return (
    <div className='item calendar'>
      <DatePicker
        onChange = {date=>{
          var current=new Date();
          var latestdate = new Date();
          latestdate.setDate(latestdate.getDate()-30);
          console.log(latestdate);
          if(Math.round((current. getTime()  - date. getTime())/1000/60/60/24)<31)
            value.setDate(date);
          else
            alert('You are trying to request results too far in the past. Your can request news articles as far back as '+latestdate)
        }}
        value = {value.newsDate}
      />
    </div>
  );
}

function NewsBoard(){
  const centerNews='associated-press,reuters,bloomberg,bbc-news,the-hill,usa-today,the-wall-street-journal&';
  const leftNews = 'abc-news,buzzfeed,cbs-news,cnn,nbc-news,politico,time,the-washington-post,the-huffington-post,msnbc&';
  const rightNews = 'fox-news,the-washington-times,breitbart-news,national-review,the-american-conservative&';

   const panes = [
    {menuItem:{content:'Blue',color:'blue'}, render:()=> <Tab.Pane>
      <div className='column leftNews'>
        <NewsList newssources = {leftNews} />
      </div>  
    </Tab.Pane>},
    {menuItem:{content:'Grey',color:'grey'}, render:()=> <Tab.Pane>
      <div className='column centernews'>
        <NewsList newssources = {centerNews} />
      </div>
    </Tab.Pane>},
    {menuItem:{content:'Red',color:'red'}, render:()=> <Tab.Pane>
      <div className='column rightNews'>
        <NewsList newssources = {rightNews} />
      </div>
    </Tab.Pane>}
  ];
  const isMobiledevice = useMediaQuery({query: '(max-width: 1224px)'});
  const isDesktopOrLaptop  = useMediaQuery({ query: '(min-width: 1224px)' }) 
  return(
    <div className = "ui equal width divided unstackable grid">
     {isMobiledevice && <Tab panes={panes}/> }
     {isDesktopOrLaptop && <>
        <div className='column leftNews'>
          <NewsList newssources = {leftNews} />
        </div>
        <div className='column centernews'>
          <NewsList newssources = {centerNews} />
        </div>
        <div className='column rightNews'>
          <NewsList newssources = {rightNews} />
        </div>
        </>}
    </div>
  );
}
function NewsList(props){
  const [data, setData] = useState([]);
  const value= useContext(newsUrlComponent);
  const newsdate = value.newsDate.getFullYear()+'-'+(value.newsDate.getMonth()+1)+'-'+value.newsDate.getDate();
	const urlSelectDate = 'https://newsapi.org/v2/everything?' +
          'q='+value.keyword+'&' +
          'sources='+props.newssources+
          'from='+newsdate+'&'+
          'to='+newsdate+'&'+
          'sortBy=popularity&' +
          'pageSize=30&'+
          'apiKey=832f76f6261645f78b4cfb6490835a6c';
  const today= new Date();

  async function getNews(urlSelectDate){
    const response = await fetch(urlSelectDate);
    const news = await response.json();
    setData(news.articles);
  }
  const throttled =useRef(_.debounce(getNews,2000));
  useEffect(()=>{
    throttled.current(urlSelectDate)
  },[urlSelectDate]);
  const newsComponents = data.map((article,index) => (
			<Product 
				key = {'article' + index}
				id = {index}
				title = {article.title}
				description = {article.description}
        url = {article.url}
        source = {article.source.name}
        newsImageUrl = {article.urlToImage}
        publishTime = {article.publishedAt}
        author = {article.author}
        content = {article.content}
			/>
      )); 
  return(
				<div className = 'ui stackable items' >
					{newsComponents}
				</div>
	);
}

function Product (props){
		return(
			<div className='item newscomponent'>
				<div className='image'>
					<img src={props.newsImageUrl} />
          <span className='header'>{props.source}</span>
				</div>
				<div className='middle aligned content'>
					<div className = 'header'>
            <a href = {props.url}>
              {props.title}					
           	</a>

          </div>
					<div className = 'description'>
						<p>
							{props.description}
						</p>
					</div>
          <div className='extra'>
          <span>{props.publishTime}</span>
          </div>
				</div>

			</div>
		);
}



export default App;


