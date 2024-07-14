import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, date, author, description, imageurl, newsUrl } = this.props;

    return (
      <div className='my-3'>

        <div className="card">
          <img src={imageurl?imageurl:"https://i.ytimg.com/vi/6wIAoY3w1K0/maxresdefault.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
