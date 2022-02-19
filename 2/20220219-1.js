let butter = 90;
let sugar = 80;
let egg = 1;
let vanilla_essence = random(3, 5);
let cake_flour = 190;
let is_mixed;
let minutes = 0;
let bakeware = [];

// eggを入れすぎるとis_mixedが緩くなります.この場合はcake_flourを追加.
function make_cookie_dough() {
  is_mixed = mix(butter, sugar);
  for (let i = 0; i < egg; i += egg*0.2){
    is_mixed = mix(is_mixed, i)
  }
  is_mixed = mix(is_mixed, vanilla_essence, cake_flour);

  while(minutes < 30){
    is_mixed = sleep(is_mixed);
    minutes += 1;
  }
  minutes = 0;
}

// humanはセリアで買いました.カワイー!
function make_shape() {
  createCanvas(is_mixed, is_mixed);
  let w = width / 12;
  let h = width / 12;
  for(let i = 0; i < width; i += w){
    for (let j = 0; j < height; j += h){
      bakeware[i][j] = circle(i, j, random(w/2, w));
      bakeware[i][j].push(human(i + w + 10, j + 10, w, h));
    }
  }
}

// ヘルシオで焼きます
function bake_cookies() {
  while(minutes < 25){
    for(let i = 0; i < width; i++){
      for (let j = 0; j < height; j++){
        healsio.bake(bakeware[i][j]);
      }
    }
    minutes += 1
  }
}