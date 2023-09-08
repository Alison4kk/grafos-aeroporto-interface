type AirportOption = {
  value: string,
  text: string,
}

type Conection = {
  id: string,
  cost: number
}

type Airport = {
  id: string,
  x: number,
  y: number,
  connections: Conection[]
}


type AirportRoute = string[];
type AirportRoutes = AirportRoute[];


export {AirportOption, AirportRoute, AirportRoutes, Airport, Conection}