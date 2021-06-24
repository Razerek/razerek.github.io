 var gridOptions = {
            color: '#f2f2f2',
            GridSize: 15,
            LinesSize: 1
        };
        var ctx;
        window.displayGrid=function() {
            var i, Height, Width, GridSize;
            canvas = document.getElementById("myCanvas");
            if (canvas.getContext) {
                ctx = canvas.getContext("2d");
                var Height = canvas.height;
                var Width = canvas.width;
                ctx.strokeStyle = gridOptions.color;
                ctx.lineWidth = parseInt(gridOptions.LinesSize);
                GridSize = 0;
                GridSize = parseInt(gridOptions.GridSize);
                for (i = 0; i < Height; i += GridSize) {
                    ctx.moveTo(0, i);
                    ctx.lineTo(Width, i);
                    ctx.stroke();
                }
                for (i = 0; i < Width; i += GridSize) {
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, Height);
                    ctx.stroke();
                }
            }
        }