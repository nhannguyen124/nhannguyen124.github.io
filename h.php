<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keysystem</title>
    <style>
        * { margin: 0; padding: 0; }
        html, body { width: 100vw; height: 100vh; }
        canvas {
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            background-color: black;
        }
        #keyValue {
            color: white;
            font-size: 24px;
            font-family: Arial, sans-serif;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    </style>
</head>
<body>
    <canvas id="test"></canvas>
    <div id="keyValue">Don't bypass the Gamelean keysystem</div>

    <script>
        function create() {
            time = 0;
            count = 0;

            for (var i = 0; i < arc; i++) {
                parts[i] = {
                    x: Math.ceil(Math.random() * w),
                    y: Math.ceil(Math.random() * h),
                    toX: Math.random() * 5 - 1,
                    toY: Math.random() * 2 - 1,
                    c: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * size
                }
            }
        }

        function particles() {
            ctx.clearRect(0, 0, w, h);
            canvas.addEventListener('mousemove', MouseMove, false);
            for (var i = 0; i < arc; i++) {
                var li = parts[i];
                var distanceFactor = DistanceBetween(mouse, parts[i]);
                distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);
                ctx.beginPath();
                ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
                ctx.fillStyle = li.c;
                ctx.strokeStyle = li.c;
                if (i % 2 == 0)
                    ctx.stroke();
                else
                    ctx.fill();

                li.x = li.x + li.toX * (time * 0.05);
                li.y = li.y + li.toY * (time * 0.05);

                if (li.x > w) {
                    li.x = 0;
                }
                if (li.y > h) {
                    li.y = 0;
                }
                if (li.x < 0) {
                    li.x = w;
                }
                if (li.y < 0) {
                    li.y = h;
                }
            }
            if (time < speed) {
                time++;
            }

            setTimeout(particles, 1000 / rate);
        }

        function MouseMove(e) {
            mouse.x = e.layerX;
            mouse.y = e.layerY;
        }

        function DistanceBetween(p1, p2) {
            var dx = p2.x - p1.x;
            var dy = p2.y - p1.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        var w = window.innerWidth,
            h = window.innerHeight,
            canvas = document.getElementById('test'),
            ctx = canvas.getContext('2d'),
            rate = 60,
            arc = 100,
            time,
            count,
            size = 7,
            speed = 20,
            parts = new Array(),
            colors = ['purple', 'pink', 'blue', 'purple', 'purple'];
        var mouse = { x: 0, y: 0 };

        canvas.setAttribute('width', w);
        canvas.setAttribute('height', h);

        document.addEventListener('DOMContentLoaded', function() {
            create();
            particles();
        });
    </script>
</body>
</html>
