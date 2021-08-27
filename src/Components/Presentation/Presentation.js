import classes from './Presentation.module.css'

import img_presentation from '../../Asset/bg_header.jpg'
import Card from '../UI/Card';

const Presentation = () => {

    return(
        <div className={classes.presentation}>
            <div className={classes.presentation_img}>
                <img src={img_presentation} alt=""></img>
            </div>
            <Card className={classes.presentation_card}>
                <h2>Titulo para este card</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                </p>
            </Card>
        </div>
    )
}

export default Presentation;