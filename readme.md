# mongoIncidencias

### Requisitos del sistema

- **Git:** Para poder clonar el repositorio y tener acceso a los commits

- **MongoDB :** Para utilizar el proyecto asegúrese de tener un cluster o una base de datos con mongo, para poder clonar la base de datos utilizada en el proyecto.
- **NodeJs:** Para establecer un entorno de ejecución para JavaScript, en especial la v18.17.1 que es la utilizada en el proyecto.

### Requisitos de extensiónes

- **Thunder Client:** Para realizar peticiones y probar el api se recomienda utilizar esta extensión sin embargo puede utilizarla con otras aplicaciones como lo es postman.
- **MongoDB:** Para conectarse a la base de datos y que el código pueda funcionar correctamente es necesario tenerla instalada.

### Archivo .env

Luego de crear la base de datos con mongodb es necesario establecer nuestras credenciales, para esto creamos un archivo .env y la configuramos según nuestra necesidades. Ejemplo:

```json
SERVER={"host":"127.0.0.1", "port":"3312"}
ATLAS_PASSWORD="campus123"
ATLAS_DB="db_campus_incidencias"
JWT_PASSWORD="C@ampus9$2"
```

### Clonación de la base de datos

Para empezar a hacer peticiones debemos tener información para manipular, así que ve hacía esta dirección del proyecto `config/db/shema.mongodb` . selecciona todo el código y ejecútalo.

### Descargar dependencias

Para instalar las dependencias utilizadas en el proyecto basta con ejecutar el siguiente comando:

```bash
npm i -E
```

### Creación del token

Para las peticiones del proyecto se utiliza JWT para la validación de acceso así que es necesario utilizarla por cada petición. Para crear un token hay que  remplazar por el campo {acceso} el acceso que desea tener para esta peticion , siendo estos roles 'admin','incidencias' y 'areas'. 

sEJemplo:

```http
http://127.0.0.1:3312/token/admin
```



### 