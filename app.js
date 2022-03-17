(function (window, document) {

  'use strict';

  // patch CustomEvent to allow constructor creation (IE/Chrome)
  if (typeof window.CustomEvent !== 'function') {

      window.CustomEvent = function (event, params) {

          params = params || { bubbles: false, cancelable: false, detail: undefined };

          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
      };

      window.CustomEvent.prototype = window.Event.prototype;
  }

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('touchend', handleTouchEnd, false);

  var xDown = null;
  var yDown = null;
  var xDiff = null;
  var yDiff = null;
  var timeDown = null;
  var startEl = null;

  function handleTouchEnd(e) {

      // if the user released on a different target, cancel!
      if (startEl !== e.target) return;

      var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
      var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
      var timeDiff = Date.now() - timeDown;
      var eventType = '';
      var changedTouches = e.changedTouches || e.touches || [];

      if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
          if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
              if (xDiff > 0) {
                  eventType = 'swiped-left';
              }
              else {
                  eventType = 'swiped-right';
              }
          }
      }
      else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
          if (yDiff > 0) {
              eventType = 'swiped-up';
          }
          else {
              eventType = 'swiped-down';
          }
      }

      if (eventType !== '') {

          var eventData = {
              dir: eventType.replace(/swiped-/, ''),
              touchType: (changedTouches[0] || {}).touchType || 'direct',
              xStart: parseInt(xDown, 10),
              xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
              yStart: parseInt(yDown, 10),
              yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
          };

          // fire `swiped` event event on the element that started the swipe
          startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

          // fire `swiped-dir` event on the element that started the swipe
          startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
      }

      // reset values
      xDown = null;
      yDown = null;
      timeDown = null;
  }

  function handleTouchStart(e) {

      // if the element has data-swipe-ignore="true" we stop listening for swipe events
      if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

      startEl = e.target;

      timeDown = Date.now();
      xDown = e.touches[0].clientX;
      yDown = e.touches[0].clientY;
      xDiff = 0;
      yDiff = 0;
  }
  function handleTouchMove(e) {

      if (!xDown || !yDown) return;

      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;

      xDiff = xDown - xUp;
      yDiff = yDown - yUp;
  }
  function getNearestAttribute(el, attributeName, defaultValue) {

      // walk up the dom tree looking for attributeName
      while (el && el !== document.documentElement) {

          var attributeValue = el.getAttribute(attributeName);

          if (attributeValue) {
              return attributeValue;
          }

          el = el.parentNode;
      }

      return defaultValue;
  }

}(window, document));
let a = document.querySelector(".menu");
      a.addEventListener("mouseover", function () {
        k = document.querySelectorAll(".bar");
        k[0].style.backgroundColor = "rgb(122, 218, 13)";
        k[0].style.transition = "0.2s";
        k[1].style.backgroundColor = "rgb(122, 218, 13)";
        k[1].style.transition = "0.2s";
      });
      a = document.querySelector(".menu");
      a.addEventListener("mouseout", function () {
        k = document.querySelectorAll(".bar");
        k[0].style.backgroundColor = "black";
        k[0].style.transition = "0.2s";
        k[1].style.backgroundColor = "black";
        k[1].style.transition = "0.2s";
      });
let b=document.querySelector('.log')
c=document.querySelector('.appear')
b.addEventListener('mouseover',change)
function change(){
  c.style.display="block"
  c.style.transition ="2s"
}
b.addEventListener('mouseout',function change2(){
  c.style.display="none"
  c.style.transition ="2s"
})
d=document.querySelector('.stairs')
e=document.querySelector('.app')
d.addEventListener('mouseover',change3)
function change3(){
  e.style.display="block"
  e.style.transition ="2s"
}
d.addEventListener('mouseout',function(){
  e.style.display="none"
  e.style.transition ="2s"
})
f=document.querySelector('.arrow')
g=document.querySelector('.plan')
g.addEventListener('mouseover',function(){
  f.style.transform="translate(5%,0%)"
})

