# backend-fsjs
- creando directorio backend despues tipeamos 
npm init
=====================================================
- despues tipeamos lo siguiente start es el nombre que se le da al elemento en el bloque de scripts en package.json
npm run start
=====================================================
- tipeammos lo siguiente para instalar Express
npm i express
- creara una carpeta llamada node_modules y package-lock.json ese archivo no se modifica ni se edita NO TOCAR
=====================================================
- creando servidor de express, acutalmente ya hay soporte para hacer uso de imports de los modulos de ESM para express, checar sobre este commit para ver la diferencia
=====================================================
- Si checamos los cambios sobre este commit podemos observar que al iniciar el servidor siempre que se inicie carga solo lo que havia existente en ese momento, para cargar cambios se debe reiniciar, eso no es tan viable, cambiemos eso en el siguiente 
=====================================================
- para instalar como desarrollo recordar que se pone -dev
npm i --save-dev nodemon
- podemos observar que en package.json se ve como devDependencies y dependencies las cuales marca cuales son desarrollo y cuales de produccion, ahora bien se agrega una linea en scripts con nodemon igual apuntando a index.js en este caso
- Que es lo que hace Nodemon? R: detecta cada que se hace un cambio y los carga automaticamente en lugar de estar reiniciando manualmente
npm run dev
-   => es el script para correr nodemon(ver pacjage.json)
=====================================================
- Para conectarse a la bd de mongoDB debetemos tipear lo siguiente para instalar la dependencia de Node
npm i mongoose
- la importamos en db.js y creamos un export para consumirla en db.js y apuntar al serve de mongo