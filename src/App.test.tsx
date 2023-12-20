import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App.tsx', () => {
  it('should display input filed', () => {
    // arrange
    render(<App />)
    // act
    // assert
    expect(screen.getByLabelText('Username')).toBeVisible()
  })
})
