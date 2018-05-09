import { extendObservable } from "mobx";
import skin3 from '../images/skin3.jpg';
import skin4 from '../images/skin4.jpg';
import skin5 from '../images/skin5.jpg';
import skin6 from '../images/skin6.jpg';
import khaki7 from '../images/khaki7.jpg';
import grey8 from '../images/grey8.jpg';
import brown9 from '../images/brown9.jpg';
import black10 from '../images/black10.jpg';
import ivory11 from '../images/ivory11.jpg';
import white12 from '../images/white12.jpg';
import salamon13 from '../images/salamon13.jpg';
import fuchsia14 from '../images/fuchsia14.jpg';
import hazel15 from '../images/hazel15.jpg';
import blue16 from '../images/blue16.jpg';
import camel17 from '../images/camel17.jpg';
import blue18 from '../images/blue18.jpg';
import orange19 from '../images/orange19.jpg';
import magenta20 from '../images/magenta20.jpg';
import gold21 from '../images/gold21.jpg';
import silver22 from '../images/silver22.jpg';
import DeepWinter from '../images/q2DeepWinter.jpg';
import CoolWinter from '../images/q2CoolWinter.jpg';
import ClearWinter from '../images/q2ClearWinter.jpg';
import DeepAutumn from '../images/q2DeepAutumn.jpg';
import SoftAutumn from '../images/q2SoftAutumn.jpg';
import WarmAutumn from '../images/q2WarmAutumn.jpg';
import ClearSpring from '../images/q2ClearSpring.jpg';
import LightSpring from '../images/q2LightSpring.jpg';
import WarmSpring from '../images/q2WarmSpring.jpg';
import SoftSummer from '../images/q2SoftSummer.jpg';
import LightSummer from '../images/q2LightSummer.jpg';
import CoolSummer from '../images/q2CoolSummer.jpg';




class questionStore {
    constructor() {
        extendObservable(this,{
            Results:"",
            questionSet1:[
                {
                A:{
                    name:'No Redness in Skin Tone',
                    image:skin3
                    },
                B:{
                    name:'Redness in Skin Tone',
                    image:skin4,
                    },
                  position:0
                },

                {
                A:{
                    name:'Yellow Skin Tone',
                    image:skin5,
                    },
                B:{
                    name:'Red Skin Tone',
                    image:skin6,
                    },
                  position:1
                },
                { 
                A:{
                    name:'Khaki',
                    image:khaki7,
                    },
                B:{
                    name:'Grey',
                    image:grey8,
                    },
                  position:2
                },
                { 
                A:{
                    name:'Brown',
                    image:brown9,
                    },
                B:{
                    name:'Black',
                    image:black10,
                    },
                  position:3
                },
                { 
                A:{
                    name:'Ivory',
                    image:ivory11,
                    },
                B:{
                    name:'White',
                    image:white12,
                    },
                  position:4
                }, 
                { 
                A:{
                    name:'Salmon',
                    image:salamon13,
                    },
                B:{
                    name:'Fuchsia',
                    image:fuchsia14,
                    },
                  position:5
                }, 
                { 
                A:{
                    name:'Hazel',
                    image:hazel15,
                    },
                B:{
                    name:'Blue',
                    image:blue16,
                    },
                  position:6
                }, 
                { 
                A:{
                    name:'Camel',
                    image:camel17,
                    },
                B:{
                    name:'Cobalt Blue',
                    image:blue18,
                    },
                  position:7
                }, 
                { 
                A:{
                    name:'Orange',
                    image:orange19,
                    },
                B:{
                    name:'Magenta',
                    image:magenta20,
                    },
                  position:8
                }, 
                { 
                A:{
                    name:'Gold',
                    image:gold21,
                    },
                B:{
                    name:'Silver',
                    image:silver22,
                    },
                  position:9
                }, 
            ],
            questionSet2:{
               cool:[
               {
                   name:'Deep Winter',
                   image:DeepWinter,
                   position:0
               },
               {
                   name:'Clear Winter',
                   image:ClearWinter,
                   position:1
               },
               {
                   name:'SoftSummer',
                   image:SoftSummer,
                   position:2
               },
               {
                   name:'Light Summer',
                   image:LightSummer,
                   position:3
               },

               ],
               neutral:[
               {
                   name:'Cool Winter',
                   image:CoolWinter,
                   position:0
               },
               {
                   name:'Cool Summer',
                   image:CoolSummer,
                   position:1
               },
               {
                   name:'Warm Autumn',
                   image:WarmAutumn,
                   position:2
               },
               {
                   name:'Warm Spring',
                   image:WarmSpring,
                   position:3
               },

               ],
               warm:[
               {
                   name:'Deep Autumn',
                   image:DeepAutumn,
                   position:0
               },
               {
                   name:'Soft Autumn',
                   image:SoftAutumn,
                   position:1
               },
               {
                   name:'Light Spring',
                   image:LightSpring,
                   position:2
               },
               {
                   name:'Clear Spring',
                   image:ClearSpring,
                   position:3
               },

               ],
            },
        })
        
    }      

}




export default new questionStore()