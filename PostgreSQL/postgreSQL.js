class PostgreSQLclass {
    static sdsad() {
        const query = `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`;
        const values = ["Omkar", "omkar@example.com"];
        console.log(query);
    }
}

PostgreSQLclass.sdsad();

module.exports = new PostgreSQLclass();