angi=document.querySelector('.ghhg');
angi.addEventListener("click",divby2);
agi=document.querySelector('.bsdk');
agi.addEventListener("click",divby2);
let count=0
function turnImage(){
  count++
  q=document.querySelector('.in');
  q.innerHTML="<br><br>Turning historic tracks into an unparalleled park.<br><br>";
  op=document.querySelector('.plan');
  op.innerHTML='See the full vision &nbsp&nbsp&nbsp <span id="arrow"> <i class="fa-solid fa-arrow-right"></i></p></span>';
  k=document.querySelector('.image');
  k.innerHTML=""
  k.innerHTML="<img class='tree' src='https://images.prismic.io/railpark/0f55920f-6808-48d2-a89a-b99a5ca72ca0_the-cut.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1480&h=1014'>";
  console.log("hi");
  console.log(count)
}
function turnImageBack(){
  count++
  q=document.querySelector('.in');
  q.innerHTML="<br><br>Phase One is free & open daily<br><br>";
  op=document.querySelector('.plan');
  op.innerHTML='Plan your visit &nbsp&nbsp&nbsp <span id="arrow"> <i class="fa-solid fa-arrow-right"></i></p></span>';
  k=document.querySelector('.image');
  k.innerHTML=""
  k.innerHTML="<img class='tree' src='https://images.prismic.io/railpark/b75ee5d3-664e-44d8-975a-b739140bf61d_landing-page-header-phase-1.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1678&h=944' > <img src='hours-badge.svg' class='hh'>";
  
  console.log("hi");
  console.log(count)
}

