// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import App from './src/App';
import React from 'react';





const tg = window.Telegram.WebApp; 


export function useTelegram(){

        
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }


    return {
        onClose,
        onToggleButton,
            tg,
            user:tg.imitDataUnsafe?.user,
        
    }
}
export default useTelegram;