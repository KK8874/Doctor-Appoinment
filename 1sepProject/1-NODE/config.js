const config = {
    local: {
        DB: {
            HOST: "localhost",
            PORT: 27017,
            DATABASE: "Krishnakant",
            MANGOOSE: {
                


            },

            
        },



    },
    PORTNO: 27017,
}
export const get = function get(env) {
    return config[env];
}