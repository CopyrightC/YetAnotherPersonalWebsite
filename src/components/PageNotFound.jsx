import React from 'react'
import "../styles/PageNotFound.css"
export const PageNotFound = () => {
  return (
    <div className='notfound'>
        <img src="https://anand2312.tech/images/favicon-1.webp" class="notfound-img"/>
        <h3>Requested URL not found :(</h3>
        <h3>If you think this was a mistake then <a href="/contact">contact</a> me</h3>
    </div>
  )
}
