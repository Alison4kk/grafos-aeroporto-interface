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

type AirportRoute = string[];
type AirportRoutes = AirportRoute[];
export {AirportOption, AirportRoute, AirportRoutes, Airport, Conection, ConnectionLine}