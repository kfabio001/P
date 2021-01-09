DROP DATABASE iniciales;
CREATE SCHEMA IF NOT EXISTS `iniciales` DEFAULT CHARACTER SET utf8 ;
USE `iniciales` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Usuario` (
  `Carnet` INT NOT NULL,
  `Nombres` VARCHAR(45) NULL,
  `Apellidos` VARCHAR(45) NULL,
  `contrasena` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  PRIMARY KEY (`Carnet`))
ENGINE = InnoDB;
INSERT INTO Usuario (Carnet,Nombres,Apellidos,contrasena,correo)
VALUES 
(201700001, "Usuario1", "ApellidoU1","contraseña1","jim@gmail.com"),
(201700002, "Usuario2", "ApellidoU2","contraseña2","jim@gmail.com"),
(201700003, "Usuario3", "ApellidoU3","contraseña3","jim@gmail.com"),
(201700004, "Usuario4", "ApellidoU4","contraseña4","jim@gmail.com"),
(201700005, "Usuario5", "ApellidoU5","contraseña5","jim@gmail.com"),

(201700006, "Usuario6", "ApellidoU6","contraseña6","jim@gmail.com"),
(201700007, "Usuario7", "ApellidoU7","contraseña7","jim@gmail.com")
;

-- -----------------------------------------------------
-- Table `mydb`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Curso` (
  `CodigoCurso` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`CodigoCurso`))
ENGINE = InnoDB;
INSERT INTO Curso (Nombre)
VALUES 
("Iniciales1"),
("Iniciales2"),
("Iniciales3"),
("Iniciales4"),
("Iniciales5"),
("Iniciales6"),
("Iniciales7")
;

-- -----------------------------------------------------
-- Table `mydb`.`PensumSistemas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`PensumSistemas` (
  `idPensumSistemas` INT NOT NULL AUTO_INCREMENT,
  `Creditos` INT NOT NULL,
  `Semestre` INT NOT NULL,
  `Curso_CodigoCurso` INT NOT NULL,
  PRIMARY KEY (`idPensumSistemas`),
  INDEX `fk_PensumSistemas_Curso1_idx` (`Curso_CodigoCurso` ASC),
  CONSTRAINT `fk_PensumSistemas_Curso1`
    FOREIGN KEY (`Curso_CodigoCurso`)
    REFERENCES `iniciales`.`Curso` (`CodigoCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO PensumSistemas (Creditos,Semestre,Curso_CodigoCurso)
VALUES 
(001,1,1),
(002, 2,2),
(003, 3,3),
(004, 4,4),
(005, 5,5),
(006, 6,6),
(007, 7,7)
;

-- -----------------------------------------------------
-- Table `mydb`.`CursosAprobados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`CursosAprobados` (
  `NotaAprobada` INT NULL,
  `CarnetU` INT NOT NULL,
  `CursoP` INT NOT NULL,
  INDEX `fk_CursosAprobados_Usuario1_idx` (`CarnetU` ASC),
  INDEX `fk_CursosAprobados_PensumSistemas1_idx` (`CursoP` ASC),
  CONSTRAINT `fk_CursosAprobados_Usuario1`
    FOREIGN KEY (`CarnetU`)
    REFERENCES `iniciales`.`Usuario` (`Carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CursosAprobados_PensumSistemas1`
    FOREIGN KEY (`CursoP`)
    REFERENCES `iniciales`.`PensumSistemas` (`idPensumSistemas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
INSERT INTO CursosAprobados (CarnetU,CursoP,NotaAprobada)
VALUES 
(201700001, 1,61),
(201700002, 2,62),
(201700003, 3,63),
(201700004, 4,64),
(201700005, 5,65),
(201700006, 6,66),
(201700007, 7,67)
;

-- -----------------------------------------------------
-- Table `mydb`.`Categratico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Catedratico` (
  `NoCatedratico` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL,
  `Apellidos` VARCHAR(45) NULL,
  PRIMARY KEY (`NoCatedratico`))
ENGINE = InnoDB;
INSERT INTO Catedratico (Nombre,Apellidos)
VALUES 
("Profesor1", "Apellido1"),
("Profesor2", "Apellido2"),
("Profesor3", "Apellido3"),
("Profesor4", "Apellido4"),
("Profesor5", "Apellido5"),
("Profesor6", "Apellido6"),
("Profesor7", "Apellido7")
;

