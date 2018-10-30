import './Card.scss';
import React from 'react';

export const Card = (props) => {
    const { filling, servings, mouses, isCustomerHappy, weight, isActive, onSetActiveItem, isDisabled } = props;

    let fillingText, mouseText;
    if(filling === 'fish') {
        fillingText = 'с рыбой';
    }
    if(filling === 'foiegras') {
        fillingText = 'с фуа-гра';
    }
    if(filling === 'chicken') {
        fillingText = 'с курой'
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
    return (
        <div className={`card${isActive ? ' card--selected' : ''}${isDisabled ? ' card--disabled' : ''}`} onClick={onSetActiveItem}>
            <span className='card__text'>Сказочное заморское яство</span>
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
    );
}