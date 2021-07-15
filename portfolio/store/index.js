export const state = () => ({
    session: null,
    message: null,
})

export const mutations = {
    SET_SESSION(state,value){
        state.session = value
        localStorage.setItem('session', JSON.stringify(value))
    },
    SET_MESSAGE(state,value){
        state.message = value
    }
}
