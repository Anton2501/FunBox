import './Card.scss';
import React from 'react';

export class Card extends React.Component{

    state = {
        selected: false,
        canBeHovered: false
    }

    mainWrapRef = React.createRef();

    onToggleActiveState = (e) => {
        if(this.props.onToggleActiveItem) {
            this.props.onToggleActiveItem(e);
        }
        this.setState(prevState => ({
            selected: !prevState.selected,
            canBeHovered: false
        }));        
    }

    mouseLeaveHundler = (e) => {
        if(this.state.selected) {
            this.setState({ canBeHovered: true });
        } else {
            this.setState({ canBeHovered: false });
        }
    }

    componentDidMount() {
        this.mainWrapRef.current.addEventListener('mouseleave', this.mouseLeaveHundler);
    }

    componentWillUnmount() {
        this.mainWrapRef.current.removeEventListener('mouseleave', this.mouseLeaveHundler);
    }

    render() {
        const { filling, servings, mouses, isCustomerHappy, weight, isActive, disabled } = this.props;

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
            cardMessage = <span>Чего сидишь? Порадуй котэ, <i>купи.</i></span>
        }

        if(disabled) {
            cardMessage = `Печалька, ${fillingText} закончился`
        }

        const mainWrapClassName = `card${isActive ? ' card--selected' : ''}${this.state.canBeHovered ? ' card--has-hover' : ''}${disabled ? ' card--disabled' : ''}`;

        return (
            <div className={mainWrapClassName} onClick={this.onToggleActiveState} ref={this.mainWrapRef}>
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
    
}