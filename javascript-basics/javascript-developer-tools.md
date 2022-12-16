# Developer Tools

Nos ayudan con todo lo que sea HTML/CSS/JS. En las secciones previas ya habiamos visto como nos ayudaban con HTML & CSS. Pero para repasar:

## Modificar elementos en el DOM

Si se seleccionan elementos en "Elements", se pueden cambiar clases/contenido/otros de elementos HTML.

Además, en la pestaña "Styles" se pueden agregar/eliminar/cambiar los CSS de un elemento. Se pueden ver los CSS que se están aplicando a un elemento, y los que son eliminados durante el correr del programa.

## Agregar pseudo clases
Se pueden agregar clases a un elemento con .cls.
Se pueden poner elementos en pseudo-estados (simular como si estuviera el elemento en hover, click, active, etc) con .hov.

## Ver el CSS aplicado
Para ver solamente las propiedades CSS que se están aplicando a un elemento hay que ir a la pestaña "Computed" que está al lado de la pestaña "Styles". Al clickear "Show All" se muestran todas las reglas aplicadas al CSS, al desclcikear "Show All" solamente se muestran las aplicadas.

En la sección más inferior de "Styles" se pueden ver todas las propiedades heredadas de otros elementos. Ej: Heredado de html


## Ver el box model de un elemento

Ir al panel "Styles" y clickear el icono ![icono_box_model](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/ARurwNZrSDIYQwsVPuUC.png?auto=format&w=22). Para cambiar el valor de algo del box model, doble clickearlo y modificarlo. 

## Filtrar CSS

En la pestaña "Styles" hay una barrita llamada "Filter" que permite filtrar por palabras especificas el CSS.

## Abrir la paleta de comandos

Se hace con Ctrl + Shift + P

## Emular modo print de una página

Command Palette > Renderización > Mostrar Renderización > Emular Medios de CSS > Print

## Ver qué archivos utiliza la página y su porcentaje de utilización

Command Palette > Cobertura > Volver a cargar > Clickear alguno de los archivos

Esto permite ver cada uno de los archivos que están actuando dentro de la página

## Copiar CSS

Al seleccionar un elemento y al ir a la pestaña "Styles" se puede hacer click derecho y se desplegarán diversas formar de copiar un CSS.

## Agregar CSS a un elemento

Esto se hace seleccionando un elemento, ir a "Styles" y clickear dentro de los parentesis curvos de element.style. Esto permite escribir una propiedad y su valor. Esto agrega un inline-style de CSS al DOM.

## Agregar CSS a una regla ya escrita

De forma similar al apartado anterior, clickear en los brackets curvos de la clase CSS que se quiere cambiar.

## Cambiar el nombre de una declaración o estilo

Se hace con doble click y cambiandolo. 

## Cambiar cariables numéricas

Hacerles doble click, y cambiarlas. Hay atajos de teclado:
- flecha arriba/abajo para cambiar de a 1 unidad
- alt + arriba/abajo para cambiar de a 0.1
- shift + arriba/abajo para cambiar de a 10
- ctrl + shift + arriba/abajo para cambiar de a 100)

## Agregar clases

Se pueden hacer yendo al panel "Styles" de un elemento y apretando .cls

## Poner modo oscuro automático

Ir al panel "Styles" e ir al ícono de la brocha y clickear "Modo oscuro "automático"" y se genera el modo oscuro a pesar de no haberlo implementado.

# Cambiar el DOM

Casi todo se hace doble clickeando lo que se quiera cambiar (el tipo de elemento se hace doble clickeando el tag inicial del elemento, el contenido doble clickeando el contenido)

## Editar como HTML

Se hace haciendo click derecho en un elemento y seleccionando "Editar como HTML". Esto permite agregar nuevas lineas, y nuevos tags HTML. Con Ctrl + Enter se guarda

## Forzar un estado

Esto permite forzar un pseudo estado a un elemento HTML. Se hace con click derecho > Forzar estado > Seleccionar el estado que se quiera. 

## Ocultar un elemento

Se hace seleccionando un elemento HTML y apretando H.

## Borrar un elemento

Se hace seleccionando un elemento HTML y apretando Delete.

## Referenciar un elemento en JS

Al seleccionar un elemento, se puede ver que aparece un texto "== $0" al lado de este. Esto significa que se puede referenciar tal elemento desde JS con $0. Al abrir la consola y escribir $0 y enter, se retorna el elemento seleccionado.

## Guardar un elemento como variable global en JS

Al seleccionar un elemento, se puede hacer click derecho y clickear en "Guardar como variable global". Esto va a generar una variable tempN con el elemento recién seleccionado

## Copiar ruta JS de un elemento

Al seleccionar un elemento, se puede hacer click derecho > Copiar > Copiar la ruta de JS. Esto genera un document.querySelector(rutaAElemento). Por ejemplo:
```
document.querySelector("#main-content > div.display-flex.gap-top-300.lg\\:gap-top-400 > div > article > div.center-images.stack.stack--block.type > ol:nth-child(66) > li:nth-child(1) > ul > li:nth-child(1)")
```


# Debuggear JS

Al abrir la consola con Ctrl + Shift + I, se abre la consola. Al ir a "Fuentes" s epueden ver todos los archivos que son utilizados por la página. En las fuentes hay 3 paneles: Explorador de Archivos (Izquierda arriba), Editor de código (Derecha arriba) y Depurador. En el depurador se pueden seleccionar breakpoints según los eventos de escucha (por ej click). Sólo hay que ir a Interrupciones del objeto de escucha de eventos y seleccionar el que se quiera. Una vez que se corra de nuevo la página (al hacer un click por ej), el breakpoint estará activo. 

El debugger es muy similar al que ya está en Visual Studio Code

## Panel Alcance

Aquí se pueden ver las definiciones de las variables cundo se para en una línea de código. En Local se pueden ver las variables definidas hasta ese momento. Si se hace doble click en la variable esta se puede editar

Si uno abre la consola, puede utilizar las variables que estan en "Alcance"

Al final se pueden hacer muchas cosas con el debugger, incluso editar el código de texto y guardarlo con Ctrl + S. Sin embargo, esto sólo lo guardará en la sesión actual, y no guardará para todos los usuarios. En ese caso hay que cambiar el archivo que está en los servers uwu.

Al final, dentro de la **Consola** del Developer Web Tools se puede correr JavaScript como si nada dentro de la consola. Es como el IDLE de python que permite correr Python linea por linea :D.

# Knowledge Check

How do you open developer tools?
Click derecho > Inspeccionar
Ctrl + Shift + I

How do you change screen size of a website using developer tools?
Con el icono para cambiar a mobile device

What is a breakpoint?
Es un punto que se settea en el código, que al pasar por allí, el debugger se para y permite después correr el código con total control (linea por linea, saltarse funciones, entrar a funciones, etc).

How do you set a breakpoint?
Clickeando una linea, con event listeners, etc...
