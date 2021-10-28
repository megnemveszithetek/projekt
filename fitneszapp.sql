
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `adatok` (
  `id` int(11) NOT NULL,
  `felhid` int(11) NOT NULL,
  `kg` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;


CREATE TABLE `baratlista` (
  `baratID` int(11) NOT NULL,
  `barat1` int(11) NOT NULL,
  `barat2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `edzes` (
  `mikor` datetime NOT NULL,
  `ID` int(11) NOT NULL,
  `gyakorlat` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `etel` (
  `nev` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `feherje` double NOT NULL,
  `zsir` double NOT NULL,
  `szenhidrat` double NOT NULL,
  `kaloria` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;


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

INSERT INTO `felhasznalo` (`id`, `vnev`, `knev`, `email`, `pass`, `szuldatum`, `neme`, `magassag`, `loggedin`) VALUES
(3, 'íyx', 'íyx', 'íyx', '90c6580fd464515dca1aad119fd638b154ed9fe5', '2021-10-03', 0, 352, 1);


CREATE TABLE `gyakorlat` (
  `tipus` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `kategoria` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `gyakorlat` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `szeria` varchar(5) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

ALTER TABLE `adatok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `felhid` (`felhid`);

ALTER TABLE `baratlista`
  ADD PRIMARY KEY (`baratID`),
  ADD KEY `barat1` (`barat1`),
  ADD KEY `barat2` (`barat2`);

ALTER TABLE `edzes`
  ADD PRIMARY KEY (`mikor`),
  ADD KEY `ID` (`ID`),
  ADD KEY `gyakID` (`gyakorlat`);
 tábla indexei `felhasznalo`
 
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `gyakorlat`
  ADD PRIMARY KEY (`gyakorlat`);

ALTER TABLE `adatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `baratlista`
  MODIFY `baratID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `adatok`
  ADD CONSTRAINT `adatok_ibfk_1` FOREIGN KEY (`felhid`) REFERENCES `felhasznalo` (`id`);

ALTER TABLE `baratlista`
  ADD CONSTRAINT `baratlista_ibfk_1` FOREIGN KEY (`barat1`) REFERENCES `felhasznalo` (`id`),
  ADD CONSTRAINT `baratlista_ibfk_2` FOREIGN KEY (`barat2`) REFERENCES `felhasznalo` (`id`);

ALTER TABLE `edzes`
  ADD CONSTRAINT `edzes_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `felhasznalo` (`id`),
  ADD CONSTRAINT `edzes_ibfk_2` FOREIGN KEY (`gyakorlat`) REFERENCES `gyakorlat` (`gyakorlat`);
COMMIT;
