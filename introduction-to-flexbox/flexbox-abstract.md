En flexbox existen dos ejes principales, el primary axis y el cross
axis. El primary axis es el eje en donde son posicionados los objetos,
y el cross axis es en donde se estiran los objetos para caber dentro de su contenedor.


# Alignment

1. Para alinear los objetos de un flexbox a lo largo del primary axis se utiliza la propiedad **justify-content**.

Hay 3 propiedades para cambiar la localización de todos los objetos,
manteniendo a estos apilados.

- flex-start
- center
- flex-end

Como también hay 3 propiedades para distribuir a los objetos a lo largo
del flexbox:

- space-between: Los espacios entre los objetos son los mismos. No hay espacio entre los objetos a los bordes y el contenedor.

- space-around: Los espacios entre los objetos son los mismos. Hay un espacio (arbitrario? y distinto al espacio entre objetos) entre los objetos a los bordes y el contenedor

- space-evenly: Los espacios entre los objetos y entre los objetos y el contenedor son los mismos.

2. Para alinear los objetos de un flexbox a lo largo del cross axis se utiliza la propiedad **align-items**

Hay 3 propiedades para cambiar la localización de todos los objetos,
manteniendo a estos apilados.

- flex-start
- center
- flex-end

Además, están las siguientes propiedades:

- stretch: Estira los objetos a lo largo del cross axis hasta llenar el contenedor
- baseline: Alinea los objetos en la base de cada uno de ellos


Tanto justify-content como align-items se aplican al contenedor. Sin embargo, **align-self** permite cambiar el alineamiento de un elemento hijo a lo largo del cross axis.

Las propiedades de align-items y align-self son las mismas, y cambian exactamente lo mismo.

## ¿Por qué no hay un justify-items o justify-self? O sea, ¿Por qué no se puede cambiar la alineación de un único objeto a lo largo del primary axis?

Según la metáfora de los anticuchos, los objetos del primary axis están sujetos por una misma varilla (la primary axis). Si un único objeto cambia su posición, esto interfiere con los otros objetos. Por lo tanto, a lo largo del primary axis solamente se puede cambiar la posición de los objetos como un grupo.

Por otro lado, cada objeto es cruzado por una varilla única a lo largo del cross axis. Por lo tanto, el movimiento de cada uno NO interfiere con los otros obejtos. 

Es por esto que SI existe align-self, y no justify-self.

Por lo tanto:

**justify**: Alinea algo a lo largo del primary axis
**align**: Alinea algo a lo largo del cross axis
**content**: Alinea elementos como un grupo
**items**: Elementos singulares que pueden ser posicionados individualmente.

justify-content: Alinea un grupo de objetos a lo largo del primary axis
align-items: Alinea elementos individuales a lo largo del cross axis

justify-items: No existe porque los objetos del primary axis NO son individuales.
justify-self: No existe por lo mismo de arriba

Y align-content? Si existe, y es como el **flex-wrap!**


# Growing and Shrinking

**flex-basis:** Si la dirección es row, entonces es lo mismo que width.
Si la dirección es column, entonces es lo mismo que height. 

Esta propiedad se creo por la rigidez que tiene width y height en las distinas flex-direction. Independiente de la dirección del flexbox, height siempre será la altura del objeto (y no se invertirá por la dirección) y width siempre será el largo del objeto. (y tampoco se invertirá por la dirección del flexbox).

Por lo tanto, se creó un tamaño universal a lo largo del main axis que es flex-basis. Si flex-direction es row, entonces flex-basis es el width del objeto. Si flex-direction es column, entonces flex-basis es el height del objeto. Por lo tanto, permite cambiar estos valores.

# Flexibility del Flexbox

Cabe destacar que width y height en el modo flexbox son sugerencias más que valores que se deben seguir si o si (como lo es en el modo flow de visualización). En el modo flexbox, width y height de un objeto se respetarán siempre y cuando NO exista un overflow con su contenedor. Pasa lo mismo con flex-basis. 


