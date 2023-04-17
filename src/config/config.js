const config = {
    production: {
        PORT: 2222,
        DB_URI: `mongodb+srv://bobosa2534:Su18hK5FCW2llkkK@cluster0.lh5vqlc.mongodb.net/?retryWrites=true&w=majority`,
        SECRET: 'F.O.U.R.secret',
        ONE_DAY: 1000 * 60 * 60 * 24
    },
    development: {
        PORT: 3000,
        DB_URI: `mongodb+srv://bobosa2534:Su18hK5FCW2llkkK@cluster0.lh5vqlc.mongodb.net/?retryWrites=true&w=majority`,
        SECRET: 'F.O.U.R.secret',
        ONE_DAY: 1000 * 60 * 60 * 24
    }
}

module.exports = config[process.env.node_env || 'development'];
