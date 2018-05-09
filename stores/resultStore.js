import { extendObservable } from "mobx";
import brightSpring from '../images/brightSpring.png';
import brightWinter from '../images/brightWinter.png';
import darkAutumn from '../images/darkAutumn.png';
import darkWinter from '../images/darkWinter.png';
import lightSpring from '../images/lightSpring.png';
import lightSummer from '../images/lightSummer.png';
import softAutumn from '../images/softAutumn.png';
import softSummer from '../images/softSummer.png';
import nutralAutumn from '../images/nutralAutumn.png';
import nutralSpring from '../images/nutralSpring.png';
import nutralSummer from '../images/nutralSummer.png';
import nutralWinter from '../images/nutralWinter.png';



class resultStore {
    constructor() {
        extendObservable(this,{
    Results:'',
    finalResults : [
        {
            name: ' bright spring ',
            image: brightSpring,
            position: 0 
        },
        {
            name: ' bright winter ',
            image: brightWinter,
            position: 1
        },
        {
           name: ' dark autumn ',
            image: darkAutumn,
            position: 2
        },{
            name: ' dark winter ',
            image: darkWinter,
            position: 3
        },
        {
            name: ' light spring ',
            image: lightSpring,
            position: 4
        },
        {
           name: ' light summer ',
            image: lightSummer,
            position: 5
        },{
            name: ' soft autumn ',
            image: softAutumn,
            position: 6
        },
        {
            name: ' soft summer ',
            image: softSummer,
            position: 7
        },
        {
           name: ' true autumn ',
            image: nutralAutumn,
            position: 8
        },{
            name: ' true spring ',
            image: nutralSpring,
            position: 9
        },
        {
            name: ' true summer ',
            image: nutralSummer,
            position: 10
        },
        {
           name: ' true winter ',
            image: nutralWinter,
            position: 11
        },
    ]
            }
        )
    }
}


export default new resultStore()