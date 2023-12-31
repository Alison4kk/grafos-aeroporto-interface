type AirportOption = {
  value: string,
  text?: string,
}

type Conection = {
  ids: string[],
  cost: number
}

type ConnectionLine = {
  x: number,
  y: number,
  width: number,
  angle: number,
  isActive: boolean,
  connection: Conection
}

type Airport = {
  id: string,
  x: number,
  y: number,
  description?: string
}

type APIConnection = {
  id: string,
  cost: number
}

type APIAirport = {
  id: string,
  connections: APIConnection[]
}

type AirportRoute = {
  pos: string,
  distance: number,
  path: string
}


type RegionColor = {
  ids: string[],
  color: string
}

type KeyValueString = {[key: string]: string}

type AirportRoutes = AirportRoute[];
export { AirportOption, AirportRoute, AirportRoutes, Airport, Conection, ConnectionLine, RegionColor, KeyValueString, APIAirport, APIConnection }