-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tunisianautotrek
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tunisianautotrek
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tunisianautotrek` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tunisianautotrek` ;

-- -----------------------------------------------------
-- Table `tunisianautotrek`.`crossovercars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tunisianautotrek`.`crossovercars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(60) NOT NULL,
  `carDesc` VARCHAR(500) NOT NULL,
  `carIMG` VARCHAR(2000) NOT NULL,
  `carCategory` VARCHAR(45) NOT NULL,
  `carPrice` VARCHAR(45) NOT NULL,
  `carLocation` VARCHAR(45) NOT NULL,
  `carSpecs` VARCHAR(400) NOT NULL,
  `carFuelType` VARCHAR(45) NOT NULL,
  `carEngineType` VARCHAR(45) NOT NULL,
  `carPassengerCapacity` VARCHAR(45) NOT NULL,
  `carIMG2` VARCHAR(2000) NOT NULL,
  `carIMG3` VARCHAR(2000) NOT NULL,
  `carIMG4` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tunisianautotrek`.`ecocars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tunisianautotrek`.`ecocars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(60) NOT NULL,
  `carDesc` VARCHAR(500) NOT NULL,
  `carIMG` VARCHAR(2000) NOT NULL,
  `carCategory` VARCHAR(45) NOT NULL,
  `carPrice` VARCHAR(45) NOT NULL,
  `carLocation` VARCHAR(45) NOT NULL,
  `carSpecs` VARCHAR(400) NOT NULL,
  `carFuelType` VARCHAR(45) NOT NULL,
  `carEngineType` VARCHAR(45) NOT NULL,
  `carPassengerCapacity` VARCHAR(45) NOT NULL,
  `carIMG2` VARCHAR(2000) NOT NULL,
  `carIMG3` VARCHAR(2000) NOT NULL,
  `carIMG4` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tunisianautotrek`.`luxurycars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tunisianautotrek`.`luxurycars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(60) NOT NULL,
  `carDesc` VARCHAR(500) NOT NULL,
  `carIMG` VARCHAR(2000) NOT NULL,
  `carCategory` VARCHAR(45) NOT NULL,
  `carPrice` VARCHAR(45) NOT NULL,
  `carLocation` VARCHAR(45) NOT NULL,
  `carSpecs` VARCHAR(400) NOT NULL,
  `carFuelType` VARCHAR(45) NOT NULL,
  `carEngineType` VARCHAR(45) NOT NULL,
  `carPassengerCapacity` VARCHAR(45) NOT NULL,
  `carIMG2` VARCHAR(2000) NOT NULL,
  `carIMG3` VARCHAR(2000) NOT NULL,
  `carIMG4` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tunisianautotrek`.`mixedcars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tunisianautotrek`.`mixedcars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(45) NOT NULL,
  `carDesc` VARCHAR(500) NOT NULL,
  `carCatrgory` VARCHAR(45) NOT NULL,
  `carPrice` VARCHAR(45) NOT NULL,
  `carLocation` VARCHAR(45) NOT NULL,
  `carSpecs` VARCHAR(400) NOT NULL,
  `carFuelType` VARCHAR(45) NOT NULL,
  `carEngineType` VARCHAR(45) NOT NULL,
  `carPassengerCapacity` VARCHAR(45) NOT NULL,
  `carIMG` VARCHAR(2000) NOT NULL,
  `carIMG2` VARCHAR(2000) NOT NULL,
  `carIMG3` VARCHAR(2000) NOT NULL,
  `carIMG4` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`id`, `carName`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
