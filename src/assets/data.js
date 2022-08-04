import React,{ useState} from 'react'

import t_1 from '../assets/t-1.png'
import t_2 from '../assets/t-2.png'
import t_3 from '../assets/t-3.png'
import t_4 from '../assets/t-4.png'
import t_5 from '../assets/t-5.png'
import t_6 from '../assets/t-6.png'
import t_7 from '../assets/t-7.png'
import t_8 from '../assets/t-8.png'
import t_9 from '../assets/t-9.png'
import t_10 from '../assets/t-10.png'
import p_1 from '../assets/p-1.png'
import a_1 from '../assets/a-1.png'
import c_1 from '../assets/c-1.png'
import a_2 from '../assets/a-2.png'
import a_3 from '../assets/a-3.png'
import a_4 from '../assets/a-4.png'
import c_2 from '../assets/c-2.png'
import c_3 from '../assets/c-3.png'
import a_5 from '../assets/a-5.png'
import a_6 from '../assets/a-6.png'
import a_7 from '../assets/a-7.png'
import a_8 from '../assets/a-8.png'
import a_9 from '../assets/a-9.png'
import a_10 from '../assets/a-10.png'
import a_11 from '../assets/a-11.png'
import a_12 from '../assets/a-12.png'

import j_1 from '../assets/j-1.png'
import j_2 from '../assets/j-2.png'
import j_3 from '../assets/j-3.png'
import j_4 from '../assets/j-4.png'
import j_5 from '../assets/j-5.png'
import j_6 from '../assets/j-6.png'
import p_2 from '../assets/p-2.png'
import p_3 from '../assets/p-3.png'
import p_4 from '../assets/p-4.png'
import p_5 from '../assets/p-5.png'



 export const data =[
    {id:1,
     name:'#1 - Roundiiies',
     img:t_1 ,
     l_price:'45.2',
     p:'+1,095.3',
     e:'87,490.32',
    
    },


    {id:2,
        name:'#2 - Flewid',
        img:t_2 ,
        l_price:'2.2',
        p:'-5.6',
        e:'5,984.23',
       
       },


       {id:3,
        name:'#3 - Angel of Moon',
        img:t_3 ,
        l_price:'15.2',
        p:'+19.6',
        e:'109,938.11',
       
       },


       {id:4,
        name:'#4 - Goggle Eyes',
        img:t_4 ,
        l_price:'0.7',
        p:'-1.9',
        e:'65,382.17',
       
       },


       {id:5,
        name:'#5 - Paradize',
        img:t_5 ,
        l_price:'75.2',
        p:'+214.8',
        e:'10,980.66',
       
       },
]









export const data2 =[
    {id:1,
     name:'#1 - Bored Something',
     img:t_6 ,
     l_price:'35.2',
     p:'+33,902.6%',
     e:'11,192.84',
    
    },


    {id:2,
        name:'##2 - LTD SOCKS',
        img:t_7 ,
        l_price:'1.2',
        p:'+11,231.4',
        e:'55,984.23',
       
       },


       {id:3,
        name:'#3 - SpAcEwArP',
        img:t_8 ,
        l_price:'1.9',
        p:'+1,982.0',
        e:'4,908.39',
       
       },


       {id:4,
        name:'#4 - BUILDblcks',
        img:t_9 ,
        l_price:'10.7',
        p:'+709.9',
        e:'1,093.84',
       
       },


       {id:5,
        name:'#5 - Roman Empire',
        img:t_10 ,
        l_price:'11.4',
        p:'+580.3',
        e:'4,095.37',
       
       },
]








////////////////////////////////////////////////////////////////////////////


