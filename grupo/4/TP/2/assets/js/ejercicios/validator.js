// Ejercicio 4 TP2 G4
$(document).ready(function () {
  $("#formularioContacto").bootstrapValidator({
    message: "Este valor no es valido",
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh",
    },
    fields: {
      nombre: {
        message: " Nombre no valido",
        validators: {
          notEmpty: {
            message: " Ingrese el nombre, por favor.",
          },
          regexp: {
            regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
            message: " La primer letra en mayúscula. Solo letras.",
          },
        },
      },
      empresa: {
        message: " Nombre de empresa no valido",
        validators: {
          notEmpty: {
            message: " Ingrese el nombre de la empresa, por favor.",
          },
        },
      },
      telefono: {
        message: " Teléfono no valido",
        validators: {
          notEmpty: {
            message: " Ingrese el nro de teléfono, por favor",
          },
        },
      },
      mail: {
        message: " Email no valido",
        validators: {
          notEmpty: {
            message: " Ingrese el email, por favor",
          },
        },
      },
      comentarios: {
        message: " Comentario no valido",
        validators: {
          notEmpty: {
            message: " Ingrese un comentario, por favor",
          },
        },
      },
    },
  });
});
