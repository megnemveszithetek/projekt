-- MySQL dump 10.13  Distrib 5.5.54, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nutridb_sr28
-- ------------------------------------------------------
-- Server version	5.5.54-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `nutridb_sr28`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `nutridb_sr28` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `nutridb_sr28`;

--
-- Table structure for table `dris`
--

DROP TABLE IF EXISTS `dris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dris` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nutr_no` char(3) DEFAULT NULL,
  `age_begin` tinyint(4) DEFAULT NULL,
  `age_end` tinyint(4) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `dri` float(10,2) DEFAULT NULL,
  `ul` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=326 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dris`
--

LOCK TABLES `dris` WRITE;
/*!40000 ALTER TABLE `dris` DISABLE KEYS */;
/*!40000 ALTER TABLE `dris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dupes`
--

DROP TABLE IF EXISTS `dupes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dupes` (
  `ndb_no` varchar(5) NOT NULL,
  `seq` varchar(2) NOT NULL,
  `id` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dupes`
--

LOCK TABLES `dupes` WRITE;
/*!40000 ALTER TABLE `dupes` DISABLE KEYS */;
/*!40000 ALTER TABLE `dupes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodCats`
--

DROP TABLE IF EXISTS `foodCats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foodCats` (
  `fdgrp_cd` varchar(4) NOT NULL,
  `fdgrp_desc` varchar(60) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `fdgrp_cd` (`fdgrp_cd`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodCats`
--

LOCK TABLES `foodCats` WRITE;
/*!40000 ALTER TABLE `foodCats` DISABLE KEYS */;
/*!40000 ALTER TABLE `foodCats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodDescs`
--

DROP TABLE IF EXISTS `foodDescs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foodDescs` (
  `ndb_no` varchar(5) NOT NULL,
  `fdgrp_cd` varchar(4) NOT NULL,
  `long_desc` varchar(200) NOT NULL,
  `shrt_desc` varchar(60) NOT NULL,
  `comname` varchar(100) DEFAULT NULL,
  `manufacname` varchar(50) DEFAULT NULL,
  `survey` varchar(1) DEFAULT NULL,
  `ref_desc` varchar(60) DEFAULT NULL,
  `refuse` int(2) DEFAULT NULL,
  `sciname` varchar(60) DEFAULT NULL,
  `n_factor` float DEFAULT NULL,
  `pro_factor` float DEFAULT NULL,
  `fat_factor` float DEFAULT NULL,
  `cho_factor` float DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `popularity` int(11) DEFAULT NULL,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `ndb_no` (`ndb_no`),
  KEY `long_desc` (`long_desc`),
  KEY `comname` (`comname`)
) ENGINE=MyISAM AUTO_INCREMENT=10225 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodDescs`
--

LOCK TABLES `foodDescs` WRITE;
/*!40000 ALTER TABLE `foodDescs` DISABLE KEYS */;
/*!40000 ALTER TABLE `foodDescs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footnotes`
--

DROP TABLE IF EXISTS `footnotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footnotes` (
  `ndb_no` varchar(5) NOT NULL,
  `footnt_no` varchar(4) NOT NULL,
  `footnt_typ` varchar(1) NOT NULL,
  `nutr_no` varchar(3) DEFAULT NULL,
  `footnt_txt` varchar(200) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `ndb_no` (`ndb_no`)
) ENGINE=MyISAM AUTO_INCREMENT=565 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footnotes`
--

LOCK TABLES `footnotes` WRITE;
/*!40000 ALTER TABLE `footnotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `footnotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrientData`
--

DROP TABLE IF EXISTS `nutrientData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nutrientData` (
  `ndb_no` varchar(5) NOT NULL,
  `nutr_no` varchar(3) NOT NULL,
  `nutr_val` float NOT NULL,
  `num_data_pts` int(5) NOT NULL,
  `std_error` float DEFAULT NULL,
  `src_cd` varchar(2) NOT NULL,
  `deriv_cd` varchar(4) DEFAULT NULL,
  `ref_ndb_no` varchar(5) DEFAULT NULL,
  `add_nutr_mark` varchar(1) DEFAULT NULL,
  `num_studies` int(2) DEFAULT NULL,
  `min` float DEFAULT NULL,
  `max` float DEFAULT NULL,
  `df` int(2) DEFAULT NULL,
  `low_eb` float DEFAULT NULL,
  `up_eb` float DEFAULT NULL,
  `stat_cmt` varchar(10) DEFAULT NULL,
  `cc` varchar(1) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `ndb_no` (`ndb_no`),
  KEY `nutr_no` (`nutr_no`)
) ENGINE=MyISAM AUTO_INCREMENT=764117 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrientData`
--

LOCK TABLES `nutrientData` WRITE;
/*!40000 ALTER TABLE `nutrientData` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutrientData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrientDefs`
--

DROP TABLE IF EXISTS `nutrientDefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nutrientDefs` (
  `nutr_no` varchar(3) NOT NULL,
  `units` varchar(7) NOT NULL,
  `tagname` varchar(20) DEFAULT NULL,
  `nutrdesc` varchar(60) NOT NULL,
  `num_dec` varchar(1) NOT NULL,
  `sr_order` int(6) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_default` tinyint(1) DEFAULT NULL,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `nutr_no` (`nutr_no`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrientDefs`
--

LOCK TABLES `nutrientDefs` WRITE;
/*!40000 ALTER TABLE `nutrientDefs` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutrientDefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userDiaries`
--

DROP TABLE IF EXISTS `userDiaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userDiaries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `favorite` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiaries`
--

LOCK TABLES `userDiaries` WRITE;
/*!40000 ALTER TABLE `userDiaries` DISABLE KEYS */;
/*!40000 ALTER TABLE `userDiaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userDiaryFoods`
--

DROP TABLE IF EXISTS `userDiaryFoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userDiaryFoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food` varchar(5) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `quantity` float DEFAULT NULL,
  `diary` int(11) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiaryFoods`
--

LOCK TABLES `userDiaryFoods` WRITE;
/*!40000 ALTER TABLE `userDiaryFoods` DISABLE KEYS */;
/*!40000 ALTER TABLE `userDiaryFoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userDiaryItems`
--

DROP TABLE IF EXISTS `userDiaryItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userDiaryItems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diary` int(11) DEFAULT NULL,
  `data` text,
  `timestamp` int(11) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=267 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiaryItems`
--

LOCK TABLES `userDiaryItems` WRITE;
/*!40000 ALTER TABLE `userDiaryItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `userDiaryItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userDiaryMeals`
--

DROP TABLE IF EXISTS `userDiaryMeals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userDiaryMeals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diary` int(11) DEFAULT NULL,
  `meal` int(11) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiaryMeals`
--

LOCK TABLES `userDiaryMeals` WRITE;
/*!40000 ALTER TABLE `userDiaryMeals` DISABLE KEYS */;
/*!40000 ALTER TABLE `userDiaryMeals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userDiaryNotes`
--

DROP TABLE IF EXISTS `userDiaryNotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userDiaryNotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` text,
  `diary` int(11) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiaryNotes`
--

LOCK TABLES `userDiaryNotes` WRITE;
/*!40000 ALTER TABLE `userDiaryNotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `userDiaryNotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userFoods`
--

DROP TABLE IF EXISTS `userFoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userFoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food` varchar(5) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `quantity` float DEFAULT NULL,
  `favorite` tinyint(1) DEFAULT NULL,
  `popularity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=376 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userFoods`
--

LOCK TABLES `userFoods` WRITE;
/*!40000 ALTER TABLE `userFoods` DISABLE KEYS */;
/*!40000 ALTER TABLE `userFoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userMealItems`
--

DROP TABLE IF EXISTS `userMealItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userMealItems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `meal` int(11) DEFAULT NULL,
  `food` varchar(5) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `quantity` float DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1355 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userMealItems`
--

LOCK TABLES `userMealItems` WRITE;
/*!40000 ALTER TABLE `userMealItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `userMealItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userMeals`
--

DROP TABLE IF EXISTS `userMeals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userMeals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `favorite` tinyint(1) DEFAULT NULL,
  `popularity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=259 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userMeals`
--

LOCK TABLES `userMeals` WRITE;
/*!40000 ALTER TABLE `userMeals` DISABLE KEYS */;
/*!40000 ALTER TABLE `userMeals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userNutrients`
--

DROP TABLE IF EXISTS `userNutrients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userNutrients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `nutrient` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9085 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userNutrients`
--

LOCK TABLES `userNutrients` WRITE;
/*!40000 ALTER TABLE `userNutrients` DISABLE KEYS */;
/*!40000 ALTER TABLE `userNutrients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(25) DEFAULT NULL,
  `firstname` varchar(25) DEFAULT NULL,
  `age` tinyint(4) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `birthday` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=304 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weights`
--

DROP TABLE IF EXISTS `weights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weights` (
  `ndb_no` varchar(5) NOT NULL,
  `seq` varchar(2) NOT NULL,
  `amount` float NOT NULL,
  `msre_desc` varchar(100) DEFAULT NULL,
  `gm_wgt` float NOT NULL,
  `num_data_pts` int(3) DEFAULT NULL,
  `std_dev` float DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usda_status` enum('active','deleted') DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `ndb_no` (`ndb_no`)
) ENGINE=MyISAM AUTO_INCREMENT=19409 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weights`
--

LOCK TABLES `weights` WRITE;
/*!40000 ALTER TABLE `weights` DISABLE KEYS */;
/*!40000 ALTER TABLE `weights` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-02 18:28:08
