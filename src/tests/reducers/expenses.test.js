import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = { type: 'REMOVE', id: expenses[1].id }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense by id', () => {
    const action = { type: 'REMOVE', id: 'expenses[5].id' }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add expense', () => {
    const expense =  { id: '12', description: 'cart', amount: 2950, note: '', createdAt: 20000}
    const action = { type: 'ADD', expense }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses,
        action.expense
    ])
})

test('should edit expense', () => {
    const  note = 'new note' 
    const action = { type: 'EDIT', id: expenses[0].id, updates: { note } }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toBe('new note')
})

test('should not edit expense', () => {
    const note = 'new note'
    const action = {
        type: 'EDIT',
        id: '135',
        updates: { note }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})