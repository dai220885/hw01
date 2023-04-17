export type ThemeStateType = {
    themeId: number
}
const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdActiononType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}


export type ChangeThemeIdActiononType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
