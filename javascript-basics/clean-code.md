# Código limpio

hay que ser consistentes con la utilización de espacios/tabuladores. O sea, si utilizo espacios, siempre debo utilizarlos, o si uso tabuladores, siempre debo utilizarlos.

## Reglas esenciales 

- Indentación: Ser siempre consistente con la cantidad de espacio/tabuladores que se utiliza.

- Punto y comas: Da lo mismo si se ponen o no (ya que JS los pone automáticamente). Sin embargo, hay veces en donde se generan bugs. Por lo tanto, hay que acostumbrarse a ponerlos de forma manual!

- Largo de linea: Se recomienda romper las lineas alrededor de los 80 carácteres.

- Nombrar cosas: Los nombres para funciones o variables deben ser descriptivas. Las variables deben empezar con un pronombre o un adjetivo (miNombre, numeroDeConteo, etc). Las funciones deben empezar con un verbo.


## Pasos para mantener un código limpio

1. Revisar la lógica: Es lo primero que se debe hacer antes de empezar a escribir código. Revisar la lógica, inputs, etc... Esto permite ahorrar muchisimo tiempo!

2. Exponer la estructura de la página: Esto se obtiene con ids descriptivos de la estructura de la página

3. Indentar bien: Al final, mantener una indentación consistente

4. Escribir comentarios explicativos: Escribirlos de forma oportuna!

5. Evitar abusar de comentarios: Esto es, escribir comentarios que NO aportan al código (Ej: Tengo que arreglar esta función; John escribió esto, preguntenle a él)

6. Evitar funciones largas: Es mejor romperlas en funciones mas pequeñas

7. Usar estándares para nombrar variables/funciones: Mantener estos estándares, ya que evita trabajar doble cuando se cambian funciones globales

8. Tratar los cambios con cuidado: Si se va a hacer algún cambio, mantener las buenas prácticas para mantener el código limpio

9. Evitar mezclar distintos lenguajes: Esto implica limitar el uso de inline-styles de CSS/JS en HTML y demás.

10. Resumir la cantidad de imports: Significa que si se estan utilizando muchas style-sheets/scripts, es mejor resumirlas en 1 o 2 páginas. Esto, ya que hace que todo se vea más limpio, y además tiene mucha mejor performance!.

Es buena práctica utilizar pequeños comentarios para explicar que hace una función


# Knowledge Check

Why is it important to write clean code?
Porque la gran parte del tiempo estamos leyendo código. Por lo tanto, teniendo un código limpio es mucho más fácil modificarlo, saber cómo funciona y utilizarlo.

Name 5 clean code principles previously mentioned
1. Mantener la indentación
2. Nombrar variables y funciones de forma descriptiva
3. Revisar la lógica antes de ponerse a programar
4. Romper funciones grandes en pequeñas funciones
5. Evitar el utilizar diversos lenguajes en un mismo archivo (muchos inline style sheets o JS)

What is the difference between good comments and bad comments?
1. Los buenos comentarios son comentarios descriptivos, concisos, que usualmente describen lo que se está haciendo/por qué se esta haciendo de esta manera. 
2. Malos comentarios pueden ser comentarios vagos, comentarios propios que no aportan a la explicación del código ("Voy a revisar esto despues"), comentar mucho código sin sacarlo. 