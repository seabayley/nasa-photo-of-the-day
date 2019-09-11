import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayWrapper from './components/DisplayWrapper';
import "./App.css";

function App() {
  const [apodData, setApodData] = useState({});
  const [error, setError] = useState('');

  function clickCarouselButton(direction, stateSetter) {
    if (direction === 'left') {
      stateSetter(state => state - 1)
    }
  }

  const testData = [
    {
      "date": "1997-07-31",
      "explanation": "What if we could see back to the beginning of the universe? At one tenth the universe's present age, we might see galaxies forming.  But what did galaxies look like when they were forming?  These questions took a step toward being answered yesterday with the release of analysis of a Hubble Space Telescope (HST) photograph of the most distant object yet discovered.  Pictured in the box above, this galaxy appears to us - billions of years later and across the universe - as a faint red smudge. In technical terms, this galaxy lies at the record redshift of z=4.92.  Practically all of the yellow-white objects in the photograph are galaxies in a nearby cluster which together act as a lens in amplifying the light from the ancient galaxy.  A follow-up picture by the ground-based Keck Telescope actually measured the distant redshift.",
      "hdurl": "https://apod.nasa.gov/apod/image/9707/cl1358_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Behind CL1358+62:  A New Farthest Object",
      "url": "https://apod.nasa.gov/apod/image/9707/cl1358_hst.jpg"
    },
    {
      "date": "2017-11-27",
      "explanation": "Where do hurricanes go?  To better understand dangerous storms, NASA compiled data from several satellites into a supercomputer simulation of this past year's hurricane season. Specifically, the featured video shows how smoke (white), sea salt (blue), and dust (brown) tracked from 2017 August through October across the northern half of Earth's Western Hemisphere. These aerosols usefully trace sometimes invisible winds. In the midst of the many mesmerizing flows, hurricanes can be seen swirling across the Atlantic Ocean on the right. Some of these hurricanes lashed islands and coastal regions in North America before dissipating in the northern Atlantic. Studying this year's weather patterns may bolster more accurate storm forecasts as soon as next year.   Follow APOD on: Facebook,  Google Plus,  Instagram, or Twitter",
      "media_type": "video",
      "service_version": "v1",
      "title": "Hurricane Season Animated",
      "url": "https://www.youtube.com/embed/h1eRp0EGOmE?rel=0&showinfo=0"
    },
    {
      "date": "2006-12-13",
      "explanation": "Tsunamis this large don't happen on Earth.  One week ago, a large solar flare from an Earth-sized sunspot produced a tsunami-type shock wave that was spectacular even for the Sun.  Pictured above, the tsunami wave was captured moving out from active region AR 10930 by the Optical Solar Patrol Network (OSPAN) telescope in New Mexico, USA.  The resulting shock wave, known technically as a Moreton wave, compressed and heated up gasses including hydrogen in the photosphere of the Sun, causing a momentarily brighter glow.  The above image was taken in a very specific red color emitted exclusively by hydrogen gas.  The rampaging tsunami took out some active filaments on the Sun, although many re-established themselves later.  The solar tsunami spread at nearly one million kilometers per hour, and circled the entire Sun in a matter of minutes.",
      "hdurl": "https://apod.nasa.gov/apod/image/0612/suntsunami_nso.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Large Tsunami Shock Wave on the Sun",
      "url": "https://apod.nasa.gov/apod/image/0612/suntsunami_nso_big.gif"
    },
    {
      "copyright": "John Pane",
      "date": "2008-02-05",
      "explanation": "How has Comet Holmes changed? Since brightening unexpectedly by nearly one million fold in late October, the last three months have found the coma of Comet 17P/Holmes both expanding and fading. This spectacular composite image shows how the coma and tail of Comet Holmes have changed. Due to Earth's changing vantage point, Comet Holmes, out beyond the orbit of Mars, was seen in November nearly head-on, but in recent months is seen more from the side. Additionally, the comet's motion, when combined with Earth's changing perspective, has caused the comet to have shifted relative to the background stars. The curved path of Comet Holmes shows it to be undergoing apparent retrograde motion as the Earth orbits quickly in front of it. The extent of the coma currently makes Comet Holmes over five times the physical size of our Sun. Anecdotal evidence holds that the comet is hard to see without long photographic exposures, but on such exposures the comet may still be an impressive sight.   digg_url = 'http://apod.nasa.gov/apod/ap080205.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0802/holmescomposite_pane_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Three Month Composite of Comet Holmes",
      "url": "https://apod.nasa.gov/apod/image/0802/holmescomposite_pane.jpg"
    },
    {
      "copyright": "Vincent Brady",
      "date": "2018-10-24",
      "explanation": "What's happening in the sky? Unusual lights appeared last week to hover above Whitefish Bay on the eastern edge of Lake Superior between the USA and Canada. Unsure of the cause, the Michigan-based astrophotographer switched camera lenses -- from fisheye to telephoto -- and soon realized he was seeing light pillars: vertical lines of light over a ground source that reflect from falling ice crystals.  As the ground temperature was above freezing, the flat crystals likely melted as they approached the ground, creating a lower end to the vertical light pillars.  The red ground lights originated from wind turbines on Ile Parisienne, a Canadian Island visible across the bay.",
      "hdurl": "https://apod.nasa.gov/apod/image/1810/LightPillars_Brady_4000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Light Pillars over Whitefish Bay",
      "url": "https://apod.nasa.gov/apod/image/1810/LightPillars_Brady_960.jpg"
    }
  ]

  /*   useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=r0xlPKp5sbsJPh2cxpTryqkoyxmhX5zK2AEVyqyR&count=5')
        .then(response => {
          setApodData(response.data);
        })
    }) */
  return (
    <div className="App">
      <DisplayWrapper data={testData} carouselClick={clickCarouselButton} />
    </div>
  );
}

export default App;