**flex-grow:** De forma normal, los elementos de un flexbox utilizan su tamaño mínimo para situarse dentro de un flexbox. Sin embargo, si se utiliza flex-grow, entonces este elemento utilizará cuanto espacio necesite hasta llenar el contenedor. 

- ¿Qué pasa si dos o más elementos tienen flex-grow?
  - Entonces, utilizarán el proporcional de su espacio. Ej:
  Elemento 1 -> flex-grow: 3;
  Elemento 2 -> flex-grow: 7;

  Entonces, el elemento 1 utilizará 3/10 del espacio y el elemento 2
  7/10 del espacio.

**flex-shrink**: Ahora, qué pasa si los elementos de un flexbox son más grandes que su contenedor?. En estos casos los elementos se
deben achicar!. Ahora, al igual que flex-grow, estos se pueden achicar
proporcionalmente según el valor flex-shrink.

- Ejemplo: Hay un contenedor de 500px, y 2 elementos de 200px (setteado por flex-basis). Estos elementos ocupan 400px de espacio, por lo que no se deben achicar. Ahora, ¿que pasa si el contenedor se achica a 250px? en este caso nos faltarían 150px para que quepan ambos elementos. **Por lo tanto, estos 100px deben quitarse de los elementos.**

  Elemento 1 -> flex-shrink: 75;
  Elemento 2 -> flex-shrink: 25;

  Entonces el elemento 1 se achicara en una proporcion 75/100, y el elemento 2 se achicara en una proporcion 25/100. Por lo tanto, el elemento se achicará 75/100 * 150px = 112.5px (de largo si flex direction es row) y el elemento 2 se achicará 25/100 * 150px = 37.5px.

Ahora, si no queremos que un objeto se haga más grande/pequeño, entonces setteamos estos valores en 0. Haciendo esto, la proporción de growing/shrinking será de 0, por lo que los elementos tendrán el width/height del flex-basis.

# minimum size

Además del hipotetical size de un objeto (dado por flex-basis, el tamaño del contenedor y del flex-grow o flex-shrink), hay otra propiedad muy importante que se toma en cuenta en el modo flexbox y esa es el minimum size. Minimum size es la propiedad que indica cual es el tamaño mínimo que puede tener un objeto, y es un hard constraint. O sea, un objeto no se achicará más allá de su minimum size en casos donde flex-shrink esté actuando. En los casos anteriores el contenido va a hacer overflow, ya que su tamaño será más grande que el contenedor.

Cada elemento tiene su minimum size por default. El min-width de elementos que contienen texto es el largo de la palabra más larga.

También existe min-height, pero es menos utilizado.


# Gap

Es una propiedad que nos permite generar espacio entre elementos a lo largo del primary axis.

# Auto margins

Los margenes en flexbox actuan de una forma particular. Recordemos que cuando utilizamos flex-grow, el espacio restante de un contenedor es utilizado con el elemento estirado. Ahora, si utilizamos margin: auto;, entonces el espacio restante será utilizado por el margin.

Auto margin es muy util!

# Wrapping

Esta es una propiedad que permite que los elementos que NO caben dentro de una linea/columna (dependiendo del flex-direction) generen una nueva linea/columna. Por lo tanto, los elementos que no quepan dentro de una linea del flexbox serán llevados a una nueva linea. Solamente si ya no se puede generar una nueva linea, entonces se utilizará el flex-shrink.

Ahora, la nueva linea que se genera es un nuevo mini flexbox dentro de si mismo. Por lo tanto, habrian 2 main axis, y cada uno de los elementos de la linea actuaría de forma independiente.

En este punto donde existen 2 main axis 

---- X ------ X ---->
---- X ------ X ----> 2 filas, 2 main axis (ya que hubo wrapping)

     |        |
---- X ------ X ---->
---- X ------ X ---->
     |        |     
     |        |

     Ahora, las cross axis atraviesan 2 main axis. Si se utiliza align-items, entonces cada fila será tratada como un mini flexbox. Sin embargo, si quiero mover LA FILA de posicion, entonces debo utilizar align-content, ya que se estaría tratando a los elementos de la cross axis como un grupo 