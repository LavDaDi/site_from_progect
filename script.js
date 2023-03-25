document.querySelector('#footer_buttont_startAI').onclick = startingAi;
function startingAi(){
  document.querySelector('#stream_link').innerHTML = '';
  var img = [document.querySelector('#input_link').value];

  document.querySelectorAll('#stream_link').forEach((el,i)=>el.insertAdjacentHTML('beforeend', '<img src="'+img[i]+'" class="main_style_stream">'));
};

document.querySelector('#footer_buttont_stopAI').onclick = stopAi;
function stopAi(){
  document.querySelector('#stream_link').innerHTML = '';
}