import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpense'
import editExpense from '../../actions/expenses'
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        expense={expenses[2]} 
        />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expense[2])
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})