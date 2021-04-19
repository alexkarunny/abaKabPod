import React, {useState} from "react";

type IndependentRatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function IndependentRating(props: IndependentRatingPropsType) {
    let [light1, setLight1] = useState(false);
    let [light2, setLight2] = useState(false);
    let [light3, setLight3] = useState(false);
    let [light4, setLight4] = useState(false);
    let [light5, setLight5] = useState(false);

    return (
        <div>
            <Star selected={light1}/><button onClick={() => {setLight1(true)}}>1</button>
            <Star selected={light2}/><button onClick={() => {setLight2(true)}}>2</button>
            <Star selected={light3}/><button onClick={() => {setLight3(true)}}>3</button>
            <Star selected={light4}/><button onClick={() => {setLight4(true)}}>4</button>
            <Star selected={light5}/><button onClick={() => {setLight5(true)}}>5</button>
        </div>
    );
}

type StarPropsType = {
    selected: true | false
}

function Star(props: StarPropsType) {
    console.log("star rendered")

    if (props.selected === true) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
}