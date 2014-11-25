window.onload = function() {

  var myCanvas = document.getElementById("canvas");

  var curColor = $('#selectColor option:selected').val();

  var curRadius = $('#selectRadius option:selected').val()

    if(myCanvas){
    var isDown  = false;
    var ctx = myCanvas.getContext("2d");
    var canvasX, canvasY;
                                 
    $(myCanvas)
        .mousedown(function(e){
        isDown = true;
        ctx.beginPath();
        canvasX = e.pageX - myCanvas.offsetLeft;
        canvasY = e.pageY - myCanvas.offsetTop;
        ctx.moveTo(canvasX, canvasY);
    })

        .mousemove(function(e){
        if(isDown != false) {
        canvasX = e.pageX - myCanvas.offsetLeft;
        canvasY = e.pageY - myCanvas.offsetTop;
        ctx.lineTo(canvasX, canvasY);
        ctx.strokeStyle = curColor;
        ctx.lineWidth = curRadius;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
    }
 })
        .mouseup(function(e){
            isDown = false;
            ctx.closePath();
     });
 }
                 
    $('#selectColor').change(function () {
        curColor = $('#selectColor option:selected').val();
   });

    $('#selectRadius').change(function () {
        curRadius = $('#selectRadius option:selected').val();
   });
                
};