-- -----------------------------------------------------
-- Table `mydb`.`Curso_Catedratico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Curso_Catedratico` (
  `idCatedraticoCurso` INT NOT NULL AUTO_INCREMENT,
  `Curso_CodigoCurso` INT NOT NULL,
  `Catedratico_NoCatedratico` INT NOT NULL,
  PRIMARY KEY (`idCatedraticoCurso`),
  INDEX `fk_Curso_Catedratico_Curso1_idx` (`Curso_CodigoCurso` ASC),
  INDEX `fk_Curso_Catedratico_Catedratico1_idx` (`Catedratico_NoCatedratico` ASC),
  CONSTRAINT `fk_Curso_Catedratico_Curso1`
    FOREIGN KEY (`Curso_CodigoCurso`)
    REFERENCES `iniciales`.`Curso` (`CodigoCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Curso_Catedratico_Catedratico1`
    FOREIGN KEY (`Catedratico_NoCatedratico`)
    REFERENCES `iniciales`.`Catedratico` (`NoCatedratico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
INSERT INTO Curso_Catedratico (Curso_CodigoCurso,Catedratico_NoCatedratico)
VALUES 
("1", "1"),
("2", "2"),
("3", "3"),
("4", "4"),
("5", "5"),
("6", "6"),
("7", "7")

;

-- -----------------------------------------------------
-- Table `mydb`.`Publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Publicacion` (
  `idPublicacion` INT NOT NULL AUTO_INCREMENT,
  `Mensaje` VARCHAR(45) NULL,
  `Fecha` VARCHAR(45) NULL,
  `Tipo` INT NULL,
  `Usuario_Carnet` INT NOT NULL,
  `Catedratico_NoCatedratico` INT NULL,
  `Curso_Catedratico_idCatedraticoCurso` INT NULL,
  `Curso_CodigoCurso` INT NULL,
  PRIMARY KEY (`idPublicacion`),
  INDEX `fk_Publicacion_Usuario1_idx` (`Usuario_Carnet` ASC),
  INDEX `fk_Publicacion_Catedratico1_idx` (`Catedratico_NoCatedratico` ASC),
  INDEX `fk_Publicacion_Curso_Catedratico1_idx` (`Curso_Catedratico_idCatedraticoCurso` ASC),
  INDEX `fk_Publicacion_Curso1_idx` (`Curso_CodigoCurso` ASC),
  CONSTRAINT `fk_Publicacion_Usuario1`
    FOREIGN KEY (`Usuario_Carnet`)
    REFERENCES `iniciales`.`Usuario` (`Carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Publicacion_Categratico1`
    FOREIGN KEY (`Catedratico_NoCatedratico`)
    REFERENCES `iniciales`.`Catedratico` (`NoCatedratico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Publicacion_Curso_Catedratico1`
    FOREIGN KEY (`Curso_Catedratico_idCatedraticoCurso`)
    REFERENCES `iniciales`.`Curso_Catedratico` (`idCatedraticoCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Publicacion_Curso1`
    FOREIGN KEY (`Curso_CodigoCurso`)
    REFERENCES `iniciales`.`Curso` (`CodigoCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO Publicacion (Mensaje, Usuario_Carnet,Fecha,
Curso_Catedratico_idCatedraticoCurso, Curso_CodigoCurso,Catedratico_NoCatedratico,Tipo)
VALUES 
("Mensaje1", 201700001,"1 enero 2020",1,1,1,1),
("Mensaje2", 201700002,"2 enero 2020",2,2,2,2),
("Mensaje3", 201700003,"3 enero 2020",3,3,3,3),
("Mensaje4", 201700004,"4 enero 2020",4,4,4,4),
("Mensaje5", 201700005,"5 enero 2020",5,5,5,5),
("Mensaje6", 201700006,"6 enero 2020",6,6,6,6),
("Mensaje7", 201700007,"7 enero 2020",7,7,7,7)

;
-- -----------------------------------------------------
-- Table `mydb`.`Comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iniciales`.`Comentario` (
  `idComentario` INT NOT NULL AUTO_INCREMENT,
  `Mensaje` VARCHAR(45) NOT NULL,
  `Publicacion_idPublicacion` INT NOT NULL,
  `Usuario_Carnet` INT NOT NULL,
  PRIMARY KEY (`idComentario`),
  INDEX `fk_Comentario_Publicacion_idx` (`Publicacion_idPublicacion` ASC),
  INDEX `fk_Comentario_Usuario1_idx` (`Usuario_Carnet` ASC),
  CONSTRAINT `fk_Comentario_Publicacion`
    FOREIGN KEY (`Publicacion_idPublicacion`)
    REFERENCES `iniciales`.`Publicacion` (`idPublicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentario_Usuario1`
    FOREIGN KEY (`Usuario_Carnet`)
    REFERENCES `iniciales`.`Usuario` (`Carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
INSERT INTO Comentario (Mensaje,Publicacion_idPublicacion, Usuario_Carnet)
VALUES 
("Mensaje1",1, 201700001),
("Mensaje2",2, 201700002),
("Mensaje3",3, 201700003),
("Mensaje4",4, 201700004),
("Mensaje5",5, 201700005),
("Mensaje6",6, 201700006),
("Mensaje7",7, 201700007)

;
SELECT * FROM Usuario;
SELECT * FROM Curso;
SELECT * FROM CursosAprobados;
SELECT * FROM Curso_Catedratico;
SELECT * FROM Catedratico;
SELECT * FROM Publicacion;
SELECT * FROM PensumSistemas;
SELECT * FROM Comentario;
