# MEAN-PetStore-HugoParapar

Aplicación Demo implementada como parte del curso Fullstack-MEAN

Se trata de una aplicacion para gestionar las citas a una imaginaria clínica veterinaria.

Utilizaremos la pila MEAN para implementar la gestión de Clientes/Mascotas y dar de alta Citas en un Calendario.


# Demo online

https://petstore-hugoparapar.herokuapp.com/

# Instalación local

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar.git
cd MEAN-PetStore
npm install
npm start
```
En el navegador: localhost:3000


# MEAN: Mongodb + Express + AngularJs + Node.js

![mean](https://user-images.githubusercontent.com/13489323/32271528-9bca1280-befa-11e7-8544-8b28550f43a4.JPG)

![Arquitectura Mean](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/ArquitecturaMean-1.jpg)


# El Proyecto

Se trata de una aplicación para la gestión de Clientes/Mascotas y citas de una clnica veterinaria.

## Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaria 
	-  relacionada con una sola mascota, que a su vez estaria 
		-  relacionada con un solo cliente.


![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/modelo-datos.png)

## Diagrama Flujo Clientes-Mascotas

Diagrama de flujo que representa como se dan de alta Mascotas y Clientes en la aplicacion.

![Diagrama Flujo Clientes-Mascotas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/Diagrama_Flujo_Clientes-Mascotas.png)

## Diagrama Flujo Calendario-Citas

Diagrama de flujo que representa como se dan de alta Citas en el calendario y horario de citas

![Diagrama Flujo Calendario-Citas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/Diagrama_Flujo_Calendario-Citas.png)

## Servicio RESTfull API

| Metodo  |  URL  |  Body  |  Response |
|---|---|---|---|
|  GET  |  api/customers  |  <vacío> |   [Array{JSON}{...}] |
|    |  api/customers/:id  |  <vacío> |  {JSON}|
|    |  api/customers/:id/pets  |  <vacío>  |  {JSON}|
|    |  api/pets/:id  |  <vacío>  | {JSON} |
|    |  api/appointments  |  <vacío> |   [Array{JSON}{...}] |
|    |  api/appointments/:id  |  <vacío> |  {JSON} |
|    |  api/appointments/:fromdate/:todate  |  <vacío>  |  {JSON} |
|  POST  |  api/customers  |  {JSON}  |  {JSON} |
|    |  api/pets  |  {JSON}  |  {JSON} |
|    |  api/appointments  |  {JSON}  |  {JSON} |
|  PUT  |  api/customers/:id  |  {JSON}  |  {JSON} |
|    |  api/pets/:id  |  {JSON}  |  {JSON} |
|    |  api/appointments/:id  |  {JSON}  |  {JSON} |
|  DELETE  |  api/pets/:id  |  {JSON}  |  <vacío>  |


```bash
apiRoutes = require('./routes/api.js');
app.use('/api/',apiRoutes);
```
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/app.js#L13

Fichero encargado de publicar estas 'routes':

https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/routes/api.js


## Todas las pantallas 

Screenshot con enlaces a los ficheros de codigo encargados de implementarlas.

### Gestion de clientes y mascotas

#### Lista Cliente
![clientes](https://user-images.githubusercontent.com/13489323/32342135-d5096040-bfff-11e7-8d18-0184bebdf3bd.JPG)

#### Detalle Cliente
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/tree/master/public/app/customer-detail-module
![customer_pets](https://user-images.githubusercontent.com/13489323/32342138-d56f51d4-bfff-11e7-81ab-db3340b0f0ae.JPG)

#### Detalle Mascota
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/tree/master/public/app/pet-detail-module
![pet](https://user-images.githubusercontent.com/13489323/32342134-d4e65334-bfff-11e7-89ca-bd47fc01ddfb.JPG)

### Gestion de citas

#### Calendario Citas
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/tree/master/public/app/calendar-module
![citas](https://user-images.githubusercontent.com/13489323/32342136-d52b9e94-bfff-11e7-9135-fc303f017e12.JPG)

#### Horarios y Detalles Citas
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/tree/master/public/app/appointments
![detalle_cita](https://user-images.githubusercontent.com/13489323/32342137-d54e0092-bfff-11e7-96c7-b1e25c381f37.JPG)


## Implementación 

### Ejemplo del CRUD de Pets

1. Schema para MongoDB: https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/models/pets.js#L5

2. Servicios REST:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/app.js#L36

a. un enlace a la linea donde esta la definición de la url REST
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/routes/api.js#L3

b. Si usas controllers en el servidor incluye también el enlace al método concreto.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/controller/pets.js

3. Controlador Angular
a. Componente.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/pet-detail-module/pet-detail-module.component.js

b. Componente.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/pet-detail-module/pet-detail-module.html

c. Configuración del Módulo
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/app.module.js#L12

d. Ruta Angular
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/public/app/app.config.js#L42

e. Ficheros <script> incluidos en el index.htm
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/index.html#L25

### Servicios Angular con promesas

Ejemplo en Appointment:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/services/apps-service.js

### Promesas en el servidor y separación de responsabilidades

Ejemplo en Customer:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/commit/fd578e5c214478704962895ce8971d227bb00a4e

### Validaciones

Ejemplo en servidor: Pets:https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/controller/customer.js#L10
y en cliente:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/public/app/customer-detail-module/customer-detail-module.component.js#L22

### Angular Resource

Ejemplo en Pets:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/services/pets-service.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/public/app/pet-detail-module/pet-detail-module.component.js#L26

### Eventos

Preloader en peticiones http:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/commit/04749cf09be62652f011ac2b12b2dc2482e85138
Prueba emit message:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/commit/9071413e91ffcc2e32beb910594e73de2e6e8d0b

### Simplificar maquetación con directivas

Formulario (input y textarea) + datePicker
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/master/public/app/directives/directives.js

### OptimisticLocking 

Prueba en Customer:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/blob/e9c3bd7c882f03188b4e9af043af369c098d7b48/controller/customer.js#L47

### Controlador anidado 

Ejemplo en Appointment:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/issues/43

### SocketIO 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/HugoParapar/commit/f631373dac479c39df12ef4f49a6c9af628c7dcf
