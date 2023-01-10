import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/greek-salad.webp'
import Bruschetta from '../../../assets/bruschetta.webp'
import LemonDessert from '../../../assets/lemon-dessert.webp'
import SpecialCard from './SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}