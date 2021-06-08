# sequelize-lambda
Sequelize lambda development
To run locally:
- 1. Check out from github to your local directory
- 2. Run npm install, to install all dependencies
- 3. Create env folder in the root directory and create .env.${stage} file (dev,local,prod). Add the following key and its value no spaces SUBSCRIBERS_DB_URI, DB_DIALECT according to your information. Example:
    - - export SUBSCRIBERS_DB_URI=mysql://username:password@localhost/database_name
    - - export DB_DIALECT=mysql
- 4. To run locally, execute this command
    - - Source env file
        - - - MAC Command: source env/.env.local
    - - sls offline start --skipCacheInvalidation --noPrependStageInUrl
- 5. To deploy to production, execute sls deploy
- 6. To access the page, localhost:8085/subscriber

To Set-up Tables and update schemas ( Reference: https://sequelize.org/v3/docs/migrations/ )
- Update database information (SUBSCRIBERS_DB_URI) .env according to your current stage. (dev, test, local, prod).
- Run command in the terminal, (change local according to your stage)
    - - npm run sequelize-local db:migrate to run schema related changes (local stage)
    - - npm run sequelize-local db:seed:all to run your default data (local stage)