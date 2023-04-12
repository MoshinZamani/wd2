-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 23, 2023 at 07:45 PM
-- Server version: 8.0.32
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `climbing`
--

-- --------------------------------------------------------

--
-- Table structure for table `belay_device`
--

CREATE TABLE `belay_device` (
  `device_id` int NOT NULL,
  `device_name` varchar(255) DEFAULT NULL,
  `device_link` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `belay_device`
--

INSERT INTO `belay_device` (`device_id`, `device_name`, `device_link`, `brand`) VALUES
(14, 'ATC-Guide Belay/Rappel Device', 'https://www.blackdiamondequipment.com//en_GB/product/atc-guide-belay-rappel-device/?colorid=3104', 'Black-Diamond'),
(15, 'ATC-Alpine Guide', 'https://www.blackdiamondequipment.com//en_GB/product/atc-alpine-guide/', 'Black-Diamond'),
(16, 'Big Air XP Package', 'https://www.blackdiamondequipment.com//en_GB/product/big-air-xp-package/', 'Black-Diamond'),
(17, 'ATC Pilot', 'https://www.blackdiamondequipment.com//en_GB/product/atc-pilot/', 'Black-Diamond'),
(18, 'ATC-XP Belay/Rappel Device', 'https://www.blackdiamondequipment.com//en_GB/product/atc-xp-belay-rappel-device/?colorid=3111', 'Black-Diamond'),
(19, 'ATC Belay/Rappel Device', 'https://www.blackdiamondequipment.com//en_GB/product/atc-belay-rappel-device/?colorid=3109', 'Black-Diamond'),
(20, 'Super 8 Belay/Rappel Device', 'https://www.blackdiamondequipment.com//en_GB/product/super-8-belay-rappel-device/?colorid=3107', 'Black-Diamond'),
(21, 'PearLock Screwgate Carabiner', 'https://www.blackdiamondequipment.com//en_GB/product/pearlock-screwgate-carabiner/?colorid=5480', 'Black-Diamond'),
(22, 'GridLock Screwgate Carabiner', 'https://www.blackdiamondequipment.com//en_GB/product/gridlock-screwgate-carabiner/?colorid=2542', 'Black-Diamond'),
(23, 'VaporLock Screwgate Carabiner', 'https://www.blackdiamondequipment.com//en_GB/product/vaporlock-screwgate-carabiner/', 'Black-Diamond'),
(24, 'RockLock Screwgate Carabiner', 'https://www.blackdiamondequipment.com//en_GB/product/rocklock-screwgate-carabiner/?colorid=2541', 'Black-Diamond'),
(25, 'Big Air Pilot Package', 'https://www.blackdiamondequipment.com//en_GB/product/big-air-pilot-package-1/', 'Black-Diamond'),
(26, 'RockLock Twistlock Carabiner', 'https://www.blackdiamondequipment.com//en_GB/product/rocklock-twistlock-carabiner/', 'Black-Diamond'),
(27, 'GRIGRI® +', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/GRIGRI-PLUS', 'Petzl'),
(28, 'GRIGRI® +', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/GRIGRI-PLUS', 'Petzl'),
(29, 'GRIGRI®', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/GRIGRI', 'Petzl'),
(30, 'REVERSO®', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/REVERSO', 'Petzl'),
(31, 'GRIGRI®', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/GRIGRI', 'Petzl'),
(32, 'VERSO', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/VERSO', 'Petzl'),
(33, 'REVERSO®', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/REVERSO', 'Petzl'),
(34, 'HUIT', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/HUIT', 'Petzl'),
(35, 'VERSO', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/VERSO', 'Petzl'),
(36, 'HUIT ANTIBRULURE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/HUIT-ANTIBRULURE', 'Petzl'),
(37, 'HUIT', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/HUIT', 'Petzl'),
(38, 'STOP', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/STOP', 'Petzl'),
(39, 'HUIT ANTIBRULURE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/HUIT-ANTIBRULURE', 'Petzl'),
(40, 'SIMPLE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/SIMPLE', 'Petzl'),
(41, 'STOP', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/STOP', 'Petzl'),
(42, 'RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/RACK', 'Petzl'),
(43, 'SIMPLE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/SIMPLE', 'Petzl'),
(44, 'FREINO Z', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/FREINO-Z', 'Petzl'),
(45, 'RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/RACK', 'Petzl'),
(46, 'Pulley for SIMPLE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Pulley-for-SIMPLE', 'Petzl'),
(47, 'FREINO Z', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/FREINO-Z', 'Petzl'),
(48, 'Swinging brake bar with hook for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Swinging-brake-bar-with-hook-for-RACK', 'Petzl'),
(49, 'Pulley for SIMPLE', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Pulley-for-SIMPLE', 'Petzl'),
(50, 'Brake bar w/o hook for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Brake-bar-w-o-hook-for-RACK', 'Petzl'),
(51, 'Swinging brake bar with hook for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Swinging-brake-bar-with-hook-for-RACK', 'Petzl'),
(52, 'Anodized, fixed brake bar for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Anodized--fixed-brake-bar-for-RACK', 'Petzl'),
(53, 'Brake bar w/o hook for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Brake-bar-w-o-hook-for-RACK', 'Petzl'),
(54, 'PIRANA CLUB', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/PIRANA-CLUB', 'Petzl'),
(55, 'Anodized, fixed brake bar for RACK', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/Anodized--fixed-brake-bar-for-RACK', 'Petzl'),
(56, 'PIRANA CLUB', 'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/PIRANA-CLUB', 'Petzl');

-- --------------------------------------------------------

--
-- Table structure for table `harness`
--

CREATE TABLE `harness` (
  `harness_id` int NOT NULL,
  `harness_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `harness_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `belay_device`
--
ALTER TABLE `belay_device`
  ADD PRIMARY KEY (`device_id`);

--
-- Indexes for table `harness`
--
ALTER TABLE `harness`
  ADD PRIMARY KEY (`harness_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `belay_device`
--
ALTER TABLE `belay_device`
  MODIFY `device_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `harness`
--
ALTER TABLE `harness`
  MODIFY `harness_id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
