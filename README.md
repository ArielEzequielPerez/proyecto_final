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
- **API externa**: Los productos se obtienen desde [Fake Store API](https://api.escuelajs.co/api/v1/products).

## Estructura del proyecto

- **`src/component`**: Contiene los componentes reutilizables como `CardComponent`, `Cart`.
- **`src/hooks`**: Contiene el hook `useCart` para manejar la lógica del carrito.
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
