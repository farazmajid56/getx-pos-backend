// configuration for mssql connector
const config = {
    connectionString: `Driver=SQL Server;Server=tcp:localhost,1433;Database=Getx;Uid=sa;Pwd=12345678;`,
    secretOrKey: "secret",
    image_url: "http://localhost:5001/images/",
};

module.exports = config;
