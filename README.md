# programacion_web
Proyecto que contiene los sitios web creados en Programación Web

Comando para descargar repositorio de la página web. (usar gitbash)

```shell

```

Ingresar a la repositorio descargado (usar gitbash)

```shell
cd programacion_web
```

Listar archivos del repositorio (usar gitbash)

```shell
ls
```

Listar archivos del repositorio y archivos ocultos (usar gitbash)

```shell
ls -la
```

Abrir visual code en la ruta de la terminal (usar gitbash)

```shell
code .
```
Verificar si el repositorio tiene cambios.

```shell
git status
```

Agregar, borrar o actualizar archivos en el repositorio.

```shell
 git add .
 ```


docker build -t portal-web-img:0.0.1 .

COMMANDO PARA LINUX Y UNIX

docker run -dit --name portal-web -p 8900:80 -v ${PWD}:/var/www/localhost/htdocs/portal-web portal-web-img:0.0.1

COMMANDO WINDOWS POR CMD
docker run -dit --name portal-web -p 8900:80 -v %cd%:/var/www/localhost/htdocs/portal-web portal-web-img:0.0.1


