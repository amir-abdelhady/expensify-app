import uuid from 'uuid'

// ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {} ) => ({
    type: 'ADD',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE',
    id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
})