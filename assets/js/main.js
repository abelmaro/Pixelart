var app = new function(){
    this.el = document.getElementById('grilla');
    this.celdas = 660;

    this.generarGrilla = function(){
        for(i=0; i < this.celdas; i++){
            this.el.innerHTML += '<div draggable="false" class="celda" id="celda'+i+'"onclick="app.seleccionarCelda('+i+')"></div>'; 
        }
    } 

    this.seleccionarColor = function(color){
        this.el = document.getElementById('color').value;
        this.colorSelecciado = this.el;
        var goma = document.getElementById('goma');
        var pincel = document.getElementById('pincel');

        if(color == 'borrar'){
            this.colorSelecciado = 'white';
            goma.className += ' seleccionado';
            pincel.className += ' deseleccionado';
            goma.classList.remove('deseleccionado');
        }

        else{
            goma.className += ' deseleccionado';
            pincel.className += ' seleccionado';
            pincel.classList.remove('deseleccionado');
        }
        
    }

    this.seleccionarCelda = function(i){
        this.el=document.getElementById('celda'+i);
        this.el.style.backgroundColor = this.colorSelecciado;
        
    }

    this.borrarTodo = function() {
    this.el = document.getElementsByClassName('celda'); 
        for (var i = 0; i < this.celdas; i++) {
            this.el[i].style.backgroundColor = 'white';
        }
    }

    this.cuadricula = function(consulta){
        for (var i = 0; i < this.celdas; i++) {
            if (consulta == 'ocultar') {
                document.getElementById('celda'+i).style.border ='none';
            }
            else if (consulta == 'mostrar') {
                document.getElementById('celda'+i).style.border = '1px solid rgb(165, 165, 165)';
            }
        }
    }

    this.generarGrilla(); 
    this.seleccionarColor();
  
}