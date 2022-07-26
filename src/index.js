import kaboom from "kaboom";

kaboom();

const fpsDisplay = add([
    text("FPS: 0", { size: 50 }),
    pos(10, 100)
])

const countDisplay = add([
    text("Count: 0", { size: 50 }),
    pos(10, 10),
    { count: 0 }
]);

function click() {
    let objectsToAdd = 100;
    for (let i = 0; i < objectsToAdd; i++) {
        add([
            rect(100, 100),
            pos(100, 250),
            rotate(0),
            origin("center"),
            "testRect"

        ]);
        countDisplay.text = `Count: ${++countDisplay.count}`
    }    
}
onClick(() => click());
onTouchStart(() => click());

onUpdate("testRect", (r) => r.angle += 20 * dt());
setInterval(
    () => fpsDisplay.text = `FPS: ${Math.round(1 / dt())}`,
    100
);
