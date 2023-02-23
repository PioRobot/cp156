AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },    
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        clearInterval(timer);        
      }
    }
  },
  isCollided: function (elemntId) {
    const element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#ring")) {
        element.setAttribute("visible",false)
        this.f1()
        this.f2()
      } else {
        
      }
    });
  },
  f1:function(){
    var e=document.querySelector("#targets")
    var count=e.getAttribute("text").value
    var c2=parseInt(count)
    c2-=1
    e.setAttribute("text",{
      value:c2
    })
  },
  f2:function(){
    var e2=document.querySelector("#score")
    var count2=e2.getAttribute("text").value
    var c22=parseInt(count2)
    c22+=50
    e2.setAttribute("text",{
      value:c22
    })
  }
  
});
