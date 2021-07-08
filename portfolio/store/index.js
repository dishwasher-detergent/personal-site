export const state = () => ({
    session: null
})

export const mutations = {
    SET_SESSION(state,value){
        state.session = value
        localStorage.setItem('session', JSON.stringify(value))
    }
}
