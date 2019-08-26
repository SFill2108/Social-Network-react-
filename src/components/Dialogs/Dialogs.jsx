import React from 'react';
import classes from './Dialogs.module.css'
const Dialogs = (props) =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    Маша
                </div>
                <div className={classes.dialog + " " + classes.active}>
                    Даниил
                </div>
                <div className={classes.dialog}>
                    Денис
                </div>
                <div className={classes.dialog}>
                    Владислав
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Прив</div>
                <div className={classes.message}>Как дела</div>
                <div className={classes.message}>приходи</div>
            </div>
        </div>
    );
}

export default Dialogs;