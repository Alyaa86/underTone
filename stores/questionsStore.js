import { extendObservable } from "mobx";
import black from '../images/frontPage.png';


class questionStore {
    constructor() {
        extendObservable(this,{
            questionSet1:[
                {
                a:{
                    name:'aaa',
                    image:black
                    },
                b:{
                    name:'bbb',
                    image:'../images/thumbnail_black 10.jpg',
                    },
                  position:0
                },

                {
                    a:{
                        name:'aa222',
                        image:'aa2222',
                        },
                    b:{
                        name:'bb222',
                        image:'bb222',
                        },
                      position:1
                }, 
                {
                    totalCount:0
                }  
            ]
        }
    )
}
}


export default new questionStore()