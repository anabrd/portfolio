import { useTrail, a } from "react-spring";

const Trail = (props) => {

    const items = props.children;

    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.show ? 1 : 0,
        x: props.show ? 0 : 0,
        height: props.show ? 30 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
            <a.div key={index} style={style}>
                <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
            ))}
        </div>
    )
}

export default Trail;