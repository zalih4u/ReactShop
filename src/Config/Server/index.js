const env = {
    production:{
        baseUrl : ""
    },
    staging:{
        baseUrl : ""
    }
}
const path = {
    routes:{
        auth : "https://reqres.in/api/users",
        me: "https://randomuser.me/api/"
    }
}
export default {
    ...env.staging,
    ...path
}