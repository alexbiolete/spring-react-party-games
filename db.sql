CREATE SCHEMA `party_games_db`;

CREATE TABLE `party_games_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  `mail` VARCHAR(45) NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `party_games_db`.`game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `party_games_db`.`room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `game_id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `room_gameFK_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `room_gameFK`
    FOREIGN KEY (`game_id`)
    REFERENCES `party_games_db`.`game` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

ALTER TABLE `party_games_db`.`room`
ADD COLUMN `admin_id` INT NOT NULL AFTER `type`,
ADD COLUMN `admin_name` VARCHAR(45) NOT NULL AFTER `admin_id`,
ADD COLUMN `nr_users` INT NOT NULL AFTER `admin_name`,
ADD COLUMN `max_users` INT NOT NULL AFTER `nr_users`,
ADD COLUMN `state` VARCHAR(45) NOT NULL AFTER `max_users`,
ADD INDEX `room_userFK_idx` (`admin_id` ASC) VISIBLE;

ALTER TABLE `party_games_db`.`room`
ADD CONSTRAINT `room_userFK`
  FOREIGN KEY (`admin_id`)
  REFERENCES `party_games_db`.`user` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

CREATE TABLE `party_games_db`.`connection` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `connection_room_idx` (`room_id` ASC) VISIBLE,
  INDEX `connection_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `connection_room`
    FOREIGN KEY (`room_id`)
    REFERENCES `party_games_db`.`room` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `connection_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `party_games_db`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `party_games_db`.`chat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `username` INT NOT NULL,
  `message` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `chat_room_fk_idx` (`room_id` ASC) VISIBLE,
  INDEX `chat_user_fk_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `chat_room_fk`
    FOREIGN KEY (`room_id`)
    REFERENCES `party_games_db`.`room` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `chat_user_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `party_games_db`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

ALTER TABLE `party_games_db`.`connection`
ADD COLUMN `username` VARCHAR(45) NOT NULL AFTER `score`;

ALTER TABLE `party_games_db`.`chat`
CHANGE COLUMN `username` `username` VARCHAR(45) NOT NULL ;

ALTER TABLE `party_games_db`.`connection`
DROP COLUMN `seed`;

ALTER TABLE `party_games_db`.`room`
ADD COLUMN `seed` INT NOT NULL AFTER `state`;
