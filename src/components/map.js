import mapboxgl from "mapbox-gl";
import StylesControl from "mapbox-gl-controls/lib/styles";
import CompassControl from 'mapbox-gl-controls/lib/compass';
import ZoomControl from 'mapbox-gl-controls/lib/zoom';
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-controls/theme.css";

export default function createMap() {
	const map = new mapboxgl.Map({
		container: "map",
		minZoom: 2,
		maxZoom: 18,
		hash: true,
		style: "https://geoserveis.icgc.cat/contextmaps/icgc.json",
		center: [1.88979, 41.69589],
		zoom: 13.61,
		attributionControl: false,
		preserveDrawingBuffer: true
	});
	
	//map.addControl(new mapboxgl.NavigationControl());

	map.addControl(new ZoomControl(), 'top-right');
	map.addControl(new CompassControl(), 'top-right');

	map.addControl(new mapboxgl.AttributionControl({
		compact: true
	}));

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

	return map;
}