export const collections =[
    {id:1,creator:'john', name:'Nft01' ,img:a_1,price:'3304',ui:c_1,bid:4,like:120,price:'43',description:"The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board."},
    {id:2,creator:'emily', name:'Nft02' ,img:a_2,price:'3304',ui:c_2,bid:7,like:170,price:'89',description:"The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale"},
    {id:3,creator:'tommy', name:'Nft03' ,img:a_3,price:'3304',ui:c_3,bid:3,like:270,price:'49',description:"A brand for the metaverse. Built by the community. View the collection at azuki.com/gallery. Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future."},
    {id:4,creator:'rush', name:'Nft04' ,img:a_4,price:'3304',ui:c_1,bid:23,like:270,price:'149',description:"Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. Cool Cat holders can participate in exclusive events such as NFT claims, raffles, community giveaways, and more. Remember, all cats are cool, but some are cooler than others."},
    {id:5,creator:'owen', name:'Nft05' ,img:a_5,price:'3304',ui:c_2,bid:76,like:500,price:'63',description:"A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury."},
    {id:6,creator:'jenny', name:'Nft06' ,img:a_6,price:'3304',ui:c_3,bid:211,like:253,price:'82',description:"CrypToadz are a collection of 6969 small amphibious creatures trying to escape the tyrannical rule of the Evil King Gremplin. Created by Gremplin, with a small bit of help from his friends. This project is in the public domain. Feel free to use the toadz in any way you want.    "},
    {id:7,creator:'kevin', name:'Nft07' ,img:a_7,price:'3304',ui:c_1,bid:21,like:237,price:'99',description:"A community celebrating representation, inclusivity, and equal opportunities for all. United by a first-of-its-kind collection, featuring 10,000 artworks of diverse and powerful women."},
    {id:8,creator:'robert', name:'Nft08' ,img:a_8,price:'3304',ui:c_2,bid:23,like:1399,price:'449',description:"Welcome to an alternate reality, where evolution took a different route and weird apes roam the earth. Some appear normal. Some look weird. And some are just damn cool! Every CyberKong is unique and owns randomized items with different rarities. "},
    {id:9,creator:'elon', name:'Nft09' ,img:a_9,price:'3304',ui:c_3,bid:200,like:900,price:'741',description:"Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole.    "},



]



////////////////////////////////////////////////////////////////////

const Filter_data =[
    {id:1,img:a_1,Category:'Top',color:'t-110'},
    {id:2 ,img:a_2,Category:'New'},
    {id:3, img:a_3,Category:'Trending'},
    {id:4,img:a_4,Category:'Top'},
    {id:5,img:a_5,Category:'New'},
    {id:6,img:a_6,Category:'New'},
    {id:7,img:a_7,Category:'Trending'},
    {id:8,img:a_8,Category:'Trending'},
    {id:9,img:a_9,Category:'Top'},
    {id:10,img:a_10,Category:'New'},
    {id:11,img:a_11,Category:'New'},
    {id:12,img:a_12,Category:'New'},


]

export default Filter_data


//https://huemint.com/gradient-4/#palette=03101d-2d415e-12659e-2193d5


 export const Creators =[
    {id:1,name:"jessie" ,email:"@jessie",img:c_1},
    {id:2,name:"kylie" ,email:"@kylie",img:p_2},
    {id:3,name:"Martin" ,email:"@Martin",img:c_3},
    {id:4,name:"Seon" ,email:"@Seon",img:p_3},
    {id:5,name:"Alex" ,email:"@Alex",img:c_1},
    {id:6,name:"Terry" ,email:"@Terry",img:p_4},
    {id:7,name:"james" ,email:"@james",img:c_2},
    {id:8,name:"yino" ,email:"@yino",img:p_5},
    {id:9,name:"luke" ,email:"@luke",img:c_2},




]





 export const Categories =[
    {id:1,img:j_1,Name:' Digital Art',items:20},
    {id:2,img:j_2,Name:'Collectibles',items:20},
    {id:3,img:j_3,Name:'3D Games',items:20},
    {id:4,img:j_4,Name:'Virtual world',items:20},
    {id:5,img:j_5,Name:'Music',items:20},
    {id:6,img:j_6,Name:'Art',items:20},
 
]