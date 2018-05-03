import { extendObservable } from "mobx";

class questionStore {
    constructor() {
        extendObservable(this,{
            questionSet1:[
                {
                a:{
                    name:'aaa',
                    image:'../images/thumbnail_black 10.jpg'
                    },
                b:{
                    name:'bbb',
                    image:'../images/thumbnail_black 10.jpg',
                    },
                  position:1
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
                      position:2
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