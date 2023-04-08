let curso="Photoshop";


const mostrar = () =>{


   // document.getElementById("x").style.display="none";


   document.getElementById("inscripcion").style.display="none";
   document.getElementById("confirm").style.display="block";
   let titleMensaje = document.getElementById("card-titulo").innerHTML;
   let inicioCurso = document.getElementById("card-li-5").innerHTML;
   let modalidad = document.getElementById("card-li-1").innerHTML;
   let encuentros = document.getElementById("card-li-3").innerHTML;
   document.getElementById("menssajeConfirm").innerHTML="Estas seguro que quieres registrarte en el curso de "+titleMensaje+"?";
   document.getElementById("mensajeInfo").innerHTML=inicioCurso+"<br/>"+modalidad+"<br/>"+encuentros;

    

    //let modal = new bootstrap.Modal(document.getElementById("modalConfirmacion"));
    //modal.show();

    //var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    /*
    Array.prototype.slice.call(forms).forEach(function (form) {

        form.addEventListener('submit', function (event) {
            
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }else{
               
            }
            form.classList.add('was-validated')
        }, 
        false)
        })
*/


}

const atras = () =>{

    document.getElementById("inscripcion").style.display="block";

    document.getElementById("confirm").style.display="none";

}


const aceptar = () =>{

    $("#modalInscripcion").on("hidden.bs.modal", function () {
        document.getElementById("confirm").style.display="none";
    document.getElementById("inscripcion").style.display="block";
});


    //let modal = new bootstrap.Modal(document.getElementById("modalInscripcion"));
   // modal.show();
   //document.getElementById("confirm").style.display="none";
   // document.getElementById("inscripcion").style.display="block";



}



const mostrarPhotoshop = () => {
    curso="Photoshop";
    document.getElementById("card-imagen").src="https://i.imgur.com/kN6KtKB.png";
    document.getElementById("card-imagen").alt="imgPhotoshop";
    document.getElementById("card-titulo").innerHTML="<strong>Photoshop</strong>";
    document.getElementById("card-text").innerHTML = "En este curso de Photoshop aprenderás a editar imagenes y fotografías, así como realizar retoques digitales de manera profesional. Por lo tanto, aprenderás a utilizar la interfaz y las herramientas que facilitan la creación y edición de imágenes: panel de capas, selección y transformación, filtros, objetos inteligentes, y mucho más.";

    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Online";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 3 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 1 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 4GB de memoria RAM y un microprocesador Intel Core i3";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Miercoles 26 de Abril de 18:00 a 20:00hs";
};

const mostrarIllustrator = () => {
    curso="Illustrator";
    document.getElementById("card-imagen").src="https://i.imgur.com/PZxWmoW.png";
    document.getElementById("card-imagen").alt="imgIllustrator"
    document.getElementById("card-titulo").innerHTML="<strong>Illustrator</strong>";
    document.getElementById("card-text").innerHTML = "Aprenderás a usar el Poder de Adobe Illustrator CC, uno de los software más amplios, potentes y usado en el mercado de las artes gráficas, la publicidad y la ilustración. En este curso aprenderás Illustrator desde lo más básico hasta los pasos más avanzados, desde hacer formas hasta crear diseños más complejos como un afiche, un aviso de revista y la papelería corporativa de una empresa.";

    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Presencial";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 2 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 2 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 4GB de memoria RAM y un microprocesador Intel Core i3";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Lunes 15 de Marzo de 17:00 a 19:00hs.";
};

const mostrarPython = () => {
    curso="Python";
    document.getElementById("card-imagen").src="https://i.imgur.com/9GKy2dt.png";
    document.getElementById("card-imagen").alt="imgPython"
    document.getElementById("card-titulo").innerHTML="<strong>Python</strong>";
    document.getElementById("card-text").innerHTML ="Bienvenidos a este curso de Python Paso a Paso, el mismo ha sido confeccionado para introducir a aquellas personas que nunca han tenido contacto con un lenguaje de programación en los conceptos más básicos del lenguaje, desde cómo realizar la instalación, cómo utilizar un editor de texto o realizar el seguimiento de errores en el código desarrollado. Durante este curso nos familiarizaremos con lo básico del lenguaje tratando de contestar a las preguntas más habituales que los nuevos alumnos pueden tener."
    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Presencial";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 4 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 3 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 1GB de memoria RAM y un microprocesador Intel Core i3";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Lunes 26 de Marzo de 16:00 a 18:00hs.";
};

