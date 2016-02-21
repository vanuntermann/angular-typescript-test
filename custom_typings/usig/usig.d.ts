declare class MapaInteractivo {
    addMarker(place: any, goTo: boolean, onClick: any, options: any) : number;
    goTo(point: any, zoomIn: boolean) : void;
}

declare interface MapaInteractivoFactory {
    new(idDiv: string, options: any): MapaInteractivo;
}

declare class Punto {

}

declare interface PuntoFactory {
    new(coordX: number, coordY: number): Punto;
}

declare interface Usig {
    MapaInteractivo: MapaInteractivoFactory;
    Punto: PuntoFactory;
}

declare let usig: Usig;
