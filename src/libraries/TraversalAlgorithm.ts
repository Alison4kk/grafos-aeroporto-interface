
type Point = {
  id: string,
  conections: PointConection[]
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

  points: Point[] = [];
  initialPoint: Point | null = null;
  finalPoint: Point | null = null;
  validPaths: Path[] = [];

  setPoints(points: Point[]) {
      this.points = points;
  }

  setInitialPoint(point: Point) {
      this.initialPoint = point;
  }

  setFinalPoint(point: Point) {
      this.finalPoint = point;
  }

  getValidPaths(): Path[] {
      return this.validPaths;
  }


  traverse(point: Point | undefined = undefined, path: Path | undefined = undefined) {
      if (!this.initialPoint || !this.finalPoint)
          return;

      if (point === undefined) { point = this.initialPoint; }
      if (path === undefined) { path = {sequence: '', distance: 0};}

      path.sequence += '-' + point.id;

      if (point.id == this.finalPoint.id) {
          this.validPaths.push( {sequence: path.sequence, distance: path.distance} );
          return;
      }

      point.conections.forEach((con) => {
          if (!path) return;
          if (!path.sequence.includes(con.point.id)) {
              const newPath = {sequence: path.sequence, distance: path.distance};
              newPath.distance += con.cost;
              this.traverse(con.point, newPath);
          }
      });
  }

}


export {Traverser, Point, PointConection, Path}