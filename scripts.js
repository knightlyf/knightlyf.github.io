function enableFullscreen(imageUrls,Overlay) {
    const clickableImages = document.querySelectorAll('.image2');
    const fullscreenOverlay = document.getElementById(Overlay);
    const fullscreenImage = document.getElementById('fullscreen-image');

    clickableImages.forEach((image, index) => {
      image.addEventListener('click', () => {
          fullscreenImage.src = imageUrls;
          fullscreenOverlay.style.display = 'flex';
          //animate to slide in
          fullscreenOverlay.classList.add('slide-in');
      });
    });

    fullscreenOverlay.addEventListener('click', () => {
      fullscreenOverlay.style.display = 'none';
      fullscreenOverlay.classList.remove('slide-in');
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
      const skillsContainer = document.getElementById("skillsContainer");
      const expandButton = document.getElementById("expandButton");
      const closeButton = document.getElementById("close-button");

      closeButton.addEventListener("click", function() {
          
          skillsContainer.classList.add("slide-out");
          skillsContainer.classList.remove("slide-in");
          skillsContainer.style.display = "none";
          expandButton.style.display = "block";
      });

      expandButton.addEventListener("click", function() {
          skillsContainer.classList.add("slide-in"); // Add the slide-in class
          skillsContainer.classList.remove("slide-out");
          skillsContainer.style.display = "block";
          expandButton.style.display = "none";
      });
      window.addEventListener("load",function() {
          if (window.innerWidth <= 0.7 * window.screen.width) {
              skillsContainer.classList.add("slide-out");
              skillsContainer.style.display = "none";
              expandButton.style.display = "block";

          } else {
              skillsContainer.classList.remove("slide-out");
              skillsContainer.classList.add("slide-in");
              skillsContainer.style.display = "block";
              expandButton.style.display = "none";
          }
      });

      window.addEventListener("resize", function() {
          if (window.innerWidth <= 0.7 * window.screen.width) {
              skillsContainer.classList.add("slide-out");
              skillsContainer.style.display = "none";
              expandButton.style.display = "block";

          } else {
              skillsContainer.classList.remove("slide-out");
              skillsContainer.classList.add("slide-in");
              skillsContainer.style.display = "block";
              expandButton.style.display = "none";
          }
      });
  });



  function displayRandomMessages() {
      
      const chatOverlay = document.getElementById("chatOverlay");
      const message = 'Hey there! Welcome to my Portfolio Website! Hover/Tap on the tiles to see more information about me.'
      const imageurl = 'imgs/msg.png'
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `<img src="${imageurl}" style='margin:20px'>${message}`;
      // messageElement.textContent = message;
      // chatOverlay.appendChild(messageElement);

      setTimeout(() => {
          messageElement.classList.add("show");
      }, 100);

      setTimeout(() => {
          messageElement.classList.add("destroy");
      }, 8000);
      // Set a timeout to remove the message after the animation
      
      setTimeout(() => {
          chatOverlay.removeChild(messageElement);
      }, 9000); // Adjust the delay as needed

      chatOverlay.appendChild(messageElement);
  }

     

  function closingAnimation(imageId,tileId){
      const image = document.getElementById(imageId);
      const tile = document.getElementById(tileId);

      console.log(image);
      console.log(tile);

      image.addEventListener('click',()=>{
          //const tile = document.querySelector('.tile');
          tile.classList.add('animation-removed');

          setTimeout(()=>{
              tile.classList.remove('flipped', 'expanded','animation-removed');
          },1000);
      });
  }
  
  function expandTile(tile) {
      console.log(tile);
      tile.classList.toggle('flipped');
      const nameBack = tile.querySelector(".tile-expand");
      const contentBack = tile.querySelector(".tile .back .content-back");
      const expandedDiv = tile.querySelector('.expanded');
      console.log('nameBack:',nameBack);
      console.log(contentBack);

      if (tile.classList.contains("expanded")) {
          contentBack.style.opacity = "0";
          nameBack.style.display = "none";
          
      } else {
          contentBack.style.opacity = "1";
          nameBack.style.opacity = "0";
          console.log(' not expanded');
      }
      tile.addEventListener("click", function() {
          // Toggle visibility of name and content backs
          nameBack.style.display = "none";
          contentBack.style.display = "block";
          // You can also add a class to the expanded tile for styling purposes
          tile.classList.toggle("expanded");
      });

      if (tile.classList.contains('flipped')) {
          expandedDiv.style.display = 'block';
          document.body.classList.add('expanded');
          
      } 
      
      else {
          expandedDiv.style.display = 'none';
          document.body.classList.remove('expanded');
      }
  }

  function callExpand(idd,img,overlay) {
          const div = document.getElementById(idd);
          enableFullscreen(img,overlay);
          expandTile(div);
          
      }

  // function closeExpandedTile() {
  //     const tile = document.querySelector('.tile');
  //     if (tile.classList.contains('flipped')) {
  //         //tile.classList.remove('flipped');
  //         tile.style.animation = "AntiflipAnimation 1s"
  //         document.body.classList.remove('expanded');
  //     }
      
  // }
  


  function flipTile(tile) {
          tile.classList.toggle('flipped');
      }
  function expandTile(tile) {
          tile.classList.toggle('expanded');
      }

  function toggleHiddenDiv(divNumber) {
  const hiddenDiv = document.getElementById(`hiddenDiv${divNumber}`);
  hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
  }
 
 function LargeTileAnimation() {
      const tiles = document.querySelectorAll('.tile-container-double-wide');
      function animateTiles(tile) {
              tile.querySelector('.tile.front').style.transform = 'translateY(-20%)';
              tile.querySelector('.tile.back').style.transform = 'translateY(0%)';

              // Reset the tile after 5 seconds
              setTimeout(() => {
                  tile.querySelector('.tile.front').style.transform = 'translateY(0%)';
                  tile.querySelector('.tile.back').style.transform = 'translateY(100%)';
              }, 5000);
      }
      tiles.forEach((tile, index) => {
          animateTiles(tile); // Initial animation for each tile

          // Repeat the animation every 5 seconds using setInterval
          setInterval(() => {
              animateTiles(tile);
          }, 10000); // 10000ms (10 seconds) to include both the animation and the reset
      });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      const linkdDiv = document.getElementById("linkedin");
      
      const linkUrl = "https://www.linkedin.com/in/varun-vinod-0b09601a7/";
      
      linkdDiv.addEventListener("click", function() {
          window.location.href = linkUrl;
      });

      const githubDiv = document.getElementById("github");
      
      const gitUrl = "https://github.com/knightlyf";
      
      githubDiv.addEventListener("click", function() {
          window.location.href = gitUrl;
      });
      const clickableDiv = document.getElementById("mailto");
  
      const emailAddress = "Varun.Vinod@utdallas.edu";
      
      clickableDiv.addEventListener("click", function() {
          window.location.href = `mailto:${emailAddress}`;
      });
      displayRandomMessages();

  });
  
  function Tile(d){
      var g=d;
      var c="perspective( 800px ) rotateX( 0deg ) rotateY( 0deg ) translateZ( 0px )";
      var e=function(){g.style.webkitTransformOrigin="50% 50%";
      g.style.MozTransformOrigin="50% 50%";
      g.style.msTransformOrigin="50% 50%";
      g.style.oTransformOrigin="50% 50%";
      g.style.transformOrigin="50% 50%";
      g.parentElement.style.webkitTransformStyle="preserve-3d";
      g.parentElement.style.MozTransformStyle="preserve-3d";
      g.parentElement.style.msTransformStyle="preserve-3d";
      g.parentElement.style.oTransformStyle="preserve-3d";
      g.parentElement.style.transformStyle="preserve-3d";
      g.style.webkitTransition="-webkit-transform 0.08s";
      g.style.MozTransition="-moz-transform 0.08s";
      g.style.msTransition="-ms-transform 0.08s";
      g.style.oTransition="-o-transform 0.08s";
      g.style.transition="transform 0.08s";
      g.style.outline="1px solid transparent";
      g.style.webkitFontSmoothing="antialiased";
      g.addEventListener("mousedown",h,false);
  };
      
  var f=function(l,o){
      var m=g.offsetWidth;
      var k=g.offsetHeight;
      var n="perspective( 800px ) ";
      if(l>m/4&&l<(m/4*3)&&o>k/4&&o<(k/4*3))
      {
          n+="rotateX( 0deg ) rotateY( 0deg ) translateZ( -30px )";
      }
      else{
          if(Math.min(l,m-l)<Math.min(o,k-o))
          {
              if(l<m-l)
              {
                  n+="rotateX( 0deg ) rotateY( -20deg ) translateZ( 0px )";
              }
              else
              {
                  n+="rotateX( 0deg ) rotateY( 20deg ) translateZ( 0px )";
              }
          }else
          {
              if(o<k-o){
                  n+="rotateX( 20deg ) rotateY( 0deg ) translateZ( 0px )";
              }
              else{
                  n+="rotateX( -20deg ) rotateY( 0deg ) translateZ( 0px )";
              }
          }
      }
      g.style.webkitTransform=n;
      g.style.MozTransform=n;
      g.style.msTransform=n;
      g.style.oTransform=n;
      g.style.transform=n;
      document.addEventListener("mouseup",a,false);
  };
  
  var h = function(m) {
      if (m.offsetX) {
          f(m.offsetX, m.offsetY);
          return;
      }
      var l = b(g);
      var k = m.pageX - l.x;
      var n = m.pageY - l.y;
      f(k, n);
  };
  var a = function(k) {
      g.style.webkitTransform = c;
      g.style.MozTransform = c;
      g.style.msTransform = c;
      g.style.oTransform = c;
      g.style.transform = c;
      document.removeEventListener("mouseup", a, false);
  };
  var j = function(k, l) {
      return parseInt(k.getPropertyValue(l), 10);
  };
  var b = function(n) {
      var q = 0,
          p = 0;
      var s = true;
      do {
          q += n.offsetLeft;
          p += n.offsetTop;
          var k = getComputedStyle(n, null);
          var m = j(k, "border-top-width");
          var o = j(k, "border-left-width");
          p += m;
          q += o;
          if (s) {
              var r = j(k, "padding-top");
              var l = j(k, "padding-left");
              p += r;
              q += l;
          }
          s = false;
      } while (n = n.offsetParent);
      return {
          x: q,
          y: p
      };
  };
  e();
}
var tileElements = document.getElementsByClassName("metro-tile");
var i;
for (i = 0; i < tileElements.length; i++) {
  Tile(tileElements[i]);
}


