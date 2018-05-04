import { extendObservable } from "mobx";
import black from '../images/frontPage.png';


class questionStore {
    constructor() {
        extendObservable(this,{
            currentlySelected:"",
            questionSet1:[
                {
                A:{
                    name:'aaa',
                    image:black
                    },
                B:{
                    name:'bbb',
                    image:black,
                    },
                  position:0
                },

                {
                A:{
                    name:'aa222',
                    image:'aa2222',
                    },
                B:{
                    name:'bb222',
                    image:'bb222',
                    },
                    position:1
                },
                { 
                A:{
                    name:'kkk',
                    image:'kkk',
                    },
                B:{
                    name:'nnn',
                    image:'nnn',
                    },
                    position:2
                }, 
                 
            ]
        }
    )
}
}


export default new questionStore()