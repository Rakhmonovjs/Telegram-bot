import React, { useCallback } from 'react';
import './Form.css';
import  { useState } from 'react';
import  { useEffect } from "react";
import useTelegram from '../hooks/useTelegram';


const Form = () => {

    const [subject, setSubject] = useState('');
    const [city, setCity] = useState('');
    const [street,setStreet]= useState('');
    const [number, setNumber] = useState('');
    const [order, setOrder] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback( () => {
        const data = {
            subject,
            city,
            street,
            number,
            order
            
        }
        tg.sendData(JSON.stringify(data));
    }, [subject, city, street, number, order ])

    useEffect( () => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect( ()=>{
        tg.MainButton.setParams( {
            text: 'Отправить данные '
        })
    }, [])

    useEffect( () => {
        if(!street || !city){
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }, [subject,city, street,number, order])

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
   
    const onChangeOrder = (e) => {
        setOrder(e.target.value)
    }
   
   


    return (
        <div className={'form'}>
            <h3>Заполните информацию</h3>
            <input  className={'input'} type="text" placeholder={'Имя и фамилия'} value={subject} onChange={onChangeSubject}/>
           <input className={'input'} type="text" placeholder={'Город или деревня'}  value={city} onChange={onChangeCity}/>
           <input className={'input'} type="text" placeholder={'улица'} value={street} onChange={onChangeStreet}/>
           <input className={'input'} type="number" placeholder={'Ваш номер телефона'} value={number} onChange={onChangeNumber}/>
           <input className={'input'} type="text" placeholder={'Количество вашего заказа '} value={order} onChange={onChangeOrder}/>

           <select  value={subject} onChange={onChange} className={'select'}>
            <option value={'physical'}>Доставка</option>
            <option value={'legal'}>Сам возьмешь?</option>
           </select>

        </div>
    )
}

export default Form




// import React, {useCallback, useEffect, useState} from 'react';
// import './Form.css';
// import {useTelegram} from "../hooks/useTelegram";

// const Form = () => {
//     const [country, setCountry] = useState('');
//     const [street, setStreet] = useState('');
//     const [subject, setSubject] = useState('physical');
//     const {tg} = useTelegram();

//     const onSendData = useCallback(() => {
//         const data = {
//             country,
//             street,
//             subject
//         }
//         tg.sendData(JSON.stringify(data));
//     }, [country, street, subject])

//     useEffect(() => {
//         tg.onEvent('mainButtonClicked', onSendData)
//         return () => {
//             tg.offEvent('mainButtonClicked', onSendData)
//         }
//     }, [onSendData])

//     useEffect(() => {
//         tg.MainButton.setParams({
//             text: 'Отправить данные'
//         })
//     }, [])

//     useEffect(() => {
//         if(!street || !country) {
//             tg.MainButton.hide();
//         } else {
//             tg.MainButton.show();
//         }
//     }, [country, street])

//     const onChangeCountry = (e) => {
//         setCountry(e.target.value)
//     }

//     const onChangeStreet = (e) => {
//         setStreet(e.target.value)
//     }

//     const onChangeSubject = (e) => {
//         setSubject(e.target.value)
//     }

//     return (
//         <div className={"form"}>
//             <h3>Введите ваши данные</h3>
//             <input
//                 className={'input'}
//                 type="text"
//                 placeholder={'Страна'}
//                 value={country}
//                 onChange={onChangeCountry}
//             />
//             <input
//                 className={'input'}
//                 type="text"
//                 placeholder={'Улица'}
//                 value={street}
//                 onChange={onChangeStreet}
//             />
//             <select value={subject} onChange={onChangeSubject} className={'select'}>
//                 <option value={'physical'}>Физ. лицо</option>
//                 <option value={'legal'}>Юр. лицо</option>
//             </select>
//         </div>
//     );
// };

// export default Form;
