import classes from './Items.module.css'

import allitems from './allitems'
import Item from './Item';
import Card from '../UI/Card';

const Items = () => {

    return (
        <Card className={classes.items_card}>
            {allitems.map(i => 
                <Item item={i} key={i.id}></Item>
            )}
        </Card>
    )
}

export default Items;