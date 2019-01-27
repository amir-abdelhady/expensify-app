import React from 'react'
import { shallow } from 'enzyme'
import { AddExpnesePage } from '../../components/AddExpense'
import AddExpense from '../../components/AddExpense';
import expenses from '../fixtures/expenses'
import { addExpense } from '../../actions/expenses';

let AddExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={onsubmit} history={history} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})