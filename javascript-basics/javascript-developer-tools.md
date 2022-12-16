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