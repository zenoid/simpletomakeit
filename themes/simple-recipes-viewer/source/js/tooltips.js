document.addEventListener( 'DOMContentLoaded', function() {

  'use strict';

  /*

      Tooltips

  */

  function onTooltipEnter() {
    let tooltip = document.createElement( 'div' );
    tooltip.classList.add( 'tooltip' );
    tooltip.innerHTML = this.dataset.tooltip;
    document.body.appendChild( tooltip );
    window.addEventListener( 'mousemove', followTooltip );
  }

  function followTooltip( e ) {
    let tooltip = document.querySelector( '.tooltip' );
    let l = e.pageX + 4,
      box = tooltip.getBoundingClientRect();
    if (l + box.width >= window.innerWidth - 4) {
      l = e.pageX - 4 - box.width;
    }
    tooltip.style.top = e.pageY + 12 + "px"
    tooltip.style.left = l + "px";
  }

  function onTooltipLeave() {
    window.removeEventListener( 'mousemove', followTooltip );
    Array.from( document.querySelectorAll( '.tooltip' ) ).forEach( t => {
      document.body.removeChild( t );
    })
  }

  function setup() {
    Array.from( document.querySelectorAll( '[data-tooltip]' ) ).forEach( t => {
      t.addEventListener( 'mouseenter', onTooltipEnter );
      t.addEventListener( 'mouseleave', onTooltipLeave );
    })
  }

  /* ----------------------------- */

  window.tooltips = {
    setup: setup
  };

});