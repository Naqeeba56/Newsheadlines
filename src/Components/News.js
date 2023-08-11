import React, { useEffect,useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  News = (props) => {
 
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalresults] = useState(0)
  // document.title = `${this.capitalizeFirstLetter(props.category)} - Newshub`

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updatenews = async (pageno) => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fc782acebdb47c781ef9d7537477a01&page=${page}&pageSize=${props.pageSize}`;
   
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json()
    props.setProgress(50);
    setarticles(parseddata.articles)
    settotalresults(parseddata.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    return () => {
      updatenews();
    }
  }, [])
  

  

  // handleprevclick = async () => {

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fc782acebdb47c781ef9d7537477a01&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseddata = await data.json()
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseddata.articles,
  //   //   loading: false
  //   // })

  //   this.setState({ page: this.state.page - 1 });
  //   this.updatenews();
  // }

  // handlenextclick = async () => {
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {



  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fc782acebdb47c781ef9d7537477a01&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parseddata = await data.json()
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseddata.articles,
  //   //     loading: false
  //   //   })

  //   // }

  //   this.setState({ page: this.state.page + 1 });
  //   this.updatenews();
  // }

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
   setpage(page + 1 );
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fc782acebdb47c781ef9d7537477a01&page=${page}&pageSize=${props.pageSize}`;
  //  this.setState({ loading: true });
   let data = await fetch(url);
   let parseddata = await data.json()
   setarticles(articles.concat(parseddata.articles))
  settotalresults(parseddata.totalResults)
  setloading(true)
};

  
    return (
      <>
        <h1 className="text-dark text-center mt-5"> NewsHub - Top  { capitalizeFirstLetter(props.category)} Headlines.</h1>
        {loading && <Spinner />}

        

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
            <div className='row' >
              {articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 36) : ""}
                    description={element.description ? element.description.slice(0, 60) : ""}
                    imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
              })}

            </div>
           </div>
          </InfiniteScroll>
        </>


        
        
    );
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 7,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News