export const split = (paths) => paths
    .split('\n')
    .map((path) => path.split(','));

const sequence = (length, vector) => {
    const result = [];
    for (let i = 1; i <= length; i += 1) {
        result.push(vector.map((coord) => coord * i));
    }
    return result;
};

export const layWire = (origin, vertex) => {
    const direction = vertex[0];
    const length = parseInt(vertex.slice(1), 10);
    const vectors = {
        R: [1, 0],
        L: [-1, 0],
        U: [0, 1],
        D: [0, -1],
    };
    return sequence(length, vectors[direction]).map(([x, y]) => [origin[0] + x, origin[1] + y]);
};

export const layPath = (path) => {
    let occupied = [];
    path.forEach((vertex) => {
        const origin = occupied[occupied.length - 1] || [0, 0];
        occupied = [...occupied, ...layWire(origin, vertex)];
    });
    return occupied;
};

export const findCrossovers = (path1, path2) => (
    path1.filter(([x1, y1]) => (
        path2.find(([x2, y2]) => x1 === x2 && y1 === y2)))
);

export const manhattanDistance = ([x, y]) => Math.abs(x) + Math.abs(y);

export const distance = (paths) => {
    const fullPaths = split(paths).map(layPath);
    return findCrossovers(...fullPaths)
        .map(manhattanDistance)
        .sort((a, b) => a - b)[0];
};
