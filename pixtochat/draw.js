window.onload = function () {

            //initial values
            var currentColor = "black"; 
            var currentWidth = 1;
            
            var colors = {};            
            colors["black"] = "#000000";
            colors["white"] = "#FFFFFF";
          
            var width = {};
            width["small"] = 1;
            width["large"] = 3;

            var clear = document.getElementById('clearButton');
            var eraser = document.getElementById('eraser');
            var canvas = document.getElementById('sheet');
            var displayWidth = document.getElementById('swidth')
            var displayColor = document.getElementById('scolor');
            
            // Get a reference to the drawing context 
            // 
            const ctx = canvas.getContext('2d');
            
            var pencil = new tool();
            var eraser = new tool();

            // This painting tool works like a drawing pencil which tracks the mouse 
            // movements.

            function tool() {
                
                var tool = this;
                this.started = false;

                this.mousedown = function (event) {
               
                //set color and width
                    ctx.strokeStyle = currentColor;
                    ctx.lineWidth = currentWidth;

                    ctx.beginPath();     
                    ctx.moveTo(event._x, event._y);
                    tool.started = true;
                };

                this.mousemove = function (event) {                                        
                    if (tool.started) {                           
                        ctx.lineTo(event._x, event._y);                        
                        ctx.stroke();
                    }
                };

                this.mousemove = function (event) {                                        
                    if (tool.started) {                           
                        ctx.lineTo(event._x, event._y);                        
                        ctx.stroke();
                    }
                };

                this.mouseup = function (event) {                    
                    if (tool.started) {                        
                        tool.mousemove(event);
                        tool.started = false;
                    }
                };
            }
                      
            function onMouseEvent (event) {
                var x, y;

                // Get the mouse position relative to the canvas element.
                // 
                if (event.layerX || event.layerX == 0) { // Firefox
                    x = event.layerX;
                    y = event.layerY;
                } else if (event.offsetX || event.offsetX == 0) { // Opera
                    x = event.offsetX;
                    y = event.offsetY;
                }

               event._x = x;
               event._y = y;
                
               // Call the event handler of the tool.
               var func = pencil[event.type];
               if (func) {
                   func(event);
               }
            }            
            
                var erhandler = eraser[event.type];
                if(erhandler){
                    erhandler(event);
                }

            function onClearEvent(event) {
                pencil.started = false;   
                eraser.started = false;             
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            
            function onClickEvent(event){
                var selectedColor = event.srcElement.id;   
                var selectedWidth = event.srcElement.id;              
                displayColor.innerHTML = selectedColor;
                displayWidth.innerHTML = selectedWidth;
                currentColor = colors[selectedColor];  
                currentWidth = width[selectedWidth];              
            }
            
            canvas.addEventListener('mousedown', onMouseEvent, false);
            canvas.addEventListener('mousemove', onMouseEvent, false);
            canvas.addEventListener('mouseup', onMouseEvent, false);
            clear.addEventListener('click', onClearEvent, false);
            
            var black = document.getElementById('black');
            var white = document.getElementById('white');
            
            black.addEventListener('click', onClickEvent, false);
            white.addEventListener('click', onClickEvent, false);
                  
        };