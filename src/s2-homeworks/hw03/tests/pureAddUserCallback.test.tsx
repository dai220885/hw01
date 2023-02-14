import React from 'react'
import {pureAddUserCallback} from '../HW3'

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('test 1', () => {
    pureAddUserCallback('name1', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name1')
    expect(!!initialState[0]._id).toBe(true)
    pureAddUserCallback('name2', setName, initialState)
    expect(initialState.length).toBe(2)
    expect(initialState[1].name).toBe('name2')
    expect(!!initialState[1]._id).toBe(true)
})

