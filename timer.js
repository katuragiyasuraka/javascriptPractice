window.onload = function(){
  // タイマー
  var time = 180;
  var counter;
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");

  start.onclick = function() {
    toggle();
    counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    toggle();
    clearInterval( counter );
  }

  reset.onclick = function() {
    time = 180;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor( time / 60 );
  }

  function toggle() {
    if( start.disabled ) {
      start.disabled = false;
      stop.disabled = true;
    } else {
      start.disabled = true;
      stop.disabled = false;
    }
  }

  function count() {
    if( time === 0 ) {
      sec.innerHTML = 0;
      min.innerHTML = 0;
      toggle();
      alert("3分経過しました。");
      clearInterval( counter );
    } else {
      time -= 1;
      sec.innerHTML = time % 60;
      min.innerHTML = Math.floor( time / 60 );
    }
  }

// おみくじ
  var luck = ["大凶","凶","末吉","小吉","中吉", "吉", "大吉"];
  var colors = ["赤","青","黄","緑","白","黒","金","銀","茶","紫"];
  var message, random_luck, random_color;
  var btn = document.getElementById("btn");
  var output = document.getElementById("output");

  btn.onclick = function(){
    random_luck = luck[ Math.floor( Math.random() * luck.length ) ];
    random_color = colors[ Math.floor( Math.random() * colors.length ) ];

    message = "<h2>" + random_luck + "</h2>";
    message += "<p>ラッキーカラーは " + random_color + "</p>";
    output.innerHTML = message;
  }


// テキストエリア
  var now = null,
        max = 100,
        input_area = document.getElementById("text_area"),
        output_area = document.getElementById("text_length");

  input_area.onkeyup = function(){
    now = ( max - input_area.value.length );
    output_area.innerText = now;
    output_area.className = ( now < 0 ) ? "out" : "";
  }
}