//     function animateTiles(tile) {
//         tile.querySelector('.tile.front').style.transform = 'translateY(-100%)';
//         tile.querySelector('.tile.back').style.transform = 'translateY(0%)';

//         // Reset the tile after the animation duration
//         setTimeout(() => {
//             tile.querySelector('.tile.front').style.transform = 'translateY(0%)';
//             tile.querySelector('.tile.back').style.transform = 'translateY(100%)';
//         }, animationDuration);
//     }

//     function startAnimation() {
//         tiles.forEach((tile, index) => {
//             animateTiles(tile); // Initial animation for each tile

//             // Repeat the animation after the animation interval
//             intervalId = setInterval(() => {
//                 animateTiles(tile);
//             }, animationInterval);
//         });
//     }

//     function stopAnimation() {
//         clearInterval(intervalId);
//     }

//     tiles.forEach((tile, index) => {
//         tile.addEventListener('mouseenter', stopAnimation);
//         tile.addEventListener('mouseleave', startAnimation);
//     });

//     // Start the animation initially
//     startAnimation();
// }
  function handleVisibility() {
      const hideableContent = document.querySelectorAll('.hide-on-small-screen');
      const screenWidthThreshold = 0.6 * window.screen.width;
      hideableContent.forEach(div => {
          if (window.innerWidth < screenWidthThreshold) {
              //div.style.display = 'none';
              div.classList.add('hide-slide-out');
          } else {
              // div.style.display = 'block';
              div.classList.remove('hide-slide-out');
          }
      });
  }