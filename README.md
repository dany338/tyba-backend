## pasos para ejecutar y levantar la imagen de docker con nodejs
- docker build -t tyba-backend .
- docker images
- docker run -p 4000:5000 tyba-backend
- docker-compose --version
- docker-compose build
- docker images
- docker-compose up
- crtl + c
- docker-compose build
- docker-compose up
- docker ps
- docker exec -it exampleapp bash
- ls -a
- docker-compose stop

imagenes docker
Stopping tybaapp         ... done
Stopping mymongodatabase ... done

- docker-compose build /* Volver a generar las imagenes */
- docker-compose up /* Iniciar los servicios */

- docker logs none /* Si se desea desactivar los logs en este caso de mongodb */

## Para buscar las imagenes de los proveedores de base de datos con los que se desean trabajar
- https://hub.docker.com/_/node

## Ruta en local para probar el api backend :4000 el puerto que se selecciono
http://localhost:4000/
