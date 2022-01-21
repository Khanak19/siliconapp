class App {
    constructor(){}
    
    

 async  start(){
      if(gameState === 0){
        user = new User();
      var userCountRef = await database.ref('userCount').once("value");
      if(userCountRef.exists()){
        userCount = userCountRef.val();
        user.getCount();
       
      }
      User.getuserInfo();
        form = new Form()
        form.display();

      }
    }
    yoga(){
    var title1 = createElement('h2')
    title1.html('YOGA')
    title1.position(displayWidth-1200,100)
    image(yogaImg,displayWidth-1330,150,320,300)
    var buttton1 = createButton('START')
    buttton1.position(displayWidth-1200,470)
    buttton1.mousePressed(()=>{
      gameState=2
      removeElements();
    })
  }
  story(){
    var title= createElement('h2')
    title.html('STORIES')
    title.position(displayWidth-450,100)
    image(str,displayWidth-500,150,320,300)
    var button1 = createButton('START')
    button1.position(displayWidth-380,460)  
    button1.mousePressed(()=>{
      gameState=9
      removeElements();
    })
  }
    music(){
      var title1 = createElement('h2')
      title1.html('MUSIC')
      title1.position(displayWidth-770,100)
      image(musicImg,displayWidth-900,150,320,300)
      var buttton1 = createButton('START')
    buttton1.position(displayWidth-780,470)
    buttton1.mousePressed(()=>{
      gameState=5
      removeElements();
    })
    }
    music1(){
      var title1 = createElement('h2')
      title1.html('SLEEP MUSIC')
      title1.position(displayWidth-790,100)
      image(sM1,displayWidth-850,150,300,300)
      var buttton1 = createButton('START')
    buttton1.position(displayWidth-700,470)
    buttton1.mousePressed(()=>{
      gameState=6
      removeElements();
    })
    }
    music2(){
      var title1= createElement('h2')
      title1.html('STUDY MUSIC')
      title1.position(displayWidth-1200,100)
      image(sM2,displayWidth-1250,150,320,300)
      var button1 = createButton('START')
    button1.position(displayWidth-1200,470)
    button1.mousePressed(()=>{
      gameState=7
      removeElements();
    })
    }
    music3(){
      var title = createElement('h2')
      title.html('MEDITATION MUSIC')
      title.position(displayWidth-450,100)
      image(sM3,displayWidth-500,150,320,300)
      var button1 = createButton('START')
      button1.position(displayWidth-380,460)  
      button1.mousePressed(()=>{
        gameState=8
        removeElements();
      })
    }
    studyM(){
   var title = createElement('h2')
   title.html('1. STUDY MUSIC')
   title.position(displayWidth-1200,100)
   image(s1,displayWidth-1300,150,320,300)
   var button13 = createButton('PLAY')
    button13.position(displayWidth-1200,470)
    button13.mousePressed(()=>{
     study1.play();
    })
    var button50 = createButton('STOP')
    button50.position(displayWidth-1250,470)
    button50.mousePressed(()=>{
      study1.stop();
    })
    var title1 = createElement('h2')
    title1.html('2. STUDY MUSIC')
    title1.position(displayWidth-790,100)
    image(s2,displayWidth-900,150,320,300)
    var buttton2 = createButton('PLAY')
  buttton2.position(displayWidth-800,470)
  buttton2.mousePressed(()=>{
   study2.play();
  })
  var button51 = createButton('STOP')
  button51.position(displayWidth-850,470)
  button51.mousePressed(()=>{
 study2.stop();
  })
    var title2 = createElement('h2')
    title2.html('3. STUDY MUSIC')
    title2.position(displayWidth-450,100)
    image(s3,displayWidth-500,150,320,300)
    var button3 = createButton('PLAY')
    button3.position(displayWidth-380,460)  
    button3.mousePressed(()=>{
     study3.play();
    })
    var button52 = createButton('STOP')
  button52.position(displayWidth-430,460)
  button52.mousePressed(()=>{
 study3.stop();
  })
    }
    sleepM(){
      var title = createElement('h2')
      title.html('1. SLEEP MUSIC')
      title.position(displayWidth-1200,100)
      image(sleep1,displayWidth-1300,150,320,300)
      var button13 = createButton('PLAY')
       button13.position(displayWidth-1200,470)
       button13.mousePressed(()=>{
      ym1.play();
       })
       var button51 = createButton('STOP')
  button51.position(displayWidth-1250,470)
  button51.mousePressed(()=>{
 ym1.stop();
  })
       var title2 = createElement('h2')
       title2.html('2. SLEEP MUSIC')
       title2.position(displayWidth-790,100)
       image(sleep2,displayWidth-900,150,320,300)
       var button2 = createButton('PLAY')
       button2.position(displayWidth-800,470)
        button2.mousePressed(()=>{
       ym2.play();
        })
        var button52 = createButton('STOP')
  button52.position(displayWidth-850,470)
  button52.mousePressed(()=>{
 ym2.stop();
  })
        var title3 = createElement('h2')
        title3.html('3. STUDY MUSIC')
        title3.position(displayWidth-450,100)
        image(sleep3,displayWidth-500,150,320,300)
        var button3 = createButton('PLAY')
        button3.position(displayWidth-380,460)  
        button3.mousePressed(()=>{
         ym3.play();
        })
        var button53 = createButton('STOP')
  button53.position(displayWidth-430,460)
  button53.mousePressed(()=>{
 ym3.stop();
  })
    }
    mediM(){
      var title = createElement('h2')
      title.html('1.  MEDITATION MUSIC')
      title.position(displayWidth-1200,100)
      image(med1,displayWidth-1300,150,320,300)
      var button13 = createButton('PLAY')
       button13.position(displayWidth-1200,470)
       button13.mousePressed(()=>{
      medi1.play();
       })
       var button51 = createButton('STOP')
  button51.position(displayWidth-1250,470)
  button51.mousePressed(()=>{
 medi1.stop();
  })
       var title2 = createElement('h2')
       title2.html('2. MEDITATION MUSIC')
       title2.position(displayWidth-790,100)
       image(med2,displayWidth-900,150,320,300)
       var button2 = createButton('PLAY')
       button2.position(displayWidth-800,470)
        button2.mousePressed(()=>{
       medi2.play();
        })
        var button52 = createButton('STOP')
  button52.position(displayWidth-850,470)
  button52.mousePressed(()=>{
 medi2.stop();
  })
        var title3 = createElement('h2')
        title3.html('3. MEDITATION MUSIC')
        title3.position(displayWidth-450,100)
        image(med3,displayWidth-500,150,320,300)
        var button3 = createButton('PLAY')
        button3.position(displayWidth-380,460)  
        button3.mousePressed(()=>{
         medi3.play();
        })
        var button53 = createButton('STOP')
  button53.position(displayWidth-430,460)
  button53.mousePressed(()=>{
 medi3.stop();
  })
    }
yogaKids(){
var title2 = createElement('h1')
title2.html('YOGA FOR KIDS')
title2.position(displayWidth-1000,150)
image(ykImg,displayWidth-1050,220,320,300)
var buttton1 = createButton('START')
buttton1.position(displayWidth-900,530)
buttton1.mousePressed(()=>{
  gameState=3
  removeElements();
})
}
yogaAdults(){
var title = createElement('h1')
title.html('YOGA FOR ADULTS')
title.position(displayWidth-500,150)
image(ykA,displayWidth-500,220,320,300)
var buttton1 = createButton('START')
buttton1.position(displayWidth-350,530)
buttton1.mousePressed(()=>{
  gameState=4
  removeElements();
})
}
 yoga1() {
  var title2 = createElement('h2')
  title2.html('1. BUTTERFLY POSE')
  title2.position(displayWidth-1300,30)
  image(yg1,displayWidth-1370,50,320,300)
  var buttton1 = createButton('STEPS')
buttton1.position(displayWidth-1250,350)
buttton1.mousePressed(()=>{
  yg1S.play();
  yg2S.stop();
  yg3S.stop();
  yg4S.stop();
  yg5S.stop();
})
//benifits
var title3 = createElement('h3')
title3.html('Benifits- Flexbilty and Weight Loss')
title3.position(displayWidth-1150,150)
//cobra
var title4 = createElement('h2')
title4.html('2. COBRA POSE')
title4.position(displayWidth-800,30)
image(yg2,displayWidth-850,70,320,300)
var buttton3 = createButton('STEPS')
buttton3.position(displayWidth-730,370)
buttton3.mousePressed(()=>{
yg2S.play();
yg1S.stop();
yg3S.stop();
yg4S.stop();
yg5S.stop();
 })
 var title5 = createElement("h3")
title5.html("Benifits- Strengthens the Spine")
title5.position(displayWidth-730,150)
//treePose
var title6 = createElement('h2')
title6.html('3. TREE POSE')
title6.position(displayWidth-400,30)
image(yg3,displayWidth-450,70,320,300)
var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-320,370)
buttton5.mousePressed(()=>{
yg3S.play();
yg1S.stop();
yg2S.stop();
yg4S.stop();
yg5S.stop();
 })
 var title7 = createElement("h3")
title7.html("Benifits- Strengthens the Spine")
title7.position(displayWidth-270,150)
//lotusPose
var title8 = createElement('h2')
title8.html("5. LOTUS POSE")
title8.position(displayWidth-530,350)
image(yg4,displayWidth-620,370,320,300)
var buttton8 = createButton('STEPS')
buttton8.position(displayWidth-490,610)
buttton8.mousePressed(()=>{
yg4S.play();
yg1S.stop();
yg2S.stop();
yg3S.stop();
yg5S.stop();
 })
 var title9 = createElement("h3")
 title9.html("Benifits- Calms the brains and opens the hips")
 title9.position(displayWidth-420,450)
 //sitting pose
 var title10 = createElement('h2')
 title10.html("4. SITING POSE")
 title10.position(displayWidth-1120,350)
 image(yg5,displayWidth-1200,370,320,300)
 var buttton9 = createButton('STEPS')
buttton9.position(displayWidth-1065,650)
buttton8.mousePressed(()=>{
yg4S.play();
yg1S.stop();
yg2S.stop();
yg3S.stop();
yg5S.stop();
 })
 var title11= createElement("h3")
 title11.html("Benifits- Reduces back pain and increase energy levels")
 title11.position(displayWidth-990,450)
}
yoga2(){
  var title = createElement('h1');
  title.html("1. MOUNTAIN POSE")
  title.position(displayWidth-1300,30)
  image(mountP,displayWidth-1300,50,390,300)
var  button = createButton('STEPS')
  button.position(displayWidth-1140,340)
  button.mousePressed(()=>{
    mountPS.play();
    heroPS.stop();
    yg3S.stop();
    triPS.stop();
    cPS.stop();
  })
  var title3 = createElement('h3')
  title3.html("Benifits- Improves good posture")
  title3.position(displayWidth-1080,150)
   var title2= createElement('h1')
   title2.html("2. HERO POSE")
   title2.position(displayWidth-800,30)
   image(heroP,displayWidth-850,60,320,300)
   var button2 = createButton('STEPS')
   button2.position(displayWidth-720,340)
   button2.mousePressed(()=>{
     heroPS.play();
     mountPS.stop();
     yg3S.stop();
     triPS.stop();
     cPS.stop();
   })
   var title8 = createElement('h3')
   title8.html("Benifits- Flexibility in hips and knees")
   title8.position(displayWidth-630,120)
   var title6 = createElement('h1')
title6.html('3. TREE POSE')
title6.position(displayWidth-400,30)
image(yg3,displayWidth-450,70,320,300)
var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-320,370)
buttton5.mousePressed(()=>{
yg3S.play();
heroPS.stop();
mountPS.stop();
triPS.stop();
cPS.stop();
 })
 var title7 = createElement("h3")
