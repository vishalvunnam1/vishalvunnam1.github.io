const _bpm_elem = document.getElementById('BPM');
const _calc_bpm = document.getElementById('calcBPM');
const volume = document.getElementById('finalVolume');
const _precision = 5;
let _bpm = 0;
let _taps = [];

function assignEvents() {
  
  _bpm_elem.onclick = function() {
    _taps.push( Date.now() );
    calcBPM();
  };
}


function calcBPM() {
  let current_bpm = 0;
  let ticks = [];

  if (_taps.length >= 2) {
    
    for (let i = 0; i < _taps.length; i++) {
      if (i >= 1) {

        // calc bpm between last two taps
        ticks.push( Math.round( 60 / (_taps[i] / 1000 - _taps[i-1] / 1000) * 100) / 100 );
      }
    }
  }
  
  if (_taps.length >= 24) {
    _taps.shift();
  }
  
  if (ticks.length >= 2) {
    
    current_bpm = getAverage(ticks, _precision);
    

    _bpm = current_bpm;

    showCurrentBPM();
  }
}


function getAverage(Values, Precision) {
  let ticks = Values;
  let n = 0;
  
  for (let i = ticks.length-1; i >= 0; i--) {
    n += ticks[i];
    if (ticks.length - i >= Precision) break;
  }

  return n / _precision;
}


function showCurrentBPM() {
    let calcvolume = _bpm;
  calcvolume = _bpm/120 * 100;
  if (calcvolume > 100)
  {
    var x = calcvolume -100;
    Math.round(x);
    calcvolume = 100 - x;
  
    


  }
  _calc_bpm.innerHTML = "BPM: " + Math.round(_bpm) +" VOLUME:" + Math.round(calcvolume);
}


// init
window.onload = assignEvents;