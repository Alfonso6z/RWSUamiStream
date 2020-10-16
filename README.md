
# RWS-UamiStream (Rest Web Service)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/Alfonso6z/RWSUamiStream?color=gree)
![GitHub repo size](https://img.shields.io/github/repo-size/Alfonso6z/RWSUamiStream?label=Tama%C3%B1o%20del%20repositorio)
![GitHub top language](https://img.shields.io/github/languages/top/Alfonso6z/RWSUamiStream?color=green)
![GitHub language count](https://img.shields.io/github/languages/count/Alfonso6z/RWSUamiStream?label=Lenguajes&color=yellow)
![GitHub](https://img.shields.io/github/license/Alfonso6z/RWSUamiStream)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Alfonso6z/RWSUamiStream?color=orange)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/author/Alfonso6z/RWSUamiStream?color=purple)
![Twitter Follow](https://img.shields.io/twitter/follow/Alfonso6Z?label=Seguir&style=social)

___
Diseñado para gestirnar usuarios de **IntraNetUAMI**, y tengan acceso a un servicio llamado **UAMIstream** 

 ![Website](https://img.shields.io/website?down_color=red&down_message=intranetUami&up_color=gree&up_message=IntraNet&url=https%3A%2F%2Fshields.io)

> © Universidada Autonoma Metropolitana Iztapalapa
___

## Tabla de contenido:
- [🚀 Comenzando](#comenzando-🚀)
- [📋 Pre-requisitos](#pre-requisitos-📋)
- [🔧 Instalación](#instalación-🔧)
    * [Streama](#streama)
    * [RWS-UamiStream](#rws-uamistream)
- [🖥️ Ejecucion](#ejecucion-🖥️)
- [📄 Licencia](#licencia-📄)

---

## Comenzando 🚀 
_Este RWS-UamiStream funciona principalmente en las WebApp **Streama**, permite agregar usuarios mediante correo electrónico (por el momento unicamente con Gmail), está configurado paraqué el administrador no tenga que agregar manualmente a un usuario a **Streama**._

### Pre-requisitos 📋

>Para utilizar ***MySQL*** como backend de datos, debe instalar un servidor de base de datos compatible con ***MySQL***. Una vez que su base de datos está instalada, necesita crear la base de datos (es decir, con: CREATE DATABASE). Luego configure su application.yml para usar mysql. — Streama


#### __Tiene que contar con un servidor http__

Para probar este proyecto es necesario el jar de streama y tener instalado lo siguiente: 


| Nombre|Versión      ||
|:-:|:-:|:-:|
| [Nodejs](https://nodejs.org/es/)|14.3.0|![nodejs](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/nodejs.svg)
| [Java ](https://nodejs.org/es/)|8|![java](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/java.svg)
| [Typescript](https://www.typescriptlang.org/)|4.0.2|![tsc](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/typescript-def.svg)
|[Streama.jar](hhttps://github.com/streamaserver/streama/releases/tag/v1.9.2)|1.9.2|


Visite el [GitHub](https://github.com/streamaserver/streama) de streama para saber más de su funcionamiento e instalación. 

###### _Se recomienda Java 8, Streama puede no funcionar con Java 7 o 10.Las versiones mencionadas fueron utilizadas para el desarrollo, puede usar versiones posteriores, en caso de errores verifique la documentación de cada una de ellas._


 ----
## Instalación 🔧

### RWS-UamiStream

Clone o descargue el reléase de este  proyecto, dentro de la carpeta del mismo abra una terminal y ejecute el siguiente:  

```
$ npm install
```
Antes de la construcción tendrá que configurar el archivo [evn](env) renombrandolo a  __**.evn**__ y colocar las variables de entorno. 


```
$ npm run build
```


### Streama
Descargue el archivo jar de streama y colóquelo en la raíz del proyecto RWSUamiStreama, posteriormente configure el archivo [application.yml](application.yml) que esta en la raíz, colocando los datos de su base de datos.

Haga el ***.jar*** ejecutable  con el siguiente comando:

```
$ chmod +x streama.jar
```



## Ejecución 🖥️
![]()

Si ya tiene todo lo anterior solo basta con ejecutar _Streama_ y el _RWS-UamiStream,_ con los siguientes comandos:

Streama:

```
$ npm run start
```

RWSUamiStream

```
$ java -jar streama.jar 

```
---
## Ejecución en Docker 
|||
|:----------:|-------|
|![Docker](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/docker.svg)|Para poder instalar el proyecto con Docker es necesario tener instalado [docker]() y [docker-compose]().
Ejecutar los siguientes comandos en ese orden ya que el primer comando crea una network necesaria para conectar todos los contenedores.

```
$ docker-compose -f "docker-compose.yml" up -d --build
```
```
$ docker-compose -f "docker/docker-compose.yml" up -d --build
```

La ip de __Streama__ por defecto es __172.16.0.4:8080__ de Streama si no responde aun esta creando la base de datos, de __RWSUamiStream__ es __172.16.0.3:8080__


## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [license](LICENSE.md) para detalles.

