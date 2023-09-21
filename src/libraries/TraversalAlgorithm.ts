
type Point = {
    id: string,
    conections: PointConection[]
}

type PointConection = {
    point: Point,
    cost: number
}

type Path = {
    sequence: string[],
    distance: number
}

function cloneObject(obj: Object) {
    return JSON.parse(JSON.stringify(obj));
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
        if (path === undefined) { path = {sequence: [], distance: 0};}
    
        path.sequence.push(point.id);
    
        if (point.id == this.finalPoint.id) {
            this.validPaths.push(cloneObject(path));
            return;
        }
        point.conections.forEach((con) => {
            if (!path) return;
            if (path.sequence.indexOf(con.point.id) === -1 ) {
                let newPath = cloneObject(path) as Path;
                newPath.distance += con.cost;
                this.traverse(con.point, newPath);
            }
        });
    }

}

let Points: Point[] = [];

for(let i=1; i<=5 ; i++){
    Points[i] = ({id: i.toString(), conections: []});
}

Points[1].conections.push({point: Points[2], cost: 2});
Points[2].conections.push({point: Points[3], cost: 1});
Points[2].conections.push({point: Points[4], cost: 2});
Points[3].conections.push({point: Points[2], cost: 1});
Points[3].conections.push({point: Points[5], cost: 2});
Points[4].conections.push({point: Points[2], cost: 2});
Points[4].conections.push({point: Points[5], cost: 1});
Points[5].conections.push({point: Points[4], cost: 1});
Points[5].conections.push({point: Points[3], cost: 2});

const traverser = new Traverser();
traverser.setPoints(Points);
traverser.setInitialPoint(Points[1]);
traverser.setFinalPoint(Points[5]);
traverser.traverse();

console.log(Points);

console.log(traverser.getValidPaths());
