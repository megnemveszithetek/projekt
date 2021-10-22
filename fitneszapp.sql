-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Okt 22. 10:51
-- Kiszolgáló verziója: 10.4.18-MariaDB
-- PHP verzió: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fitneszapp`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `adatok`
--

CREATE TABLE `adatok` (
  `id` int(11) NOT NULL,
  `felhid` int(11) NOT NULL,
  `kg` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `baratlista`
--

CREATE TABLE `baratlista` (
  `baratID` int(11) NOT NULL,
  `barat1` int(11) NOT NULL,
  `barat2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `edzes`
--

CREATE TABLE `edzes` (
  `mikor` datetime NOT NULL,
  `ID` int(11) NOT NULL,
  `gyakorlat` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etel`
--

CREATE TABLE `etel` (
  `nev` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `feherje` double NOT NULL,
  `zsir` double NOT NULL,
  `szenhidrat` double NOT NULL,
  `kaloria` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `vnev` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `knev` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `pass` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `szuldatum` date NOT NULL,
  `neme` tinyint(1) NOT NULL,
  `magassag` int(3) NOT NULL,
  `loggedin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalo`
--

INSERT INTO `felhasznalo` (`id`, `vnev`, `knev`, `email`, `pass`, `szuldatum`, `neme`, `magassag`, `loggedin`) VALUES
(3, 'íyx', 'íyx', 'íyx', '90c6580fd464515dca1aad119fd638b154ed9fe5', '2021-10-03', 0, 352, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyakorlat`
--

CREATE TABLE `gyakorlat` (
  `tipus` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `kategoria` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `gyakorlat` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `szeria` varchar(5) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `adatok`
--
ALTER TABLE `adatok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `felhid` (`felhid`);

--
-- A tábla indexei `baratlista`
--
ALTER TABLE `baratlista`
  ADD PRIMARY KEY (`baratID`),
  ADD KEY `barat1` (`barat1`),
  ADD KEY `barat2` (`barat2`);

--
-- A tábla indexei `edzes`
--
ALTER TABLE `edzes`
  ADD PRIMARY KEY (`mikor`),
  ADD KEY `ID` (`ID`),
  ADD KEY `gyakID` (`gyakorlat`);

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gyakorlat`
--
ALTER TABLE `gyakorlat`
  ADD PRIMARY KEY (`gyakorlat`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `adatok`
--
ALTER TABLE `adatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `baratlista`
--
ALTER TABLE `baratlista`
  MODIFY `baratID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `adatok`
--
ALTER TABLE `adatok`
  ADD CONSTRAINT `adatok_ibfk_1` FOREIGN KEY (`felhid`) REFERENCES `felhasznalo` (`id`);

--
-- Megkötések a táblához `baratlista`
--
ALTER TABLE `baratlista`
  ADD CONSTRAINT `baratlista_ibfk_1` FOREIGN KEY (`barat1`) REFERENCES `felhasznalo` (`id`),
  ADD CONSTRAINT `baratlista_ibfk_2` FOREIGN KEY (`barat2`) REFERENCES `felhasznalo` (`id`);

--
-- Megkötések a táblához `edzes`
--
ALTER TABLE `edzes`
  ADD CONSTRAINT `edzes_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `felhasznalo` (`id`),
  ADD CONSTRAINT `edzes_ibfk_2` FOREIGN KEY (`gyakorlat`) REFERENCES `gyakorlat` (`gyakorlat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