const mostrarJava = () => {
    curso="Java";
    document.getElementById("card-imagen").src="https://i.imgur.com/9CyLOS3.png";
    document.getElementById("card-imagen").alt="imgJava"
    document.getElementById("card-titulo").innerHTML="<strong>Java</strong>";
    document.getElementById("card-text").innerHTML ="En este curso de Java aprenderás a dominar este lenguaje de programación desde cero a experto, lo cual te permitirá crear aplicaciones de escritorio siguiendo las buenas prácticas de programación en Java.Durante el estudio de este curso de Java desarrollarás un sistema de ventas para una farmacia, el cual es un proyecto similar a muchos que encontrarás frecuentemente en tu camino como programador.";
    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Online";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 5 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 2 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 2GB de memoria RAM y un microprocesador Intel Core i3";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Jueves 20 de Mayo de 15:00 a 17:00hs.";
};

const mostrarJavascript = () => {
    curso="Javascript";
    document.getElementById("card-imagen").src="https://i.imgur.com/aa3VpMV.png";
    document.getElementById("card-imagen").alt="imgJavascript"
    document.getElementById("card-titulo").innerHTML="<strong>Javascript</strong>";
    document.getElementById("card-text").innerHTML ="JavaScript es un lenguaje de programación de páginas web de lado del cliente: cuando estamos viendo una página que utiliza JavaScript, hemos descargado el código a nuestro navegador y este lo ejecuta de acuerdo con las acciones realizadas en la página. El Objetivo general es conocer Javascript desde un punto de vista práctico y, al mismo tiempo, utilizar varias herramientas para dotar de dinamismo y funcionalidad a los sitios web en html.";
    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Online";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 6 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 1 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 2GB de memoria RAM y un microprocesador Intel Core i3";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Miercoles 15 de Mayo de 14:00 a 16:00hs.";
};



const mostrarIngles = () => {
    curso="Ingles";
    document.getElementById("card-imagen").src="https://i.imgur.com/yl4JLWQ.png";
    document.getElementById("card-imagen").alt="imgIngles"
    document.getElementById("card-titulo").innerHTML="<strong>Ingles</strong>";
    document.getElementById("card-text").innerHTML ="En el curso se desarrollan las cuatro macrohabilidades de la lengua: comprensión y producción oral (Listening and Speaking) y comprensión y producción escrita (Reading and Writing). El enfoque es comunicativo, ya que se aprende con un fin de comunicación auténtica en contextos sociales, laborales y de viajes.";
    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Presencial";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 4 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 2 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Conocimientos basicos del ingles";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Martes 10 de Marzo de 14:00 a 16:00hs.";
};

const mostrarItaliano = () => {
    curso="Italiano";
    document.getElementById("card-imagen").src="https://i.imgur.com/SookX1Y.png";
    document.getElementById("card-imagen").alt="imgItaliano";
    document.getElementById("card-titulo").innerHTML="<strong>Italiano</strong>";
    document.getElementById("card-text").innerHTML ="El  curso de italiano proponen un enfoque comunicativo a través del desarrollo de habilidades orales y escritas desde los niveles iniciales. Los programas están dirigidos al uso auténtico de la lengua actual en un ambiente distendido donde se aborda la cultura italiana en su sentido más amplio.";
    document.getElementById("card-li-1").innerHTML="<strong>Modalidad:</strong> Presencial";
    document.getElementById("card-li-2").innerHTML="<strong>Duracion:</strong> 4 meses.";
    document.getElementById("card-li-3").innerHTML="<strong>Encuentros:</strong> 2 encuentro semanal.";
    document.getElementById("card-li-4").innerHTML="<strong>Requisitos:</strong> Ninguno";
    document.getElementById("card-li-5").innerHTML="<strong>Inicia:</strong> Jueves 18 de Marzo de 15:00 a 17:00hs.";
};



const textConfirmacion = () =>{

    document.getElementById("confirmacionInscrip").innerHTML="Estas seguro que quieres registrarte en el curso <strong>"+curso+"</strong>?";
}