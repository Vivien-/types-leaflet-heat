import * as L from 'leaflet';

declare module 'leaflet' {
    interface HeatLayer extends Layer {
        initialize(a:any,b:any): void;
        setLatLngs(a:any):any;
        addLatLng(a:any):any;
        setOptions(a:any):any
        redraw():any;
        onAdd(a:any):any;
        onRemove(a:any):any;
        addTo(a:any):any;
        _initCanvas():void;
        _updateOptions():void;
        _reset():void;
        _redraw():void;
        _animateZoom(a:any):void
    }
    function heatLayer(a:any,b:any): any;
    
}