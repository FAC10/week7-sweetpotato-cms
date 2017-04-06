BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  user_id          serial        PRIMARY KEY,
  username        varchar(100)  NOT NULL,
  password        varchar(100)  NOT NULL,
  isAdmin         BOOLEAN       NOT NULL
);

CREATE TABLE posts (
  post_id         serial          PRIMARY KEY,
  title           varchar(50)     NOT NULL,
  body            varchar(500)    NOT NULL,
  date            date            NOT NULL,
  user_id         integer         REFERENCES users(user_id)
);

-- 1 TO MANY
INSERT INTO users(username, password, isAdmin) VALUES
('antonio', 'pwd1', TRUE),
('martha', 'pwd2', TRUE),
('yvonne','pwd3', TRUE),
('zooey','pwd4', TRUE);
-- 1 TO 1
INSERT INTO posts(title, body, date, user_id) VALUES
('Lorem1', '111-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?','2017-04-01', 1),
('Lorem2', '222-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?', '2017-04-02', 2),
('Lorem3', '333-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?', '2017-04-03', 3),
('Lorem4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt. Quidem veniam unde, minima, velit tempore odit voluptas alias, harum tenetur placeat animi, quaerat perspiciatis?','2017-04-04', 4);

COMMIT;
