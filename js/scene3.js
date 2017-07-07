console.log('scene3 file loaded')

function scene3() {

  // Setup Stage
mySrc      = desert.getAttribute('src');
stageImg   = document.querySelector('#stage-img');
stageImg.setAttribute('src', mySrc);

  // Setup Cast

  // Character 1
  danererysContainer = document.createElement('div')
  danererysContainer.id = danererys-container
  danererysContainer = document.createElement('div')
  document.querySelector('#stage').append(danererysContainer)
  danererysContainer.style.position = 'absolute'
  danererysContainer.style.left = '20%'
  danererysContainer.style.top = '40%'
  danererysContainer.style.width = '60px'
  danererysContainer.style.height = '132px'
  danererysContainer.append(danererys)
  danererys.style.position = 'absolute'
  blueDress = document.querySelector('#blue-dress')
  danererysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0
  danererys.style.width = '40px'


  // Character 2

  drogoContainer = document.createElement('div')
  drogoContainer.id = drogo-container
  drogoContainer = document.createElement('div')
  document.querySelector('#stage').append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.left = '70%'
  drogoContainer.style.top = '40%'
  drogoContainer.style.width = '60px'
  drogoContainer.style.height = '136px'
  drogo.style.width = '45px'
  drogo.style.left = '10px'
  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0

  // Setup Props

  // Prop (Egg)

  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.left = '28%'
  egg.style.width = '40px'
  egg.style.top = '50%'


  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.left = '28%'
  })

  frame(function() {
    egg.style.left = '34%'
  })


  frame(function() {
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.left = '53%'
  })

  frame(function() {
   egg.style.left = '65%'
  })

  for (eggLeft = 65; eggLeft > 28; eggLeft-=10) {
    frame(drogoThrowsEgg)
  }

  function drogoThrowsEgg() {
    egg.style.left = (parseInt(egg.style.left) -10) + '%'
  }

}
