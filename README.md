A. ¿Qué son los FormControl, FormGroup?

FormControl realiza el seguimiento del valor y el estado de validación de un control de formulario individual.
FormGroup realiza el seguimiento de los mismos valores y estados para una colección de controles de formulario.

B. ¿Como se detectan los cambios en los formularios reactivos? (suscribirse)

Para detectar los cambios en los formularios reactivos, tienes que suscribirte al observable valueChanges que emite el FormControl o FormGroup. Cuando haya un cambio, el FormControl emitirá el nuevo valor a través de valueChanges, y cualquier suscriptor recibirá este valor.

C. ¿Cómo se vinculan los formularios reactivos con la interfaz de usuario Angular?

Los formularios reactivos se vinculan a la interfaz de usuario en Angular utilizando las directivas [formGroup] que sus campos están definidos en el componente y formControlName que vincula cada campo de el formulario con los campos de el FormGroup.

D. ¿Como se envían los datos del formulario reactivo a un servidor en angular?

Crear un servicio con HttpClient, inyectarlo en el componente con el constructor, y en el método onSubmit usar el servicio para enviar los datos del formulario suscribiéndote a la respuesta.

E. Para que sirve el operador reactivo switchmap.

switchMap se usa para manejar solo el último valor emitido, cancelando los anteriores. 
