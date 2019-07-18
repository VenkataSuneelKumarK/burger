/**
 * Created by kanamars on 18/07/19.
 */
import React from 'react';
import Aux from '../../HOC/Aux';
import classes from './Layout.module.css';

const layout = (prop) => (
    <Aux>
      <div> Tool bar, Side Drawer , Backdrop</div>
      <main className={classes.Content}>
        {prop.children}
      </main>
    </Aux>

);

export default layout;