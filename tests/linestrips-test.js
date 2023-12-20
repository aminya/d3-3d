import { test } from 'tape';
import * as d3 from '../index.js';
import { lineStrips3D } from '../index.js';

test('linestrip draws correctly', function (t) {
    var data = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4],
        [-3, 0, 2]
    ];

    var ls3D = d3._3d().scale(30).origin([220, 340]).shape('LINE_STRIP');

    t.equal(
        ls3D.draw(ls3D([data])[0]),
        'M130,340L160,580L190,430L220,610L250,370L280,1690L310,490'
    );
    t.end();
});

test('centroid calculation for linesstrip', function (t) {
    var data = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4],
        [-3, 0, 2]
    ];

    var data2 = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4]
    ];

    var ls3D = d3._3d().scale(30).origin([220, 340]).shape('LINE_STRIP');

    t.deepEqual(ls3D([data])[0].centroid, { x: 0, y: 9, z: 3 });
    t.deepEqual(ls3D([data2])[0].centroid, { x: 0.5, y: 5, z: 2.5 });

    t.end();
});

/**
 *  v1.0.0
 **/
test('linestrip draws correctly', (t) => {
    t.plan(1);

    const data = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4],
        [-3, 0, 2]
    ];

    const lineStrip = lineStrips3D().scale(30).origin([220, 340]);

    t.equal(
        lineStrip.draw(lineStrip([data])[0]),
        'M130,340L160,580L190,430L220,610L250,370L280,1690L310,490'
    );
    t.end();
});

test('centroid calculation for linesstrip', (t) => {
    t.plan(2);

    const data = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4],
        [-3, 0, 2]
    ];

    const data2 = [
        [3, 5, 2],
        [2, 45, 2],
        [1, 1, 2],
        [0, 9, 3],
        [-1, 3, 2],
        [-2, 8, 4]
    ];

    const lineStrip = lineStrips3D().scale(30).origin([220, 340]);

    t.deepEqual(lineStrip([data])[0].centroid, { x: 0, y: 9, z: 3 });
    t.deepEqual(lineStrip([data2])[0].centroid, { x: 0.5, y: 5, z: 2.5 });

    t.end();
});
