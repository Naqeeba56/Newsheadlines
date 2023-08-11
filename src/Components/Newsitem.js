
import '../App.css'


const  Newsitem = (props) => {

 
    let { title, description, imageurl, newsurl, author, date, source } = props      // props are passed in render also                                      
    return (

      <div className="card my-4 Newssource">

        <div className='source-cont' style={{
          position: 'absolute',
          display: 'flex',
          /* align-items: center; */
          right: '4px',
          top: '4px',
          zIndex:'1000'
        }}>
          <span class=" badge rounded-pill bg-danger" style={{}}>
            {source}</span>
        </div>
        <img src={!imageurl ? "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg" : imageurl} className="card-img-top p-1 rounded" alt="..." height="200px" />
        <div className="card-body text-dark">
          <h5 className="card-title">{title}
            <span class="visually-hidden">unread messages</span>

          </h5>
          <p className="card-text">{description}...</p>
          <p class="card-text mt-3"><small class="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
          <a href={newsurl} rel="noreferrer" className="btn btn-sm btn-dark" target='_blank'>Read More</a>
          {/* <Link to="/">test</Link> */}
        </div>
      </div>


    )
  
}

export default Newsitem