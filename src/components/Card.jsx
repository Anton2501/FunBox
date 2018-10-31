import './Card.scss';
import React from 'react';

export const Card = (props) => {
    const { filling, servings, mouses, isCustomerHappy, weight, isActive, onToggleActiveItem, disabled } = props;

    let fillingText, mouseText, cardMessage;
    if(filling === 'fish') {
        fillingText = 'с рыбой';
        cardMessage = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    }
    if(filling === 'foiegras') {
        fillingText = 'с фуа-гра';
        cardMessage = 'Печень утки разварная с артишоками.';
    }
    if(filling === 'chicken') {
        fillingText = 'с курой';
        cardMessage = 'Филе из цыплят с трюфелями в бульоне.';
    }
    //если мышей может быть не больше 10, этого хватит:
    if( mouses === 1) {
        mouseText = 'мышь'
    }
    if( mouses === 2 || mouses > 2 ) {
        mouseText = 'мыши'
    }
    if( mouses === 5 || mouses > 5) {
        mouseText = 'мышей'
    }

    if(!isActive) {
        cardMessage = <span>Чего сидишь? Порадуй котэ, <i>купи</i></span>
    }

    if(disabled) {
        cardMessage = `Печалька, ${fillingText} закончился`
    }
    return (
        <div className={`card${isActive ? ' card--selected' : ''}${disabled ? ' card--disabled' : ''}`} onClick={onToggleActiveItem}>
            <div className='card__head'>
                <span className='card__text'>Сказочное заморское яство</span>
            </div>
            <div className="card__body">
                <h3 className='card__title'>Нямушка</h3>
                <h4 className='card__filling'>{fillingText}</h4>
                <div className='card__dis'>
                    <span><i>{servings}</i> порций</span>
                    <span><i>{mouses !== 1 ? mouses : ''}</i> {mouseText} в подарок</span>
                    {isCustomerHappy ? <span>заказчик доволен</span> : null}
                </div>
                <div className='card__weight'>
                    <i>{weight}</i>
                    <span>кг</span>
                </div>
            </div>  
            <div className={`card__message${disabled ? ' card__message--is-over' : ''}`}>{cardMessage}</div>
        </div>
    );
}