
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
- [🖥️ Ejecución](#ejecución-🖥️)
    * [Ejecucion en docke](#ejecución-en-docker)
- [📄 Licencia](#licencia-📄)

---

## Comenzando 🚀 
Este RWS-UamiStream funciona principalmente en las WebApp **Streama**, permite agregar usuarios mediante correo electrónico (por el momento unicamente con Gmail), está configurado para que el administrador no tenga que agregar manualmente a un usuario a **Streama**.

### Pre-requisitos 📋

>Para utilizar ***MySQL*** como backend de datos, debe instalar un servidor de base de datos compatible con ***MySQL***. Una vez que su base de datos está instalada, necesita crear la base de datos (es decir, con: CREATE DATABASE). Luego configure su [application.yml](application.yml) para usar mysql. — Streama


#### __Tiene que contar con un servidor http__

Para probar este proyecto es necesario el __.jar__ de streama y tener instalado lo siguiente: 

Para poder usar su correo de __Gmail__ como administrador de __Streama__ se tiene que configurar el acceso de [aplicaciones poco seguras](https://myaccount.google.com/security).


| Nombre|Versión      ||
|:-:|:-:|:-:|
| [Nodejs](https://nodejs.org/es/)|14.3.0|![nodejs](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/nodejs.svg)
| [Java ](https://nodejs.org/es/)|8|![java](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/java.svg)
| [Typescript](https://www.typescriptlang.org/)|4.0.2|![tsc](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/typescript-def.svg)
|[Streama.jar](hhttps://github.com/streamaserver/streama/releases/tag/v1.9.2)|1.9.2|


Visite el [GitHub](https://github.com/streamaserver/streama) de Streama para saber más de su funcionamiento e instalación. 

###### _Se recomienda Java 8, Streama puede no funcionar con Java 7 o 10.Las versiones mencionadas fueron utilizadas para el desarrollo, puede usar versiones posteriores, en caso de errores verifique la documentación de cada una de ellas._


 ----
## Instalación 🔧

### RWS-UamiStream

Clone o descargue el release de este  proyecto,Antes de la construcción tendrá que configurar el archivo [evn](env) renombrandolo a  __**.evn**__ y colocando las variables de entorno.
Abra una terminal y ejecute los siguientes comandos:  

1. instalaciond el los paquetes npm 
```
$ npm install
```

2. construccion de los archivos js
```
$ npm run build
```

### Streama
Configure el archivo [application.yml](application.yml) que está en la raíz, colocando las variables de entonrno de su base de datos.

El siguiente comando descarga y hace el __jar__ ejecutable.

```
$ sh descargar_streama.sh
```

o bien 
Descargue el archivo __.jar__ de streama y colóquelo en la raíz del proyecto RWSUamiStreama y Haga el ***.jar*** ejecutable  con el siguiente comando:

```
$ chmod +x streama.jar
```

## Ejecución 🖥️

Si ya tiene todo lo anterior solo basta con ejecutar _Streama_ y el _RWS-UamiStream,_ con los siguientes comandos en diferente bash.

Streama:

```
$ java -jar streama.jar 
```

RWSUamiStream
```
$ npm run start
```

---
## Ejecución en Docker 
|||
|:----------:|-------|
|![Docker](https://raw.githubusercontent.com/Alfonso6z/a6zicons/master/64px/docker.svg)|Para poder instalar el proyecto con Docker es necesario tener instalado [docker]() y [docker-compose]().|


Ejecutar los siguientes comandos en ese orden ya que el primer comando crea una network necesaria para conectar todos los contenedores.

```
$ docker-compose -f "docker-compose.yml" up -d --build
```
```
$ docker-compose -f "docker/docker-compose.yml" up -d --build
```

Si quiere una ejecución automática de los 2 comandos anteriores ejecute lo siguiente.

```
$ sh docker/docker_install.sh
```

La IP de __Streama__ por defecto es __172.16.0.4:8080__ y de __RWSUamiStream__ es __172.16.0.3:8080__, y estan mapeados por defecto a los puertos __8080__ y __3000__ respectivamente,como streama tine que construir la base de datos puede tardar unos minutos mostrar la página. 


## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE.md) para más detalles.