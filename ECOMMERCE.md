Preguntas y Respuestas del Proyecto EcommerceNestJS
David Bautista Arroyo
¿Para qué sirve el Widget scaffold?
No aplica directamente en este proyecto, ya que es NestJS (backend). En Flutter, Scaffold organiza la estructura visual de una pantalla.

¿De dónde vienen los iconos, colores y temas de flutter?
No aplica aquí. En Flutter, provienen de la librería Material y pueden ser personalizados.

¿El comando dart pub get se usa para instalar librerías de flutter?
a) Falso b) Verdadero
No aplica aquí. En Flutter, es Verdadero.

Gabriel González
¿En alguna parte del código se utilizan rutas?
Verdadero
Sí, en NestJS se definen rutas en los controladores, por ejemplo: /auth/login en auth.controller.ts.

¿El login está validado?
Verdadero
Sí, el login se valida en el backend usando DTOs y servicios (auth.service.ts).

¿flutter run es para correr la aplicación?
Falso
No aplica aquí. Para NestJS, se usa npm run start o npm run start:dev.

Justino Andrade
¿Cuál es el propósito principal del widget BlocProvider en este código?
No aplica aquí. En Flutter, BlocProvider provee instancias de BLoC/Cubit a los widgets descendientes.

¿Qué página se muestra primero según MaterialApp?
No aplica aquí. En NestJS, la ruta inicial depende del frontend.

¿Qué efecto tiene debugShowCheckedModeBanner: false?
No aplica aquí. Es una propiedad de Flutter.

Erik Trujillo Alvarez
¿La página de registro utiliza un controlador para manejar la lógica de validación?
Verdadero
En NestJS, la validación se realiza en el backend usando DTOs y servicios.

¿Se emplea el patrón Provider para la gestión de estado?
Falso
En NestJS, se usa inyección de dependencias y servicios, no Provider.

¿Se implementa navegación entre páginas usando Navigator?
Falso
En NestJS, la navegación es por rutas HTTP, no por Navigator.

Jafet Roque Cruz
¿Qué función tiene el MultiBlocProvider en el código Main.dart?
No aplica aquí. En NestJS, se pueden inyectar múltiples servicios, pero no existe MultiBlocProvider.

¿Qué hace initialRoute: 'login' en MaterialApp?
No aplica aquí. En NestJS, la ruta inicial depende del frontend.

¿Por qué se usa FToastBuilder()?
No aplica aquí. En NestJS, no se usan toasts.

Fernando Ortega Sanchez
¿Cuál es el propósito principal del widget Scaffold en Flutter?
No aplica aquí. En NestJS, la estructura la define el controlador y los servicios.

¿Qué hace el StreamBuilder en Flutter?
No aplica aquí. En NestJS, se pueden usar Observables (rxjs) para flujos de datos.

¿Qué es un StatefulWidget en Flutter?
No aplica aquí. En NestJS, los componentes son clases y servicios.

Fatima Perez Jimenez
¿StreamBuilder se utiliza para escuchar cambios en el estado del correo y contraseña?
No aplica aquí. En NestJS, la validación se hace en el backend.

¿Qué sucede cuando el formulario es válido y se presiona "Iniciar Sesión"?
En NestJS, se ejecuta el método login en el servicio de autenticación.

¿La función dispose() se llama dentro de initState()?
No aplica aquí.

Leonardo Martinez Manzano
¿Con qué comando se ejecuta el proyecto en tu terminal?
npm run start o npm run start:dev para NestJS.

¿Qué tipo de widget es inmutable y no cambia su estado?
No aplica aquí. En NestJS, los DTOs y entidades suelen ser inmutables.

¿Qué característica de Flutter permite ver cambios instantáneos?
No aplica aquí.

Salvador Esteban Domínguez Castillo
¿Qué widget se utiliza para mostrar un campo de texto?
No aplica aquí. En NestJS, los campos se definen en DTOs.

¿Cuál widget organiza otros widgets en columna vertical?
No aplica aquí.

¿Con qué extensión se guardan los archivos de código en Flutter?
No aplica aquí. En NestJS, los archivos son .ts (TypeScript).

Juan Carlos Merino Luna
¿Cuál es el propósito del StreamBuilder?
No aplica aquí.

¿Cómo se habilita/deshabilita el botón "Registrarse"?
En NestJS, la validación se hace en el backend y el frontend decide la habilitación.

¿Por qué se usa WidgetsBinding.instance.addPostFrameCallback?
No aplica aquí.

Omar Anzures Campos
Afirmación sobre BlocProvider y LoginBlocCubit
No aplica aquí.

Afirmación sobre validación en RegisterPage
En NestJS, la validación ocurre en el backend al recibir la solicitud.

Afirmación sobre fondo de imagen en registro/login
No aplica aquí.

Maricruz Portada Gonzalez
¿Qué archivo se crea al ejecutar nest g module auth?
auth.module.ts

¿Qué archivo se actualiza automáticamente al generar el módulo auth?
app.module.ts

¿Qué comando se utiliza para generar un controlador sin archivo de pruebas?
nest g controller auth --no-spec

Rodrigo Zuriel Rojas Cortes
¿Propósito de SingleChildScrollView en RegisterPage?
No aplica aquí.

¿Efecto de color y colorBlendMode en Image.asset?
No aplica aquí.

¿Qué sucede si el formulario no es válido?
En NestJS, la validación impide el registro y retorna error.

Raúl Juarez Suarez
¿Valor por defecto de obscureText en DefaultTextfield?
No aplica aquí.

¿DefaultTextfield puede recibir FocusNode?
No aplica aquí.

¿Tipo de borde en DefaultTextfield?
No aplica aquí.

Daniel Esaú Negrete Aguilar
¿Es posible registrar un interceptor global en NestJS usando app.useGlobalInterceptors()?
Sí

¿Es obligatorio declarar todos los assets en pubspec.yaml en Flutter?
No aplica aquí.

¿Puede un interceptor en NestJS modificar solicitud y respuesta?
Sí

Brenda Sofia Camacho Santana
¿Qué hace BlocProvider para LoginBlocCubit y RegisterBlocCubit?
No aplica aquí.

¿Propósito de BlocProvider en Flutter?
No aplica aquí.

¿Qué hace el método create en BlocProvider?
No aplica aquí.

Karen Moreno Tellez
¿Qué hace changeEmail en LoginBlocCubit si el correo no pasa la validación?
No aplica aquí.

¿Qué sucede si la confirmación de contraseña no coincide?
En NestJS, se valida en el backend y se retorna error si no coinciden.

¿Para qué sirve obscureText en DefaultTextfield?
No aplica aquí.

Lizeth Hernandez Velez
¿La lista blockProviders inyecta cubits en el árbol de widgets?
No aplica aquí.

¿Cada BlocProvider se crea automáticamente al reconstruir el widget?
No aplica aquí.

¿flutter_bloc gestiona el estado de forma reactiva?
No aplica aquí.

Brandon Martinez Callejo
¿Qué widget permite desplazamiento en Flutter?
No aplica aquí.

¿Cuándo se ejecuta initState() en StatefulWidget?
No aplica aquí.

¿Expanded se usa para ocupar espacio restante?
No aplica aquí.

Mauricio Popoca Coatl
¿Propósito de RegisterBlocCubit en la página de registro?
En NestJS, la lógica de registro se gestiona en el servicio users.service.ts.

¿El método dispose() libera recursos?
En NestJS, los recursos se liberan automáticamente por el framework.

¿Qué ocurre cuando un campo de texto obtiene el foco por primera vez?
No aplica aquí.