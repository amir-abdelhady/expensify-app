import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/NotFoundPage';

test('should render Header correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});