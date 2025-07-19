# Mi Tienda - E-commerce

Este proyecto es una aplicación de comercio electrónico desarrollada con React y React-Bootstrap. Permite a los usuarios explorar productos, ver detalles, agregar productos al carrito y realizar un seguimiento del total de su compra.

## Características

- **Exploración de productos**: Los usuarios pueden navegar por una lista de productos obtenidos desde una API externa.
- **Detalles del producto**: Cada producto tiene una página de detalles con imágenes y descripción.
- **Carrito de compras**:
  - Agregar productos al carrito.
  - Incrementar o disminuir la cantidad de productos.
  - Ver el subtotal por producto y el total general de la compra.
- **Productos relacionados**: En la página de detalles de un producto, se muestran productos de la misma categoría.
- **Notificaciones**: Se utiliza SweetAlert2 para notificar al usuario cuando un producto es agregado al carrito.
- **Diseño responsivo**: La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla utilizando React-Bootstrap.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React-Bootstrap**: Para el diseño y los componentes estilizados.
- **React-Router**: Para la navegación entre páginas.
- **SweetAlert2**: Para mostrar notificaciones al usuario.
- **API externa**: Los productos se obtienen desde [fakeapi_platzi](https://fakeapi.platzi.com/en/rest/products/).

## Estructura del proyecto

- **`src/component`**: Contiene los componentes reutilizables como `CardComponent`, `Cart`, `etc...`.
- **`src/context`**: Contiene los estados globales del carrito y de autenticación
- **`src/service`**: Contiene los servicios para interactuar con la API externa.
- **`src/routes`**: Define las rutas de la aplicación.

## Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone git@github.com:ArielEzequielPerez/proyecto_final.git

2. Instala las dependencias:
    ```bash
    npm install

3. Inicio el proyecto en local:
    ```bash
    npm run dev

4. Abre la aplicación en tu navegador en [aqui](http://localhost:3000).

## Cómo desplegar el proyecto en local usando Docker

1. Asegúrate de tener Docker y Docker Compose instalados en tu máquina. Si no los tienes, puedes descargarlos desde:
   - [Docker](https://www.docker.com/products/docker-desktop)

2. Construye y ejecuta el contenedor con Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Una vez que el contenedor esté en ejecución, abre tu navegador y accede a la aplicación en:
   [http://localhost:8000](http://localhost:8000)

4. Para detener el contenedor, ejecuta:
   ```bash
   docker-compose down
   ```

### Notas
- El proyecto se ejecutará en el puerto `8000` de tu máquina local.
- Los cambios realizados en el código fuente se reflejarán automáticamente gracias al volumen configurado en `docker-compose.yml`.
