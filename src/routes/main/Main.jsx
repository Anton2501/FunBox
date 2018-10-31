import './Main.scss';
import React from 'react';
import { Card } from '../../components/Card.jsx';

const listData = [
    {
        index: 0,
        filling: 'foiegras', 
        servings: 10,
        mouses: 1,
        isCustomerHappy: false,
        weight: '0,5', // строка ради запятой
        isActive: false,
        isDisabled: false
    },
    {
        index: 1,
        filling: 'fish',
        servings: 40,
        mouses: 2,
        isCustomerHappy: false,
        weight: 2,
        isActive: false,
        isDisabled: false
    },
    {
        index: 2,
        filling: 'chicken',
        servings: 100,
        mouses: 5,
        isCustomerHappy: true,
        weight: 5,
        isActive: false,
        isDisabled: true
    }
];

export class Main extends React.Component {
    state = {
        listData: listData
    }

    onToggleActiveItem = (index) => {
        let newListData = [...this.state.listData];
        if(newListData[index].isDisabled) {
            return;
        }
        let isActive = newListData[index].isActive;
        newListData[index].isActive = !isActive;
        this.setState({ listData: newListData });
    }

    render() {
        return (
            <main className='main'>
                <div className='main__container'>
                    <h1 className='main__title'>Ты сегодня покормил кота?</h1>
                    <ul className='cards-list'>
                        {this.state.listData.map((item, i) => (
                            <Card   filling={item.filling} 
                                    servings={item.servings} 
                                    mouses={item.mouses} 
                                    isCustomerHappy={item.isCustomerHappy} 
                                    weight={item.weight}
                                    onToggleActiveItem={() => this.onToggleActiveItem(i)}
                                    isActive={item.isActive}
                                    key={item.index}
                                    disabled={item.isDisabled}
                                />
                        ))}
                    </ul>
                </div>                
            </main>
        )
    }
};