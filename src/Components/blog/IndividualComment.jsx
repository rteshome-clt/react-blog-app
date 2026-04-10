import React from 'react'
import Styles from '../css/Comments.module.css'

function IndividualComment({ value }) {
  return (
    <div>
      <ul>
        <li className={Styles.comments}>
          <h4>Name: {value.name}</h4>
          <p>"{value.body}"</p>
        
        </li>
      </ul>
    </div>
  ); 
}

export default IndividualComment;