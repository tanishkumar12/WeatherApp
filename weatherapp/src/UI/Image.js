import { Fragment, useState, useEffect } from "react";
import dayImage from '../assets/day_image.svg';
import nightImage from '../assets/night_image.svg';
import classes from './Image.css';

const Image = props => {
    // console.log(day);
    return <Fragment>
        {!props.curNight && <img src={dayImage} className={classes.image} />}
        {props.curNight && <img src={nightImage} className={classes.image} />}
    </Fragment>;
}

export default Image;