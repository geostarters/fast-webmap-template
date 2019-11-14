
import './css/app.css'
import mapboxgl from "mapbox-gl";
import StylesControl from 'mapbox-gl-controls/lib/styles';


export default () => {

  console.log('Init app...')

  const map = new mapboxgl.Map({
    container: "map",
    minZoom: 2,
    maxZoom: 16,
    hash: true,
    style: "https://tilemaps.icgc.cat/tileserver/styles/orto-inun-rc.json",
    center: [0.681, 40.7102],
    zoom: 11.18,
    attributionControl: false
  });




  map.addControl(new StylesControl({
    styles: [
      {
        label: 'Orto',
        styleName: 'Mapbox Streets',
        styleUrl: 'https://tilemaps.icgc.cat/tileserver/styles/orto-inun-rc.json',
      }, {
        label: 'Topo',
        styleName: 'totpo',
        styleUrl: 'https://tilemaps.icgc.cat/tileserver/styles/topo-inun-rc.json',
      },
    ],
    onChange: (style) => console.log(style),
    // map.setStyle(style.styleUrl);

  }), 'top-right');



}