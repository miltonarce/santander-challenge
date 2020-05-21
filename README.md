# Santander-Challenge

By Milton Arce

# Instrucciones para correr la aplicación

- Ir a la carpeta front (cd front) y correr los siguientes comandos.

> npm install
> npm start

Listo la app debería estar corriendo en http://localhost:5000/

# General

Siguiendo el enunciado del challenge y consultado previamente con rrhh. Se realizo solamente la parte de front, por lo cual a lo largo de la app se encontraran con data mockeada, o harcodeada con respecto a los servicios mas que nada. Sí, se imita el hecho de consumir un servicio,  esto se hace creando una promesa y devolviendo los valores a través de la api axios, como por ejemplo en el caso de los usuarios, ya que no hay un servicio ni una DB, se trabajo con dos tipos de usuarios:

- Usuario: admin | Password: 1234
- Usuario: user | Password: 1234

Y esto es lo que finalmente devuelve la promesa.

Luego del lado de las meetups creadas como no se hace un insert en la DB  y se simula esta misma con el store de redux, se utilizo un flag (solo para este contexto front) que pregunta si el store cambió para ir a buscar la data nuevamente y asi evitar que cuando creamos una meetup nueva y volvemos a home no se pise el store con la data que se trae mockeada del archivo json. Logicamente en un caso normal no habria flag se haria el insert y la request para traer las meetups siempre traeria la ultima meetup agregada y ordenada.

Algo similar paso con las notificaciones, se creo una Array(Cola de notificaciones), las cuales solo le van a llegar al usuario "user" y las vera solo la primera vez que ingrese y que se haya creado una meetup por parte del admin previamente, luego seran borradas. Desde la misma notificación se puede acceder a la meetup rapidamente haciendole click. Como antes mensione todo esto para simular notificaciones.

En algunos casos directamente hago un handle al store de redux sin pasar por el servicio, ya que me parece inencesario por que demostre hacerlo en otros casos como (create , fetch, etc) y para ahorrar tiempo directamente lo maneje con una action de redux.

- DISCLAIMER: En lineas generales se trato de "adaptar" un poco la app para que funcione todo el flujo,y así se pueda probar y no tener "supuestos".

# WORKFLOW

- Para probrar al máximo la app, no es necesario abrir dos pestañas ya que esto no funcionara por que solo se realizo la parte de front.

- En la misma pestaña primero entrar como Admin probar lo que se requiera (Asistir a un evento, Crear un evento).

- Hacer logout e ingresar como user y luego provar lo que se requiera (asistir a un evento, ver notificaciones si se crearon nuevos eventos previamente).

# Tecnologías usadas

- React
- Redux, Redux-Thunk
- Antd
- Less
- Webpack
- Cypress








