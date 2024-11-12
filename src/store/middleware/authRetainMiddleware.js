

const authRetainMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if(action.type === 'auth/login' || action.type === 'auth/logout'){
        const authState = store.getState().authentication

        if(authState.status === true){
            localStorage.setItem('auth', JSON.stringify(authState))
        }
    }

    return result
}


export default authRetainMiddleware;