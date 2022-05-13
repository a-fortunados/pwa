$(document).ready(function () {
  $('#borrarInputs').on('click', () => {
    $('#inputNombre').val('');
    $('#inputEmpresa').val('');
    $('#inputTelefono').val('');
    $('#inputEmail').val('');
    $('#inputComentarios').val('');
  });

  function ajaxCall(url, type) {
    return $.ajax({
      url: url,
      type: type,
    });
  }

  /* $.validator.addMethod(
    'alreadyExists',
    function (value, element) {
      let existeMail = false;
      let mailsDistintos = 0;
      ajaxCall('http://localhost/tp1y2php/View/buscarEmails.php', 'GET')
        .then((data) => {
          let arrMails = JSON.parse(data);
          $(arrMails).each(function (i) {
            if ($(arrMails)[i].Mail != value) {
              mailsDistintos = mailsDistintos + 1;
            }
          });
          console.log(mailsDistintos, arrMails.length);
          if (mailsDistintos == arrMails.length) {
            existeMail = true;
          }
          console.log(existeMail);
          return this.optional(element) || existeMail;
        })
        .catch((error) => console.log('error: ', error)); */
  /*       console.log(arrMails);
      console.log(arrMails.responseText); */
  /*  $.ajax({
        url: 'http://localhost/tp1y2php/View/buscarEmails.php',
        type: 'GET',
        success: function (mails) {
          let arrMails = JSON.parse(mails);
          $(arrMails).each(function (i) {
            if ($(arrMails)[i].Mail != value) {
              cuentaMailsDistintos = cuentaMailsDistintos + 1;
            }
          });
          console.log(cuentaMailsDistintos, arrMails.length);
          if (cuentaMailsDistintos < arrMails.length) {
            console.log('entroif');
            existeMail = false;
          }
        },
        error: function () {
          console.log('error, no se pudo hacer la consulta');
        },
      });
      console.log(existeMail);
      return this.optional(element) || existeMail; */
  /*     },
    'Este mail ya se encuentra registrado'
  ); */

  $.validator.addMethod(
    'formatoCorrectoMail',
    function (value, element) {
      var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
      return this.optional(element) || pattern.test(value);
    },
    'Formato del email incorrecto'
  );

  $('#form').validate({
    // event: 'blur',
    rules: {
      inputNombre: {
        required: true,
        minlength: 8,
      },
      inputEmpresa: {
        required: true,
        minlength: 12,
      },
      inputTelefono: {
        required: true,
        minlength: 10,
      },
      inputEmail: {
        required: true,
        formatoCorrectoMail: true,
      },
      inputComentarios: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      inputNombre: {
        required: 'Por favor indicar nombre',
        minlength: 'El nombre debe tener al menos 8 caracteres',
      },
      inputEmpresa: {
        required: 'Por favor indicar el nombre de la empresa',
        minlength: 'El nombre debe tener al menos 12 caracteres',
      },
      inputTelefono: {
        required: 'Por favor, indicar un telefono',
        minlength: 'El telefono debe tener al menos 10 numeros',
      },
      inputEmail: {
        required: 'Por favor, indicar un email',
      },
      inputComentarios: {
        required: 'Por favor indicar comentario',
        minlength: 'El comentario debe tener al menos 10 caracteres',
      },
    },
    debug: true,
    errorElement: 'label',
  });

  function revisarMails(arrMails, emailFormVal) {
    let existeMail = false;
    let i = 0;
    arrMails.forEach((mail) => {
      if (mail.Mail == emailFormVal) {
        existeMail = true;
        $('#inputEmail').addClass('border-2 border-danger');
        $('#ayudaEmail').html('El Email ya se encuentra registrado');
        $('#ayudaEmail').addClass('text-danger');
      }
    });
    if (existeMail == false) {
      $('#inputEmail').removeClass('border-2 border-danger');
      $('#inputEmail').addClass('border border-success');
      $('#ayudaEmail').html('');
    }
    /*     do {
      if (arrMails[i].Mail == emailFormVal) {
        existeMail = true;
        $('#inputEmail').addClass('border-2 border-danger');
        $('#ayudaEmail').html('El Email ya se encuentra registrado');
        $('#ayudaEmail').addClass('text-danger');
      } else {
        $('#inputEmail').removeClass('border-2 border-danger');
        $('#inputEmail').addClass('border border-success');
        $('#ayudaEmail').html('');
      }
      console.log(existeMail);
      i = i + 1;
    } while (existeMail == false && i < arrMails.length - 1); */
    return existeMail;
  }

  $('#enviarContacto').click((e) => {
    e.preventDefault();
    /* Traer los contactos -> email registrados */
    $.ajax({
      url: 'http://localhost/tp1y2php/View/buscarEmails.php',
      type: 'GET',
    }).done(function (mails) {
      let arrMails = JSON.parse(mails);
      let existeMail = revisarMails(arrMails, $('#inputEmail').val());
      if ($('#form').valid() == true && !existeMail) {
        $.ajax({
          url: 'http://localhost/tp1y2php/View/enviarContacto.php',
          type: 'POST',
          data: {
            nombre: $('#inputNombre').val(),
            empresa: $('#inputEmpresa').val(),
            telefono: $('#inputTelefono').val(),
            mail: $('#inputEmail').val(),
            comentario: $('#inputComentarios').val(),
            action: 'insert',
          },
          success: function () {
            $('.alerta').html(`<div class="alert alert-success" role="alert">
              Contacto enviado correctamente</div>`);
            setTimeout(() => {
              $('.alerta').html('');
            }, 3000);
          },

          error: function () {
            $('.alerta').html(`<div class="alert alert-error" role="alert">
          No se pudo enviar el contacto, revise los campos.</div>`);
          },
        });
      }
    });
  });
});
