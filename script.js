(function () {

    var COUNT = 300;
    var masthead = document.querySelector('.sky');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;
  
    function onResize() {
      width = masthead.clientWidth;
      height = masthead.clientHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF';
  
      var wasActive = active;
      active = width > 600;
  
      if (!wasActive && active)
        requestAnimFrame(update);
    }
  
    var Snowflake = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
  
      this.reset();
    }
  
    Snowflake.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  
    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';
  
    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
      snowflake = new Snowflake();
      snowflake.reset();
      snowflakes.push(snowflake);
    }
  
    function update() {
  
      ctx.clearRect(0, 0, width, height);
  
      if (!active)
        return;
  
      for (i = 0; i < COUNT; i++) {
        snowflake = snowflakes[i];
        snowflake.y += snowflake.vy;
        snowflake.x += snowflake.vx;
  
        ctx.globalAlpha = snowflake.o;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
  
        if (snowflake.y > height) {
          snowflake.reset();
        }
      }
  
      requestAnimFrame(update);
    }
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
    onResize();
    window.addEventListener('resize', onResize, false);
  
    masthead.appendChild(canvas);
  })();

var images = [
  '1630545d-1(1).jpg',
  'cfde8770-1.jpg',
  'P6110014.JPG',
  'P6110016.JPG',
  'P6110018.JPG',
  'P6110050.JPG',
  'P6110065.JPG',
  'P6110116.JPG',
  'P6110117.JPG',
  'P6110124.JPG',
  'P6110125.JPG',
  'P6110133.JPG',
  'P6110134.JPG',
  'P6110148.JPG',
  'P6110163.JPG',
  'P6120173.JPG',
  'P6120175.JPG',
  'P6120181.JPG',
  'P6120186.JPG',
  'P6120187.JPG',
  'P6120214.JPG',
  'P6120219.JPG',
  'P6120225.JPG',
  'P6120228.JPG',
  'P6120229.JPG',
  'P6120233.JPG',
  'P6120245.JPG',
  'P6120248.JPG',
  'P6120252.JPG',
  'P6120253.JPG',
  'P6120257.JPG',
  'P6120259.JPG',
  'P6120263.JPG',
  'P6120268.JPG',
  'P6120270.JPG',
  'P6120271.JPG',
  '20210822_111639.jpg',
  '20210822_111930.jpg',
  '20210822_112107.jpg',
  '20210822_112125.jpg',
  '20210822_112435.jpg',
  '20210822_113232.jpg',
  '20210822_115221.jpg',
  '20210822_115409.jpg',
  '20210822_115802.jpg',
  '20210913_155959.jpg',
  '20210916_131311.jpg',
  '20210918_153947.jpg',
  '20210918_154156.jpg',
  'P1160369.JPG',
  'P1160386.JPG',
  '20210918_160030.jpg',
  '20210918_212849.jpg',
  '20210918_212902.jpg',
  'P1150840.JPG',
  'P1150842.JPG',
  'P1160016.JPG',
  'P1160048.JPG',
  'P1160057.JPG',
  'P1160097.JPG',
  'P1160100.JPG',
  'P1160134.JPG',
  'P1160137.JPG',
  'P1160146.JPG',
  'P1160153.JPG',
  'P1160288.JPG',
  'P1160291.JPG',
  'P1160299.JPG',
  'P1160340.JPG',
  'P1160341.JPG',
  'P1160369.JPG',
  'P1160386.JPG',
  '20210920_200548.jpg',
  '20210920_200603.jpg',
  '20210921_122236.jpg',
  '20210921_133146.jpg',
  '20210921_150305.jpg',
  '20210921_150513.jpg',
  '20210921_152440.jpg',
  '20210923_122231.jpg',
  '20210923_133823.jpg',
  '20210923_134315.jpg',
  '20210923_134721.jpg',
  '20210923_134721.jpg',
  '20210923_135745.jpg',
  '20210923_141805.jpg',
  '20210924_100430.jpg',
  '20210924_113224.jpg',
  '20210924_163144.jpg',
  '20210925_102714.jpg',
  '20210925_163400.jpg',
  '20210925_163737.jpg',
  '20210925_172445.jpg',
  '20210926_113842.jpg',
  '20210926_114351.jpg',
  '20210926_114731.jpg',
  '20210926_115448.jpg',
  '20210926_200206.jpg',
  'IMG-20210925-WA0029.jpg',
  'IMG-20210928-WA0000.jpg',
  'P1160444.JPG',
  'P1160446.JPG',
  'P1160458.JPG',
  'P1160459.JPG',
  'P1160462.JPG',
  'P1160463.JPG',
  'P1160465.JPG',
  'P1160469.JPG',
  'P1160471.JPG',
  'P1160472.JPG',
  'P1160474.JPG',
  'P1160478.JPG',
  'P1160479.JPG',
  'P1160487.JPG',
  'P1160494.JPG',
  'P1160499.JPG',
  'P1160502.JPG',
  'P1160510.JPG',
  'P1160512.JPG',
  'P1160513.JPG',
  'P1160517.JPG',
  'P1160519.JPG',
  'P1160521.JPG',
  'P1160524.JPG',
  'P1160547.JPG',
  'P1160572.JPG',
  'P1160573.JPG',
  'P1160582.JPG',
  'P1160583.JPG',
  'P1160594.JPG',
  'P1160595.JPG',
  'P1160596.JPG',
  'P1160597.JPG',
  'P1160598.JPG',
  'P1160599.JPG',
  'P1160600.JPG',
  'P1160601.JPG',
  'P1160602.JPG',
  'P1160603.JPG',
  'P1160605.JPG',
  'P1160610.JPG',
  'P1160616.JPG',
  'P1160618.JPG',
  'P1160621.JPG',
  'P1160626.JPG',
  'P1160627.JPG',
  'P1160640.JPG',
  'P1160641.JPG',
  'P1160644.JPG',
  'P1160645.JPG',
  'P1160650.JPG',
  'P1160651.JPG',
  'P1160661.JPG',
  'P1160690.JPG',
  'P1160693.JPG',
  'P1160699.JPG',
  'P1160724.JPG',
  'P1160726.JPG',
  'P1160727.JPG',
  'P1160735.JPG',
  'P1160775.JPG',
  'P1160776.JPG',
  'P1160787.JPG',
  'P1160796.JPG',
  'P1160814.JPG',
  'P1160829.JPG',
  'P1160832.JPG',
  'P1160855.JPG',
  'P1160873.JPG',
  'P1160881.JPG',
  'P1160906.JPG',
  'P1160907.JPG',
  'P1160914.JPG',
  'P1160917.JPG',
  'P1160927.JPG',
  'P1160932.JPG',
  'P1160953.JPG',
  'P1160976.JPG',
  'P1160979.JPG',
  'P1160998.JPG',
  'P1170001.JPG',
  'P1170002.JPG',
  'P1170004.JPG',
  'P8220068.JPG',
  'P8220070.JPG',
  'P8220081.JPG',
  'P8220106.JPG',
  'P8250109.JPG',
  'P9160004.JPG',
  'P9160027.JPG',
  'PB020036.JPG',
  'PB020041.JPG',
  'P1170242.JPG',
  'P1180197.JPG',
  'P1180233.JPG',
  'P1180235.JPG',
  'P1180240.JPG',
  'P1180247.JPG',
  'P1180261.JPG',
  'P1180269.JPG',
  'P1180276.JPG',
  'P1180278.JPG',
  'P1180303.JPG',
  'P1180309.JPG',
  
];

var index = 0;
var buttons = document.querySelectorAll('button');
var image = document.querySelector('img');
function prevFn () {
  index--;
  index = index < 0 ? images.length - 1 : index;
  image.setAttribute('src', images[index]);
}
function nextFn () {
  index++;
  index = index > images.length - 1 ? 0 : index;
  image.setAttribute('src', images[index]);
}
buttons[0].addEventListener('click', prevFn);
buttons[1].addEventListener('click', nextFn);
  
  
setInterval(nextFn, 3000);