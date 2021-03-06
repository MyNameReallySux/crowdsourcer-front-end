/* ##########################
  Imports
########################## */

import 'babel-polyfill'
import $ from 'jquery'
import 'bootstrap-loader'

import '../sass/app.scss'

/* ##########################
  Global Variables

  Note: if you need something completely global, attach it to the window object.
  Webpack encapulates everything in it's own scope and it is not truly
  global.

  Example:
    window.custom = function(){ return 10 }

    ..later

    custom()
    > 10

########################## */

const screenWidths = {
  xxs: { min: '-1',   max: '479'},
  xs:  { min: '480',  max: '767'},
  sm:  { min: '768',  max: '991'},
  md:  { min: '992',  max: '1199'},
  lg:  { min: '1200', max: '-1'}
}

let screen = {}

/* ##########################
  Global Functions
########################## */

function setScreenWidth(){
  screen.width = $(window).width()
  screen.height = $(window).height()
}

function isScreenWidth(){
  let min, max

  switch(arguments.length){
    case 1: {
      if(typeof arguments[0] == 'string') arguments[0] = screenWidths[arguments[0]].min
      min = arguments[0]
      max = -1
    } break
    case 2: {
      if(typeof arguments[0] == 'string') arguments[0] = screenWidths[arguments[0]].min
      if(typeof arguments[1] == 'string') arguments[1] = screenWidths[arguments[1]].max
      min = arguments[0]
      max = arguments[1]
    } break
  }

  if(min == -1 || screen.width >= min && max == -1 || screen.width < max){
    return true
  }
}

/* ##########################
  Prototype Extensions
########################## */

String.prototype.contains = function(str) {
    return this.indexOf(str) != -1;
};


/* ##########################
  On Resize
########################## */

let resizeDone
$(window).resize(function($){
    clearTimeout(resizeDone);
    resizeDone = setTimeout(function(){
        // functions go here
        setScreenWidth()
        if(isScreenWidth('xs')){
          console.log(`XS : Screen width is ${screen.width}`)
        }
        if(isScreenWidth('xs', 'sm')){
          console.log(`XS :: SM : Screen width is ${screen.width}`)
        }
        if(isScreenWidth('sm', 'md')){
          console.log(`SM :: MD : Screen width is ${screen.width}`)
        }
        if(isScreenWidth('md', 'lg')){
          console.log(`MD :: LG : Screen width is ${screen.width}`)
        }
        if(isScreenWidth('lg')){
          console.log(`LG : Screen width is ${screen.width}`)
        }
    }, 100);
});

/* ##########################
  Functions
########################## */

/* ##########################
  Procedure
########################## */

// This should be the only $(document.ready()) function in the entire project,
$(document).ready(function(){
  console.info('Document is ready!')
})
