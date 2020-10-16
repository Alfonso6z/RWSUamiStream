
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
- [🚀 Ejecucion](#ejecucion-🚀)
- [🛠️ Construido](#construido-🛠️)
- [✒️ Colaboradores](#colaboradores-✒️)
- [📄 Licencia](#licencia-📄)

---

## Comenzando 🚀 
_Este RWS-UamiStream funciona principalmente en las WebApp **Streama**, permite agregar usuarios mediante correo electrónico (por el momento unicamente con Gmail), está configurado paraqué el administrador no tenga que agregar manualmente a un usuario a **Streama**._

### Pre-requisitos 📋

>Para utilizar ***MySQL*** como backend de datos, debe instalar un servidor de base de datos compatible con ***MySQL***. Una vez que su base de datos está instalada, necesita crear la base de datos (es decir, con: CREATE DATABASE). Luego configure su application.yml para usar mysql. — Streama


#### __Tiene que contar con un servidor http__

Para probar este proyecto es necesario el jar de streama y tener instalado lo siguiente: 


| Nombre                                        |Versión        |
| :----------:                                    | :----------:    |
| [Streama.jar](hhttps://github.com/streamaserver/streama/releases/tag/v1.9.2) | 1.9.2         |
| [Node ](https://nodejs.org/es/)               | 14.3.0        |
| [Java ](https://nodejs.org/es/)               | 8        |
| [Typescript](https://www.typescriptlang.org/) | 4.0.2         |


Visite el [GitHub](https://github.com/streamaserver/streama) de streama para saber más de su funcionamiento e instalación. 

###### _Se recomienda Java 8, Streama puede no funcionar con Java 7 o 10.Las versiones mencionadas fueron utilizadas para el desarrollo, puede usar versiones posteriores, en caso de errores verifique la documentación de cada una de ellas._


 ----
## Instalación 🔧

### Streama
Descargue el archivo jar de streama y colóquelo en la raíz del proyecto, posteriormente configure el archivo [application.yml](application.yml):

```

:::yml
environments:
    production:
        dataSource:
            driverClassName:  'com.mysql.jdbc.Driver'
            url: jdbc:mysql://MYSQL_SERVER_IP/MYSQL_DATABASE
            username: MYSQL_USER
            password: MYSQL_PASSWORD

```
Haga el .jar ejecutable  con el siguiente comando:

```
$ chmod +x streama-X.Y.jar
```


### RWS-UamiStream

Clone o descargue el reléase de este  proyecto, dentro de la carpeta del mismo abra una terminal y ejecute el siguiente:  

```
$ npm install
```
Antes de la construcción tendrá que configurar el archivo __**evn**__ cambiando el nombre a __**.evn**__ y colocar las variables de entorno


```
$ npm run build
```


## Ejecucion 🚀

Si ya tiene todo lo anterior solo basta con ejecutar _Streama_ y el _RWS-UamiStream,_ con los siguientes comandos:

Streama:

```
$ npm run start
```

RWSUamiStream

```
$ java -jar streama.jar 

```

## Construido 🛠️

## Colaboradores ✒️

* **[Alfonso González Zempoalteca](https://github.com/Alfonso6z)** - *Trabajo Inicial*

### contribuyentes:
* Aún hay que aportar mucho a este proyecto, se mencionará a cada uno de los desarrolladores que contribuyan con nuevas funciones o que las complementen.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [license](license.md) para detalles.

