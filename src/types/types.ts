type AirportOption = {
  value: string,
  text: string,
}

type Conection = {
  ids: string[],
  cost: number
}

type ConnectionLine = {
  x: number,
  y: number,
  width: number
  angle: number
}

type Airport = {
  id: string,
  x: number,
  y: number,
}

type AirportRoute = {
  path: string[],
  cost: number
}


type AirportRoutes = AirportRoute[];
export {AirportOption, AirportRoute, AirportRoutes, Airport, Conection, ConnectionLine}