function divby2(){
  if(count%2===0){
    turnImage()
  }
  else{
    turnImageBack()
  }
}
be=document.querySelector('.wc')
cq=document.querySelector('.tooltip')
be.addEventListener('mouseover',change8)
function change8(){
  cq.style.visibility="visible"
  
}
be.addEventListener('mouseout',function change9(){
  cq.style.visibility="hidden"
  
})
be1=document.querySelector('.wc1')
cq1=document.querySelector('.tooltip1')
be1.addEventListener('mouseover',changex)
function changex(){
  cq1.style.visibility="visible"
  
}
be1.addEventListener('mouseout',function changex1(){
  cq1.style.visibility="hidden"
  
})
enter=document.querySelector('.green')
document.querySelector('.green').addEventListener('mouseenter',function(){
  document.querySelector('.xx').style.visibility="visible";
  document.querySelector('.xx').style.transition="0.15s"
  
  // document.querySelector('.xx').style.transition-timing="ease-in-out"

})
document.querySelector('.green').addEventListener('mouseleave',function(){
  document.querySelector('.xx').style.visibility="hidden";
  document.querySelector('.xx').style.transition="0.15s"
})
document.querySelector('.bak').addEventListener('mouseover',()=>{document.querySelector('.semi').innerHTML='<video src="https://railpark.cdn.prismic.io/railpark/2dbc0398-7647-47f1-a9b2-519d8521eaf2_noble-st-entrance.mp4" poster="https://images.prismic.io/railpark/28507bd7-e937-4074-87b0-95751194f4c1_noble-entrance.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50" preload="none" loop="" muted="" playsinline="" width="100%" height="100%" autoplay muted loop></video>'});
document.querySelector('.bak').addEventListener('mouseleave',()=>{document.querySelector('.semi').innerHTML='<video src="https://railpark.cdn.prismic.io/railpark/2dbc0398-7647-47f1-a9b2-519d8521eaf2_noble-st-entrance.mp4" poster="https://images.prismic.io/railpark/28507bd7-e937-4074-87b0-95751194f4c1_noble-entrance.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50" preload="none" loop="" muted="" playsinline="" width="100%" height="100%"></video>'})
document.querySelector('.page3').addEventListener('mouseover',()=>{document.querySelector('.mih').innerHTML='<video src="https://railpark.cdn.prismic.io/railpark/c301079f-60c5-43d1-8133-b8960b6c6f88_callowhill-st-entrance.mp4" poster="https://images.prismic.io/railpark/ca831225-3552-40ec-9f6f-bb576af3eb65_callowhill-entrance.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50" preload="none" loop="" muted="" playsinline="" width="100%" height="100%" autoplay muted loop></video>'});
document.querySelector('.page3').addEventListener('mouseleave',()=>{document.querySelector('.mih').innerHTML='<video src="https://railpark.cdn.prismic.io/railpark/2dbc0398-7647-47f1-a9b2-519d8521eaf2_noble-st-entrance.mp4" poster="https://images.prismic.io/railpark/28507bd7-e937-4074-87b0-95751194f4c1_noble-entrance.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50" preload="none" loop="" muted="" playsinline="" width="100%" height="100%"></video>'});
document.querySelector('.ilu').addEventListener('mouseover',()=>{document.querySelector('.ilu').outerHTML='<div class="ilu"><div class="l"><video src="homepage-viaduct.mp4" poster="" width="100%" height="100%" class="heo" autoplay muted loop></video></div><div class="via">The<br>Viaduct<br><p class="lib"><br>Chinatown→Northern Liberties</p></div></div> '
});
document.querySelector('.ilu').addEventListener('mouseout',()=>{document.querySelector('.ilu').outerHTML='<div class="ilu"><div class="l"><video src="homepage-viaduct.mp4" poster="" width="100%" height="100%" class="heo" ></video></div><div class="via">The<br>Viaduct<br><p class="lib"><br>Chinatown→Northern Liberties</p></div></div>';
console.log("hi")});
document.querySelector('.but').addEventListener('mouseover',()=>{document.querySelector('.but').outerHTML='<div class="but"><div class="deo"><video src="homepage-cut.mp4" width="100%" class="cut" autoplay muted loop></video></div><p class="gpl">The Cut<br><p class="hill">Callowhill→Francisville</p></p></div>'});
document.querySelector('.but').addEventListener('mouseleave',()=>{document.querySelector('.but').outerHTML='<div class="but"><div class="deo"><video src="homepage-cut.mp4" width="100%" class="cut"></video></div><p class="gpl">The Cut<br><p class="hill">Callowhill→Francisville</p></p></div>'});
document.querySelector('.tun').addEventListener('mouseover',()=>{document.querySelector('.tun').outerHTML='<div class="tun"><div class="tunvi"><video src="homepage-tunnel.mp4" autoplay muted loop width="100%" height="100%"></video></div><div><p class="tunnel">The<br>Tunnel</p><br><br><p class="fair">Fairmount→Brewerytown</p></div></div>'});
document.querySelector('.tun').addEventListener('mouseleave',()=>{document.querySelector('.tun').outerHTML='<div class="tun"><div class="tunvi"><video src="homepage-tunnel.mp4" width="100%" height="100%"></video></div><div><p class="tunnel">The<br>Tunnel</p><br><br><p class="fair">Fairmount→Brewerytown</p></div></div>'});
let leftSwipe=true;
document.querySelector('.picture').addEventListener('swiped-left', function(e) {
  if (leftSwipe==true){
  q=document.querySelector('.in');
  q.innerHTML="<br><br>Turning historic tracks into an unparalleled park.<br><br>";
  op=document.querySelector('.plan');
  op.innerHTML='See the full vision &nbsp&nbsp&nbsp <span id="arrow"> <i class="fa-solid fa-arrow-right"></i></p></span>';
  k=document.querySelector('.image');
  k.innerHTML=""
  k.innerHTML="<img class='tree' src='https://images.prismic.io/railpark/0f55920f-6808-48d2-a89a-b99a5ca72ca0_the-cut.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1480&h=1014'>";
  leftSwipe=false
}});
document.querySelector('.picture').addEventListener('swiped-right', function(e) {
  if (leftSwipe==false){
    q=document.querySelector('.in');
    q.innerHTML="<br><br>Phase One is free & open daily<br><br>";
    op=document.querySelector('.plan');
    op.innerHTML='Plan your visit &nbsp&nbsp&nbsp <span id="arrow"> <i class="fa-solid fa-arrow-right"></i></p></span>';
    k=document.querySelector('.image');
    k.innerHTML=""
    k.innerHTML="<img class='tree' src='https://images.prismic.io/railpark/b75ee5d3-664e-44d8-975a-b739140bf61d_landing-page-header-phase-1.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1678&h=944' >";
  leftSwipe=true;
}});
// window.addEventListener('scroll',()=>{
//   let scrolled=window.scrollY;
//   l=[]
//   l.push(scrolled)
//   k=l.length
//   if (l[k-1] >l[k-2]){
//     document.querySelector('nav').style.position="sticky";
//   }

// })