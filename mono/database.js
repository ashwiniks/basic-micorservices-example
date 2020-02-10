const databaseFunction = () => {
          const config = {};
          const data = { "title": "this is test" };

          if (config.hasData) {
                    return data;
          }
          else {
                    process.exit(1);
          }

}

module.exports = {
          databaseFunction :databaseFunction
}