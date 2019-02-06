import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Sets up Enzyme's React test adapter.
configure({adapter: new Adapter()});

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: (x) => x,
      removeListener: (x) => x,
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };
