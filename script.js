document.querySelector('#footer_buttont_startAI').onclick = startingAi;
function startingAi(){
  document.querySelector('#stream_link').innerHTML = '';
  var img = [document.querySelector('#input_link').value];

  document.querySelectorAll('#stream_link').forEach((el,i)=>el.insertAdjacentHTML('beforeend', '<img src="'+img[i]+'" class="main_style_stream">'));
  const mimg = 4   //document.createElement("test_img.jpeg");

  const xhr = new XMLHttpRequest();
  //mimg.setAttribute('src', 'test_img.jpeg');
  // POST-запрос к ресурсу /user
  xhr.open("POST", '/mimg');

  
  // обработчик получения ответа сервера
  xhr.onload = () => {
      if (xhr.status == 200) { 
          console.log(xhr.responseText);
      } else {
          console.log("Server response: ", xhr.statusText);
      }
  }; 
      // отправляем значение user в методе send
  xhr.send(mimg); 
  };

document.querySelector('#footer_buttont_stopAI').onclick = stopAi;
function stopAi(){
  document.querySelector('#stream_link').innerHTML = '';
}