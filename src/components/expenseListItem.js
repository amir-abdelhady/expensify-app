import React from 'react'
import { link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
      <link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </link>
      <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem