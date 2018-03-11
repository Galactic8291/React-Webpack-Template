// Test Test
import React from 'react'
import { shallow } from 'enzyme'

import App from '../src/components/App'

describe('Hello', () => {
  it('HELLO WORLD', () => {
    expect(true).toBe(true)
  })

  it('HELLO Component', () => {
    const output = shallow(<App />)

    expect(output).toMatchSnapshot()
  })
})

