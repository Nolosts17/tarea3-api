## COnfiguracion de la APi Rest CURD a la BAse de datos

Una vez descargado el proyecto utilizar el comando

### `npm i`

Para descargar todas las dependencias requeridas desde package.json


Para la conexion con la base de datos configurar en el archivo confing.js segun se requiera.

### `HOST=host`
### `DATABASE=database`
### `USER=user`
### `PASSWORD=password`

Configure los controllers, ruotes y app.js segun requiera la logica de su base de datos.
Por cada tabla debera generar un controller y un routes.

En general para el consumo de los datos de la base de datos. Se crearan las funciones:

###    getProductos,
###    getProduct,
###    addProducto,
###    updateProducto,
###    deleteProducto

Mismas que premiten la interaccion con la base de datos.

REalizadas las configuraciones indicadas utilizar el siguiente comando para correr la APi

### `npm run dev`

Si el proyecto esta funcionando correctamente se debe de validar en consola el siguiente mensaje:

### `Server on port 4000`

El proyecto esta configurado para correr localmente desde
 [http://localhost:4000](http://localhost:4000).

 