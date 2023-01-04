# DOM (Domain Object Model)

El DOM es una representación de árbol de los elementos de una página HTML. Cada elemento HTML es un "nodo" del árbol, y tienen diversas relaciones entre distintos nodos. 

## Tipos de relaciones en el DOM

- Padre-Hijo-Hermano: Sería del tipo

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

En este caso el elemento con id = "parent" es padre de sus dos elementos hijos "child1" y "child2". Además, entre ambos elementos hijos, ellos son hermanos.

# Seleccionar nodos

Se pueden seleccionar nodos con notación de CSS, o con relaciones nodales (padre-hijo-hermanos etc...s)

## Notación CSS

Por ejemplo, para seleccionar el nodo con id = "display" se podrían ocupar las siguientes expresiones:

- div.display
- .display
- #container > .display
- div#container > div.display

## Notación relacional

Para el mismo ejemplo anterior, se pueden utilizar las siguientes expresiones:

```javascript

// Para seleccionar por relación padre-hijo
const container = document.querySelector('#container');

console.dir(container.firstElementChild);

// Para seleccionar por relación de hermanos
const controls = document.querySelector('.controls');

console.dir(controls.previousElementSibling); //Selecciona al hermano previo
```

# Métodos del DOM

Cuando se carga una página el HTML pasa a ser el DOM. O sea, que los elementos HTML pasan a ser **"nodos"**. Los nodos tienen una alta cantidad de propiedades y métodos, por lo que se pueden manejar!.

## Query Selectors

Existen los query selectors:

- element.querySelector(selector): Retorna una referencia al primer nodo que haga match

- element.querySelectorAll(selectors): Retorna una lista de nodos que hagan match a los selectors

## Creación de elementos

- document.createElement(tagName, [options]). No pescar options por ahora. Por ejemplo:

```javascript
const div = document.createElement('div')
```

Este método solo crea el elemento, pero no lo pone en el DOM. De esa forma se puede manipular, editar antes de ponerlo en el DOM

## Agregar elementos al DOM

- parentNode.appendChild(childNode). Agrega el nuevo nodo al final del parentNode

- parentNode.insertBefore(newNode, referenceNode). Agrega el nuevo nodo dentro de parentNode, y antes de referenceNode. 

## Quitar elementos del DOM

- parentNode.removeChild(child). Remueve el nodo child del parentNode, y lo retorna. 

## Alterar elementos

Si se tiene la referencia a un elemento del DOM, este se puede alterar de diversas formas.

```javascript
const div = document.createElement('div');

div.style.color = 'blue'; // Pone la letra azul
div.style.cssText = 'color: blue; background: white;';
div.setAttribute('style', 'color: blue; background: white;')
```

## Editar atributos

```javascript
div.setAttribute('id', 'theDiv');

div.getAttribute('id');

div.removeAttribute('id');
```

## Editar clases

Se hace con element.classList

```javascript
div.classList.add('new'); // Agrega la clase new al elemento div

div.classList.remove('new'); // Remove la clase new al elemento div

div.classList.toggle('active') // Agrega o remueve (dependiendo el caso) la clase 'active'.
```

## Agregar contenido de texto

```javascript
div.textContent = 'Hello World!';
```

## Agregar contenido al HTML

```javascript
div.innerHTML = '<span>Hello World!</span>';
```

Para agregar texto es mucho mejor textContent


# Diferencia entre el DOM y el HTML

Notar que si se agrega un elemento al DOM a través de JS, el HTML quedará intacto. Ahora, si nosotros ponemos el script JS al inicio del HTML, estos cambios al DOM no se verán, ya que se cargará el HTML luego del JS, y el HTML carece del nuevo elemento. Debido a esto, el script usualmente se pone al final de todo el HTML


# Eventos

A través de los eventos, se puede cambiar una página de forma dinámica frente a acciones que ocurran (clicks, ingreso de información, etc). Además, se pueden asociar funciones a estos eventos.

Hay 3 formas de que esto ocurra, el método de event listeners es el más recomendado:

## Método 1 - Agregar funciones al HTML

Se agrega un atributo referente al evento que debe ocurrir para que se ejecute la función del argumento:

```javascript
<button onclick="alert('Hello World')">Click Me</button>
```

Esta forma es poco recomendada, ya que se mezcla el HTML con el JS (es inline al final)


## Método 2 - Agregar la propiedad "_on_event" al elemento en el DOM desde JS

```html
<button id="btn">Click Me</button>
```

```javascript
const button = document.querySelector('#btn');
button.onclick() = () => alert('Hello World');
```

Este método es mejor, ya que se separa el HTML del JS. Sin embargo, solamente se puede asociar 1 propiedad "onclick" a ese elemento del DOM.

## Método 3 - Agregar event listeners a los nodos en JS

```html
<button id="btn">Click Me Too</button>
```

```javascript
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert("Hello World");
})
```

De esta forma se puede separar el HTML del JS, y además se pueden asociar diversos eventos a un mismo objeto.

# Acceder a la referencia del evento

