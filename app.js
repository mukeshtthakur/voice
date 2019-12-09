//jshint esversion:6


//selecting button and content
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

try{
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.onstart = function(){
    console.log("voice in activated");
  };

recognition.onresult = function(event){
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
};
// add listener to button
btn.addEventListener("click", () => {
  recognition.start();
});



}catch(e){
  alert("stop using this browser");
}
