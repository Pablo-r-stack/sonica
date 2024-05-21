const iconoCompra = "img/icons/iconocompra.png"; 
const pregunta1 = "Como comprar en Sónica?";
const respuesta1 = "Podes comprar tus entradas una vez logueado con tu cuenta. Hace click en la ventana y compra las entradas.";
const iconoEntrega = "img/icons/iconoentrega.png"; 
const pregunta2 = "Métodos de entrega";
const respuesta2 = "Una vez efectuada la compra te llegarán las entradas a tu email asociado a tu cuenta. Seguí las indicaciones del mismo.";
const iconoPoliticas = "img/icons/iconopoliticas.png";
const pregunta3 = "Políticas de acceso a nuestros eventos"; 
const respuesta3 = "Los menores de 18 años deben ser acompañados por un mayor. No se pueden ingresar elementos considerados de riesgo.";
const iconoReembolso = "img/icons/iconoreembolso.png";
const pregunta4 = "Política de reembolso";
const respuesta4 = "Ante la eventual cancelación del evento por parte del organizador, sera restituido el monto total al momento de la compra dentro de un lapso de 60 días.";


// Función para agregar una nueva pregunta al documento
const cartaPregunta = document.querySelector(".carta-pregunta");
const template = document.querySelector("template");
    
function agregarPregunta(iconoSrc, titulo, contenido) {
    // Clonar el template
    const node = template.content.cloneNode(true);
  
    // Modificar el contenido del clon con los datos proporcionados
    node.querySelector('#icono').src = iconoSrc;
    node.querySelector('h4').textContent = titulo;
    node.querySelector('p').textContent = contenido;
  
    // Agregar el clon al documento
    document.querySelector('.preguntas').appendChild(node);
  }
  
  // Llamar a la función para agregar preguntas
  agregarPregunta(iconoCompra, pregunta1, respuesta1);
  agregarPregunta(iconoEntrega, pregunta2, respuesta2);
  agregarPregunta(iconoPoliticas, pregunta3, respuesta3);
  agregarPregunta(iconoReembolso, pregunta4, respuesta4);
