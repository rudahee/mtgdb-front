# Magic The Gathering Database: FRONT END

## Indice

1. **[Introduccion al proyecto](#introduccion-al-proyecto)**
2. **[Requisitos](#requisitos)**
3. **[Instalacion y configuracion del entorno](#instalacion-y-configuracion-del-entorno)**
4. **[Conclusiones](#conclusiones)**

----

## Introduccion al proyecto

Este proyecto se presenta a la asignatura **Integracion FRONTEND y BACKEND**.

* Objetivo del proyecto:

    Usando los conocimientos adquiridos hasta la fecha: realizar un frontend que permite consumir [un backend que se puede encontrar aqui](https://github.com/rudahee/MTGDB-backend)

* Objetivo de la aplicacion:

    Tratar un los datos sobre un juego de cartas coleccionables (Magic The Gathering) en forma de un CRUD.

## Requisitos
- Node.JS
- TypeScript
- Angular 5 o superior
- Navegador web


## Instalacion y configuracion del entorno

Voy a hacer el proceso de instalacion solo para distribuciones Linux basadas en Arch Linux

Obviare la instalacion de Visual Studio Code.

- **Instalar Node.JS y npm**

```sh
# Arch Linux
$ sudo pacman -S nodejs npm
```

- **Instalar TypeScript y Angular**

```sh
# npm
sudo npm install -g typescript
sudo npm install -g @angular/cli
```

- **Instalar el proyecto**

Desde la carpeta del proyecto:
```sh
# npm
npm install

# Arrancamos el servidor con:
ng serve -o
```

## Conclusiones

Lo primero que tengo que aclarar en la parte de backend, es que para el frontend que he realizado, sobran varias entidades, con sus respectivos repositorios y controladores que son completamente accesibles sin problemas. Pero no son utiles en esta actividad.

He tratado no solo de usar lo minimo, y he usado routing (que es algo que me cuesta algo mas de trabajo), he realizado tambien un put y un delete entre otras cosas.

Como conclusion final, he comprendido como se relacionan los componentes con los servicios, el uso de interfaces, y como puedo interactuar con un backend desde Angular. Ademas he instalado y usado ocasionalmente bootstrap en este proyecto.

