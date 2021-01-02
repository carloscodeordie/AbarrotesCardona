CREATE DATABASE  IF NOT EXISTS `abarrotescardonadb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `abarrotescardonadb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: abarrotescardonadb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idclientes` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `deuda` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`idclientes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `corte_caja`
--

DROP TABLE IF EXISTS `corte_caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corte_caja` (
  `idCorte_Caja` int NOT NULL,
  `fecha_corte` varchar(45) NOT NULL,
  `id_empleado` int NOT NULL,
  `efectivo_inicial_entregado_aEmpleado` decimal(10,0) NOT NULL,
  `efectvoi_final_entregado_por_empleado` decimal(10,0) NOT NULL,
  `ventas_credito` decimal(10,0) NOT NULL,
  `ventas_contado` decimal(10,0) NOT NULL,
  `total_ventas` decimal(10,0) NOT NULL,
  `balance` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idCorte_Caja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleados` int NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `fecha_nacimiento` varchar(45) DEFAULT NULL,
  `fecha_contratacion` varchar(45) DEFAULT NULL,
  `fecha_baja` varchar(45) DEFAULT NULL,
  `imss_number` varchar(45) DEFAULT NULL,
  `id_horario` int DEFAULT NULL,
  `tipo_empleado_id` int DEFAULT NULL,
  `salario` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`idempleados`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `horarios`
--

DROP TABLE IF EXISTS `horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios` (
  `idhorarios` int NOT NULL,
  `hora_entrada` varchar(45) DEFAULT NULL,
  `hora_salida` varchar(45) DEFAULT NULL,
  `dias_calendariozados` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idhorarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inventarios`
--

DROP TABLE IF EXISTS `inventarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventarios` (
  `idinventarios` int NOT NULL,
  `fecha_inventario` varchar(45) DEFAULT NULL,
  `id_empleado` varchar(45) DEFAULT NULL,
  `id_gerente` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idinventarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inventarios_productos`
--

DROP TABLE IF EXISTS `inventarios_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventarios_productos` (
  `id_inventario` int NOT NULL,
  `id_productos` int NOT NULL,
  `num_unidades_actuales` int NOT NULL,
  `num_unidades_esperadas` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pagos`
--

DROP TABLE IF EXISTS `pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagos` (
  `idpagos` int NOT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `id_cliente` int DEFAULT NULL,
  `monto` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`idpagos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproductos` int NOT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `precio_compra` decimal(10,0) NOT NULL,
  `precio_venta` decimal(10,0) NOT NULL,
  `stock_minimo` decimal(10,0) NOT NULL,
  `unidades_existentes` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idproductos`),
  UNIQUE KEY `idproductos_UNIQUE` (`idproductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_empleado`
--

DROP TABLE IF EXISTS `tipo_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_empleado` (
  `idtipo_empleado` int NOT NULL,
  `tipo_empleadocol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipo_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `idventas` int NOT NULL,
  `tipo_venta` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `monto` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`idventas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='			\n\n\n\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ventas_clientes`
--

DROP TABLE IF EXISTS `ventas_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_clientes` (
  `id_venta` int NOT NULL,
  `id_cliente` varchar(45) NOT NULL,
  `fecha` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='ventas_clientes';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-02 14:14:12
