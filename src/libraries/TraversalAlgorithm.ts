
type Point = {
  id: string,
  connections: PointConection[],
  x: number,
  y: number
}

type PointConection = {
  point: Point,
  cost: number
}

type Path = {
  sequence: string,
  distance: number
}

class Traverser {

  points: Point[];
  initialPoint: Point;
  finalPoint: Point;
  validPaths: Path[] = [];
  longestDistance = -1;
  pathsLimit = 0;

  constructor(points: Point[], initial: Point, final: Point) {

    points.forEach((point) => {
      const connectionsDistanceToFinal = point.connections.map((con) => {
        const x1 = con.point.x;
        const y1 = con.point.y;
        const x2 = final.x;
        const y2 = final.y;

        const distance = Math.sqrt(
          (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
        );
        return {con, distance};
      }).sort((a, b) => a.distance - b.distance);

      point.connections = connectionsDistanceToFinal.map((con) => con.con);
    });

    this.points = points;
    this.initialPoint = initial;
    this.finalPoint = final;
  }

  setPathsLimit(max: number) {
    this.pathsLimit = max;
  }

  getValidPaths(): Path[] {
      return this.validPaths;
  }

  addValidPath(newPath: Path) {
    const longestDistance = this.longestDistance;
    let longestDistanceAmongFiltered = -1;
    let hasFilterd = false;

    if (this.validPaths.length >= this.pathsLimit) {
      hasFilterd = true;
      this.validPaths = this.validPaths.filter((path) => {
        if (path.distance != longestDistance) {
          if (path.distance > longestDistanceAmongFiltered) {
            longestDistanceAmongFiltered = path.distance;
          }
          return true;
        }
        return false;
      });
    }

    this.validPaths.push(newPath);
    if ( (hasFilterd && newPath.distance > longestDistanceAmongFiltered) || (!hasFilterd && newPath.distance > this.longestDistance)) {
      this.longestDistance = newPath.distance
    } else if (hasFilterd) {
      this.longestDistance = longestDistanceAmongFiltered;
    }
  }


  traverse(point: Point = this.initialPoint, path: Path = {sequence: '', distance: 0}) {
      path.sequence += '-' + point.id;

      if (point.id == this.finalPoint.id) {
        if (this.pathsLimit == 0) {
          this.validPaths.push(path);
          return;
        }
        this.addValidPath(path);
        return;
      }

      point.connections.forEach((con) => {
          if ((path.sequence.includes(con.point.id))) return;
          if (this.pathsLimit !== 0 && (path.distance + con.cost) > this.longestDistance && this.validPaths.length >= this.pathsLimit) return;

          const newPath = {sequence: path.sequence, distance: path.distance};
          newPath.distance += con.cost;

          this.traverse(con.point, newPath);
      });
  }

}


export {Traverser, Point, PointConection, Path}