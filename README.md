# Hello-Sequelize
Hello world / todo list app using express and sequelize in node.js

## Setup

- If you dont have it installed already, download and install  [mysql](https://dev.mysql.com/downloads/mysql/)

- Create a root user, replacing `some_username` and `some_password` each with a username and password of your choice.
```
$ mysql
mysql > GRANT ALL PRIVILEGES ON *.* TO 'some_username'@'localhost';
mysql > ALTER USER 'some_username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'some_password';
mysql > exit;
```
- Clone this repository and install dependencies
```
$ git clone https://github.com/edgarfinn/Hello-Sequelize.git
$ cd Hello-Sequelize
$ npm install
```
- Create and populate an environment variables file with the database root username and password set
```
$ touch .env
```

  ```js
  // .env
  DB_HOST=localhost
  DB_USER=some_username
  DB_PASSWORD=some_password
  ```

- Back in the terminal, run `npm run skaffold`, all being well you should see:
```
Loaded configuration file "config/config.js".
Using environment "development".
Database helloSQL_development created.
```

- If you want to verify the database was created:
```
$ mysql -u some_user -p
Enter password:
mysql > show databases;
```

You should see `helloSQL_development` listed.

```
+----------------------+
| Database             |
+----------------------+
| helloSQL_development |
+----------------------+
```
