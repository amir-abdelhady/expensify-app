import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE',
        id: '123abc'
    })
})

test('should setup edit expense action oject', () => {
    const action = editExpense('123', { note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT',
        id: '123',
        updates: { note: 'New note value' }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseDate = {
        description: 'Rent',
        amount: 1900,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseDate)
    expect(action).toEqual({
        type: 'ADD',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
        }
    })
})