Si a la función que le damos al event listener le agregamos que pida un argumento, entonces se pasará el objeto evento a la función!. Esto es muy útil, ya que se pueden acceder a muchas propiedades del evento en si:

```javascript
btn.addEventListener('click', function (e) {
  console.log(e); // Se imprime el objeto evento
});
```

Por ejemplo, se puede obtener una referencia del elemento que se clickeo y modificarlo

```javascript
btn.addEventListener('click', function (e) {
  console.log(e.target);
  e.target.style.background = 'blue';
})
```

# Agregar listeners a grupos de nodos

Si se quiere agregar el mismoi listener a un grupo de elementos, entonces se deben seleccionar con .querySelectorAll, y luego iterar por cada uno de los nodos en la lista obtenida. En cada iteración agregar el eventListener a cada nodo.

# Tipos de eventos

- click
- dblclick
- keydown
- keyup

# Event Capture, Propagation and Bubbling

**Bubbling:** es un fenomeno que ocurre cuando se selecciona/triggerea un evento de un elemento HTML que esta anidado dentro de otros. Por ejemplo:

```html
<div class='one'>
  <div class='two'>
    <div class='three'>
      <div class='four'></div>
    </div>
  </div>
</div>
```

Si se asocia a cada elemento un evento, pero se clickea solamente el cuarto, entonces los 4 elementos anidados van a triggerear el evento. Esto, porque el elemento four esta anidado dentro de otros 4 divs. Por lo tanto, es un problema bastante grande que se debe tener en cuenta.

**Event Capture:** Es la captura de eventos de forma up-to-down cuando se clickea un elemento anidado. En el caso anterior, la captura de eventos seria recolectar los eventos de los elementos one, two, three y four.

Ahora, de forma default se genera un call stack cada vez que se captura un evento. O sea, cuando se clickea el elemento four, se genera una call stack de la siguiente manera:

one > two > three > four. 

Primero se ejecuta four, luego three, luego two y luego one. Por lo tanto, primero se capturan los eventos, se genera el call stack, y finalmente se ejecutan las funciones de forma LIFO.

**Stop Propagation:** Ahora, si a la funcion del elemento four le llamamos al evento lo siguiente:

```javascript
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}
```

Entonces la ejecucion del call stack solamente se ejecutara hasta el elemento four, ya que se interrumpe todo el call stack y se deja vacio!. Por lo tanto, asi se evita el fenomeno del bubbling y la llamada de todas las funciones que estan anidadas!


# Knowgledge Check

What is the DOM?
DOM o Domain Object Model es la representacion de los elementos de un HTML en forma de nodo. En esta representacion se puede ver la relacion entre nodos (padre-hijo, hermanos), y cada nodo tiene metodo y propiedades que permiten manipularlos.

How do you target the nodes you want to work with?
Con document.querySelector(nodeSelection)

How do you create an element in the DOM?
document.createElement(element)

How do you add an element to the DOM?
Con parentNode.appendChild(nodo) o parentNode.insertBefore(newNode, referenceNode)

How do you remove an element from the DOM?
Con parentNode.removeChild(nodo)

How can you alter an element in the DOM?
Con node.classList.add()/remove()/toggle(), node.styles.property, node.setAttribute(),
entre otros

When adding text to a DOM element, should you use textContent or innerHTML? Why?
Es mejor utilizar textContent, ya que seria crear un nuevo elemento y editar su texto, lo que es mucho mas ordenado

Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
Al final de toda la ejecucion del HTML. O sea, al final del cuerpo, dentro de un script tag

How do “events” and “listeners” work?
Los listeners escuchan si es que ocurre un evento dentro de una pagina. Si es que ocurre el evento, entonces se ejectura una funcion definida por el usuario

What are three ways to use events in your code?
1. Agregando un atributo al elemento HTML, indicando el evento que va a triggerearlo y la funcion que se va a lanzar
2. Setteando el evento triggeador al elemento dentro de un script de JS
3. Creando eventListeners para el elemento que queremos que sea triggereado

Why are event listeners the preferred way to handle events?
Porque permiten settear diversos eventos para un mismo elemento (un mismo elemento puede ser triggereado por un click, por un tecleo, etc)

What are the benefits of using named functions in your listeners?
Permiten hacer el codigo mucho mas legible

How do you attach listeners to groups of nodes?
Primero, seleccionando el grupo de nodos que queremos linkearlos a un listener con document.querySelectorAll(seleecion). Luego, iterar por la NodeList a traves de un loop (ejemplo: Con un forEach()) y settear el eventListener para cada uno.

What is the difference between the return values of querySelector and querySelectorAll?
querySelector retorna 1 objeto Nodo, mientras que querySelectorAll retorna una NodeList

What does a “nodelist” contain?
Un conjunto de nodos

Explain the difference between “capture” and “bubbling”.
La captura de eventos se hace desde arriba hacia abajo en la jerarquia de elementos, mientras que el bubbling (o call stack) se hace desde abajo hacia arriba en la jerarquia de elementos.