title7.html("Benifits- Strengthens the Spine")
title7.position(displayWidth-270,150)
//triPose
var title0 = createElement('h1')
title0.html('4. TRIANGLE POSE')
title0.position(displayWidth-1000,350)
image(triP,displayWidth-1050,350,320,300)
var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-900,650)
buttton5.mousePressed(()=>{
triPS.play();
heroPS.stop();
mountPS.stop();
cPS.stop();
yg3S.stop();
})
title = createElement('h3')
title.html("Benifits- Increases stability and balance")
title.position(displayWidth-1300,500)
//child pose
var title1 = createElement('h1')
title1.html("5. CHILD'S POSE")
title1.position(displayWidth-500,400)
image(cP,displayWidth-550,380,320,300)
var button6 = createButton('STEPS')
button6.position(displayWidth-400,650)
button6.mousePressed(()=>{
cPS.play();
heroPS.stop();
mountPS.stop()
triPS.stop();
yg3S.stop();
})
var title2 = createElement('h3')
title2.html("Benifts- Relieves Stress")
title2.position(1150,520)
  }
  stories(){
    var title = createElement('h2');
    title.html("1.Cheerful Granny")
    title.position(displayWidth-1250,100)
    image(grany,displayWidth-1250,150,300,300)
  var  button = createButton('LISTEN')
    button.position(displayWidth-1140,470)
    button.mousePressed(()=>{
      story1.play();
      story2.stop();
      story3.stop();
    })
    var title2= createElement('h2')
    title2.html('2.Hardworking Confectioner')
    title2.position(displayWidth-800,100)
    image(hard,displayWidth-850,150,320,300)
    var buttton3 = createButton('LISTEN')
  buttton3.position(displayWidth-730,470)
  buttton3.mousePressed(()=>{
    story2.play();
    story1.stop();
    story3.stop();
     })
     var title6 = createElement('h2')
     title6.html('3.The Winged Lion')
     title6.position(displayWidth-400,100)
     image(lion,displayWidth-450,150,320,300)
     var buttton5 = createButton('LISTEN')
   buttton5.position(displayWidth-320,470)
   buttton5.mousePressed(()=>{
     story3.play();
     story1.stop();
     story2.stop();
      })
  }
}
