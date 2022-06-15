-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4001
-- Generation Time: Jun 15, 2022 at 08:07 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie-database`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `mov_id` int(11) NOT NULL,
  `mov_name` varchar(20) DEFAULT NULL,
  `actor` varchar(20) DEFAULT NULL,
  `actress` varchar(20) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `dir_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`mov_id`, `mov_name`, `actor`, `actress`, `year`, `dir_name`) VALUES
(8, 'Spiderman: No way Ho', 'Tom holland', 'Zendaya', 2021, 'John Watts'),
(9, 'KGF:Chapter 2', 'Yash', 'Shrinidhi Shetty', 2022, 'Prashanth Neel'),
(10, 'RRR', 'Jnr NTR', 'Alia Bhatt', 2022, 'Rajamouli'),
(11, 'Doctor Strange ', 'Benedict Cumberbatch', 'Elizabeth Olsen', 2022, 'Sam Raimi'),
(12, 'The Batman', 'Robert Pattinson', 'Zoe Kravitz', 2022, 'Matt Reeves');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`mov_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `mov_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
