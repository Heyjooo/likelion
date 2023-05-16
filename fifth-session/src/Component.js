import styled from "./Component.module.css";

function Component(props) {
    return <div>
        <div>
            <img className={styled.phoneImage} src={props.img} alt=""/>
            <p>{props.title}</p>
            <p>{props.far}</p>
            <p>{props.date}</p>
            <p>{props.price}</p>
            </div>
    </div>;
}

export default Component;