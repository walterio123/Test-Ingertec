/* Creation DB*/
CREATE DATABASE IF NOT EXISTS Walter20220329;
USE Walter20220329;

/*Creation Of Tables*/

CREATE TABLE IF NOT EXISTS tresource_type (
                                              id_resource_type INT PRIMARY KEY AUTO_INCREMENT,
                                              created DATETIME,
                                              descrip VARCHAR(200)
    );
CREATE TABLE IF NOT EXISTS tresource (
                                         id_resource INT PRIMARY KEY AUTO_INCREMENT,
                                         created DATETIME,
                                         descrip VARCHAR(200),
                                        id_resource_type INT,
                                        FOREIGN KEY (id_resource_type)
                                        REFERENCES tresource_type (id_resource_type)
    );

/* DATA INSERTION */

/*In tresource_type*/
INSERT INTO tresource_type VALUES('1', now(), ' Vídeo');
INSERT INTO tresource_type VALUES('2', now(), ' PDF Documentación');
INSERT INTO tresource_type VALUES('3', now(), ' PDF Enunciado');
INSERT INTO tresource_type VALUES('4', now(), ' PDF Solución');

/*In tresource*/

INSERT INTO tresource VALUES('1', now(), 'Documentación de Angular', '1');
INSERT INTO tresource VALUES('2', now(), 'Documentación SpringBoot', '2');
INSERT INTO tresource VALUES('3', now(), 'Documentación de MySql', '3');
INSERT INTO tresource VALUES('4', now(), 'Documentación de Swagger', '4');
INSERT INTO tresource VALUES('5', now(), 'Documentación de Mockito', '2');
INSERT INTO tresource VALUES('6', now(), 'Documentación de Typescript', '1');
INSERT INTO tresource VALUES('7', now(), 'Documentación de Workbench', '3');
INSERT INTO tresource VALUES('8', now(), 'Documentación de Jacoco', '4');

/*Record count by resource type*/
SELECT
    COUNT(tresource.id_resource) AS 'Cantidad Recurso',
        tresource.id_resource_type AS 'Id Tipo Recurso',
        tresource_type.descrip AS 'Descripción Tipo Recurso'
FROM
    tresource
        INNER JOIN
    tresource_type ON tresource.id_resource_type = tresource_type.id_resource_type
GROUP BY tresource.id_resource_type;