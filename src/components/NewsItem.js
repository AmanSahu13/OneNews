// import React, { Component } from 'react'
import React from 'react'

const NewsItem = (props) => {
 
    let {title, discription, imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className='my-2'>
        <div className="card" >
          <div style={{left:"90%", zIndex:"1", display: 'flex', justifyContent: 'flex-end',right: '0'}}>

        <span className="position-absolute badge rounded-pill bg-danger" >{source}</span>
          </div>
                <img src={!imageUrl?"https://img.freepik.com/premium-photo/search-bar-magnifying-glass-pink-background-searching-information-data-internet-networking_94120-1715.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{discription}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unknown": author} on {new Date (date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  
}
export default NewsItem
