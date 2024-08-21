# Obteniendo datos sobre números

En este práctico implementaremos una aplicación que nos permita obtener datos randoms sobre determinados números, fechas y años.
Para ello, se debe completar la componente `App` del presente repositorio.

1. Para comenzar, se debe forkear el siguiente [repositorio](https://github.com/fedevirgolini-itr/numberFacts) y luego clonarlo.
Posteriormente se deben instalar las dependencias y luego inicializar la aplicación para observar lo ya implementado.

Notemos que la aplicación ya cuenta con la interfaz gráfica, que consta de dos secciones:

* Sección número: dónde el usuario ingresa un determinado número para que posteriormente se muestre un hecho sobre el mismo.
* Sección fecha: dónde el usuario ingresa una fecha específica para que posteriormente se muestren hechos sobre la fecha y el año ingresados.

2. Abrir la implementación de la aplicación y leer el código de la componente `App`.
Identificar cada una de sus partes.
Lo importante es entender el comportamiento y razón de ser de cada una de sus partes.

3. Investigar sobre el uso de la API [numbersapi](http://numbersapi.com/#42).
Identificar sus diferentes endpoints y formatos de respuesta.
¿Cómo son los diferentes endpoints que tiene la API?
¿Qué forma tiene cada uno de ellos?
¿Qué se debe hacer para que la API me devuelva un documento en formato json?

4. Terminar de implementar la primera sección de la Aplicación.
Cuando se presiona el botón se debe mostrar un dato sobre el número ingresado.

5. Terminar de implementar la segunda sección de la aplicación.
Al presionar el botón se debe mostrar un dato sobre el día y mes ingresado y también se debe mostrar un dato sobre el año ingresado.
