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
import article_bg1 from '../assets/article_bg.png'
import article_1 from '../assets/article-1.png'
import article_2 from '../assets/article-2.png'
import article_3 from '../assets/article-3.png'
import arr from '../assets/arr.png'
import arr2 from '../assets/arr2.png'
import arr3 from '../assets/arr3.png'
import arr4 from '../assets/arr4.png'
import arr5 from '../assets/arr5.png'
import arr6 from '../assets/arr6.png'
import arr7 from '../assets/arr7.png'






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


/////////////////////////////////////////////////////////////////////////////////////




 export const articles=[
    {
    id:1,
    img:article_bg1,
    title:'NFTs Weren’t Supposed to End Like This',
    def:'  When we invented non-fungible tokens, we were trying to protect artists. But tech-world opportunism has struck again.',
    date:'16 Jan 2022',
    author:'Anil Dash',
    body:'The only thing we’d wanted to do was ensure that artists could make some money and have control over their work. Back in May 2014, I was paired up with the artist Kevin McCoy at Seven on Seven, an annual event in New York City designed to spark new ideas by connecting technologists and artists. I wasn’t sure which one I was supposed to be; McCoy and his wife, Jennifer, were already renowned for their collaborative digital art, and he was better at coding than I was. At the time, I was working as a consultant to auction houses and media companies—a role that had me obsessively thinking about the provenance, ownership, distribution, and control of artworks. Seven on Seven was modeled after tech-industry hackathons, in which people stay up all night to create a working prototype that they then show to an audience. This was around the peak of Tumblr culture, when a raucous, wildly inspiring community of millions of artists and fans was sharing images and videos completely devoid of attribution, compensation, or context. As it turned out, some of the McCoys’ works were among those being widely “reblogged” by Tumblr users. And Kevin had been thinking a lot about the potential of the then-nascent blockchain—essentially an indelible ledger of digital transactions—to offer artists a way to support and protect their creations.',
    },
    {
        id:2,
        img:arr,
        title:'Why Community Marketplaces are the future of NFT trading',
        def:'Community marketplaces have custom branding, lower fees than third-party platform and guarantee you’re buying your NFTs from the real collection',
        date:'8 Feb 2022',
    author:'levi cowill',
        body:"Ironically, to explain what NFT community marketplaces are and why we're so bullish on them, we'll have to briefly go back to the Web2 space.  If you’ve ever been to an Apple Store, you know how different it is from big box retailers. No cramped rows of metal shelves, no yellow “SALE” signs, zero chance of tripping over stacked boxes. Just a few wooden tables, curated selection of devices, and a lot of light.     Whether you think that Apple Stores are peaceful spaces or you decry them as pretentious modernism, you can’t deny they’re different. More importantly, you can’t deny they’re Apple.Naturally, this applies to online experiences as well. When a customer buys from your website, you can collect email data for future marketing campaigns, you don’t pay another platform’s fees and you can create an on-brand online shopping experience.    Behind all of this is a broader trend: Brands want to go direct-to-consumer, own the full customer experience and cut out stakeholders that charge a fee without adding sufficient value… Does that remind you of the Web3's fundamental principles yet?",
        },
    
        {
            id:3,
            img:arr2,
            title:'The Creator Economy — NFTs and Beyond',
            def:'NFTs is more than just a passing fad.',
            date:'26 July 2022',
             author:'John Doe',
            body:"NFTs or Non-fungible Tokens have been gaining a lot of attention lately, both from investors and creators. They are crypto tokens tied to artwork on a blockchain. To buy the artwork, one must buy the token as well. The non-fungibility of these tokens is what renders them unique, just like a Monet or Van Gogh. The advantages of NFTs are embedded in their code which ensures transparency and the immutability of ownership. A new asset class like this going mainstream could be a game changer not only for individual creators but also the whole creator economy.  Contrary to what some skeptics may say, NFTs is more than just a passing fad. The NFT market has experienced a significant rise in 2021, reaching USD 2.4 billion by the second quarter. The number of active wallets also rose 151.89% at around the same time signifying more potential buyers and thus more sale prospects for NFT creators.",
            }   ,
            {
                id:4,
                img:arr3,
                title:'Profiting in Bear and Bull Markets',
                def:'bear markets occur during economic recessions or depressions, when pessimism prevails',
                date:'13 Aug 2022',
                author:'emily lokewill',

                body:'Both bear markets and bull markets represent tremendous opportunities to make money, and the key to success is to use strategies and ideas that can generate profits under a variety of conditions. This requires consistency, discipline, focus, and the ability to take advantage of fear and greed. This article will help familiarize you with investments that can prosper in up or down markets. A bear market is defined as a drop of 20% or more in a market average. Generally, bear markets occur during economic recessions or depressions, when pessimism prevails. But amid the rubble lie opportunities to make money for those who know how to use the right tools. Here are some ways to profit in bear markets',
                },
                {
                    id:5,
                    img:arr4,
                    title:'Key takeaways from NFTs and a Thousand True Fans',
                     date:'13 Oct 2022',
                    author:'breny jed',
                     body:"To be a successful creator you don’t need millions. You don’t need millions of dollars or millions of customers, millions of clients or millions of fans. To make a living as a craftsperson, photographer, musician, designer, author, animator, app maker, entrepreneur, or inventor you need only thousands of true fans    A true fan is defined as a fan that will buy anything you produce. These diehard fans will drive 200 miles to see you sing; they will buy the hardback and paperback and audible versions of your book; they will purchase your next figurine sight unseen; they will pay for the “best-of” DVD version of your free YouTube channel; they will come to your chef’s table once a month.              Kelly’s vision was that the internet was the ultimate matchmaker, enabling 21st century patronage. Creators, no matter how seemingly niche, could now discover their true fans, who would in turn demonstrate their enthusiasm through direct financial support               But the internet took a detour. Centralized social platforms became the dominant way for creators and fans to connect. The platforms used this power to become the new intermediaries — inserting ads and algorithmic recommendations between creators and users while keeping most of the revenue for themselves.   The good news is that the internet is trending back to Kelly’s vision. For example, many top writers on Substack earn far more than they did at salaried jobs. The economics of low take rates plus enthusiastic fandom does wonders. On Substack, 1,000 newsletter subscribers paying $10/month nets over $100K/year to the writer.",
                     },

                  {
                    id:6,
                    img:arr5,
                    title:'What is cryptocurrency?',
                    def:'Cryptocurrency: What It Is and How It Works',
                     date:'13 Oct 2022',
                      author:'Sevukich Pieyette',

                     body:"A cryptocurrency (or “crypto”) is a digital asset that can circulate without the need for a central monetary authority such as a government or bank. Instead, cryptocurrencies are created using cryptographic techniques that enable people to buy, sell or trade them securely. How does cryptocurrency work?Bitcoin and most other cryptocurrencies are supported by a technology known as blockchain, which maintains a tamper-resistant record of transactions and keeps track of who owns what. The creation of blockchains addressed a problem faced by previous efforts to create purely digital currencies: preventing people from making copies of their holdings and attempting to spend it twice       Individual units of cryptocurrencies can be referred to as coins or tokens, depending on how they are used. Some are intended to be units of exchange for goods and services, others are stores of value, and some can be used to participate in specific software programs such as games and financial products. How are cryptocurrencies created? One common way cryptocurrencies are created is through a process known as mining, which is used by Bitcoin. Mining can be an energy-intensive process in which computers solve complex puzzles in order to verify the authenticity of transactions on the network. As a reward, the owners of those computers can receive newly created cryptocurrency. Other cryptocurrencies use different methods to create and distribute tokens, and many have a significantly lighter environmental impact",
                     },

                     

                     {
                        id:7,
                        img:arr6,
                        title:'What Is Web3?',
                        def:'Your guide to (what could be) the future of the internet',
                         date:'13 Oct 2022',
                        author:'Sima Sharma',

                         body:"Web3 is the name some technologists have given to the idea of a new kind of internet service that is built using decentralized blockchains — the shared ledger systems used by cryptocurrencies like Bitcoin and Ether.                    The term has been around for years, but it has come into vogue in the past year or so. Packy McCormick, an investor who helped popularize web3, has defined it as “the internet owned by the builders and users, orchestrated with tokens.”                             Proponents envision web3 taking many forms, including decentralized social networks, “play-to-earn” video games that reward players with crypto tokens, and NFT platforms that allow people to buy and sell fragments of digital culture. The more idealistic ones say that web3 will transform the internet as we know it, upending traditional gatekeepers and ushering in a new, middleman-free digital econom   But some critics believe that web3 is little more than a rebranding effort for crypto, with the aim of shedding some of the industry’s cultural and political baggage and convincing people that blockchains are the natural next phase of computing. Others believe it’s a dystopian vision of a pay-to-play internet, in which every activity and social interaction becomes a financial instrument to be bought and sold.",
                         },
       

                  

]