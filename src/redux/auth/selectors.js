export const userSelector = state => state.auth.user

export const tokenSelector = state => !!state.auth.token

export const isLoadingSelector = state => state.auth.isLoading

export const authErrorSelector = state => state.auth.error

