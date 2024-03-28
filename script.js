const Header_Box_Container = document.createElement('div');
Header_Box_Container.classList.add('Header_Container');
document.querySelector('main').append(Header_Box_Container)
//..........................................

const Menu_Box_Container = document.createElement('div')
Menu_Box_Container.classList.add('Menu_Box_Container')
Header_Box_Container.append(Menu_Box_Container)
const Logo_Box = document.createElement('div');
Logo_Box.classList.add('Logo_Box');
const Menu_Logo = document.createElement('img')
Menu_Logo.src = 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/logo-img-1-e1602080577837.png'
Logo_Box.append(Menu_Logo);
Menu_Box_Container.append(Logo_Box);
Header_Box_Container.append(Menu_Box_Container)
//......................................................

const Menu_Box = document.createElement('div');
Menu_Box.classList.add('Menu_Box')
const Menu = document.createElement('ul');
const Links = [
    {
        href: '#',
        name: 'Home'
    },
    {
        href: '#',
        name: 'About'
    },
    {
        href: '#',
        name: 'Contact'
    },
    {
        href: '#',
        name: 'Blog'
    },
    {
        href: '#',
        name: 'Shop'
    }
]
Links.map((link) => {
    const Menu_Link = document.createElement('li');
    const Menu_Href = document.createElement('a');
    Menu_Href.innerText = link.name;
    Menu_Href.href = link.href;
    Menu_Link.append(Menu_Href);
    Menu.append(Menu_Link);
    Menu_Box.append(Menu)
})
Menu_Box_Container.append(Menu_Box)
//......................
const Menu_Btn = document.createElement('button');
Menu_Btn.classList.add('Menu_Btn');
Menu_Btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
var counter = 1;
Menu_Btn.onclick = ()=>{
    counter++
    if(counter % 2 == 0) {
        Menu_Btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        Menu_Box.style.height = '300px'
        Menu_Box.style.padding = '15px 0'
    }else {
        Menu_Btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        Menu_Box.style.height = '0'
        Menu_Box.style.padding = '0 0'
    }
}
Menu_Box_Container.append(Menu_Btn) 
//.........................................
const Cart_Container = document.createElement('div')
Cart_Container.classList.add('Cart_Container')
const Cart_Btn_Box = document.createElement('div')
const Cart_Btn = document.createElement('button')
Cart_Btn_Box.append(Cart_Btn);
Cart_Btn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Cart`
Cart_Container.append(Cart_Btn_Box)
//.......................
const Contact_Container_Btn_Box = document.createElement('div')
const Contact_Container_Btn = document.createElement('button');
Contact_Container_Btn.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32.203px" height="14.156px" viewBox="0 0 32.203 14.156" enable-background="new 0 0 32.203 14.156" xml:space="preserve">
<rect x="0.109" y="0.063" width="18.002" height="1.999"></rect>
<rect x="14.107" y="12.065" width="18.002" height="1.999"></rect>
<rect x="0.109" y="6.064" width="32" height="1.998"></rect>
</svg>`
Contact_Container_Btn_Box.append(Contact_Container_Btn);
Cart_Container.append(Contact_Container_Btn_Box)
Menu_Box_Container.append(Cart_Container)
//..................................
const Main_Banner_Container = document.createElement('div');
Main_Banner_Container.classList.add('Main_Banner_Container')
document.querySelector('main').append(Main_Banner_Container)
const Main_Banner = document.createElement('div')
Main_Banner.classList.add('Main_Banner');
Main_Banner_Container.append(Main_Banner)
//..................................................
const Main_Banner_Href_Box = document.createElement('div')
Main_Banner_Href_Box.classList.add('Main_Bnner_Href_Box');
const Banner_Hrefs = [
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/06/h1-banner-image-1.jpg',
        name: 'MEN APPAREL',
        description: 'Lorem Ipsum proin gravida nibivel velit auctor aenean ',
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/06/h1-banner-image-2.jpg',
        name: 'WOMEN APPAREL',
        description: 'Lorem Ipsum proin gravida nibivel velit auctor aenean ',
    }
]

Banner_Hrefs.map((href) => {
    const Banner_Href = document.createElement('a');
    Banner_Href.classList.add('Banner_Href');
    Banner_Href.style.backgroundImage = `url(${href.img})`;
    //.......................
    const Info_Box = document.createElement('div');
    Info_Box.classList.add('Info_Box')
    const Name_Box = document.createElement('div');
    const Name = document.createElement('h2');
    Name.innerText = href.name;
    Name_Box.append(Name);
    //....................
    const Description_Box = document.createElement('div');
    const Description = document.createElement('p');
    Description.innerText = href.description;
    Description_Box.append(Description);
    //...................
    const Button_Box = document.createElement('div');
    const Button = document.createElement('button');
    Button.innerText = 'SHOP NOW';
    Button_Box.append(Button);
    //.....................
    Info_Box.append(Name_Box, Description_Box, Button_Box);
    Banner_Href.append(Info_Box);
    Main_Banner_Href_Box.append(Banner_Href);
    Main_Banner_Container.append(Main_Banner_Href_Box);
})
//........................................................

const Product_Container = document.createElement('div')
Product_Container.classList.add('Product_Container')
document.querySelector('main').append(Product_Container)
const Product_Tittle_Box = document.createElement('div')
Product_Tittle_Box.classList.add('Product_Tittle_Box')
const Tittle = document.createElement('h1')
Tittle.innerText = 'NEW ARRIVALS'
Product_Tittle_Box.append(Tittle)
const Product_Box = document.createElement('div')
Product_Box.classList.add('Product_Box');
Product_Container.append(Product_Tittle_Box, Product_Box);

const Product_Data = [
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-1.jpg',
        name: 'CITY URBAN',
        categories: 'Sport',
        old_price: '$170',
        new_price: '$150'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-7.jpg',
        name: 'SPORTS BRA',
        categories: 'Yoga',
        old_price: '',
        new_price: '$70'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-2.jpg',
        name: 'RUNNING SHOES',
        categories: 'Sneakers',
        old_price: '',
        new_price: '$150'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-5.jpg',
        name: 'OUTWEAR',
        categories: 'Sport',
        old_price: '',
        new_price: '$150'
    }
];

Product_Data.map((item) => {
    const Product = document.createElement('div');
    Product.classList.add('Product')
    //................................
    const AddTo_Cart_Btn = document.createElement('button');
    const Button_Box = document.createElement('div');
    Button_Box.classList.add('Button_Box')
    Button_Box.append(AddTo_Cart_Btn)
    AddTo_Cart_Btn.innerText = 'add to cart';
    const Product_Img_Box = document.createElement('div');
    Product_Img_Box.classList.add('Product_Img_Box');
    const Product_Img = document.createElement('img');
    Product_Img.src = item.img;
    Product_Img_Box.append(Product_Img, Button_Box);
    //...............................
    const Product_Info_Box = document.createElement('div')
    Product_Info_Box.classList.add('Product_Info');
    const Name_Category_Box = document.createElement('div');
    const Name_Box = document.createElement('div');
    const Name = document.createElement('h3')
    Name.innerText = item.name
    Name_Box.append(Name)
    //................................................
    const Categories_Box = document.createElement('div')
    const Category = document.createElement('span')
    Categories_Box.append(Category)
    Category.innerText = item.categories
    const Price_Box = document.createElement('div')
    const Old_Price = document.createElement('span')
    Old_Price.innerText = item.old_price;
    const New_price = document.createElement('span')
    New_price.innerText = item.new_price
    Price_Box.append(Old_Price, New_price)
    //..............................................
    Name_Category_Box.append(Name_Box, Categories_Box)
    Product_Info_Box.append(Name_Category_Box, Price_Box)
    Product.append(Product_Img_Box, Product_Info_Box)
    Product_Box.append(Product)
}
)

const Product_Banner_Box = document.createElement('div')
Product_Banner_Box.classList.add('Product_Banner_Box')
const Banner_Box_Img = document.createElement('div')
Banner_Box_Img.classList.add('Banner_Box_Img')
Banner_Box_Img.style.backgroundImage = 'url(https://qi17.qodeinteractive.com/wp-content/uploads/2021/06/h1-img-8.jpg)'
Product_Banner_Box.append(Banner_Box_Img,)
document.querySelector('main').append(Product_Banner_Box)
//..............................................................

const Banner_Info_Container = document.createElement('div')
Banner_Info_Container.classList.add('Banner_Info_Container')
// const Banner_Info_Box=document.createElement('div')
const Banner_Info = document.createElement('div')
const Banner_Name = document.createElement('h1')
Banner_Name.innerText = 'RUNNING BRA'
Banner_Info.append(Banner_Name)
//..........................................
const Banner_Price_Box = document.createElement('div')
const Banner_Price = document.createElement('span')
Banner_Price.innerText = '$60'
Banner_Price_Box.append(Banner_Price)
//...........................................
const Banner_Paragraph = document.createElement('div')
const Paragraph = document.createElement('p')
Paragraph.innerText = 'Sea porro dignissim et, ne legendos oportere vis. Viris doming interesset mel an. Ut sea populo aliquip disputationi, sea ex quem adipiscing. Postea aperiri scribentur.'
Banner_Paragraph.append(Paragraph)
//.........................................................
const Banner_Btn = document.createElement('div')
const Btn_Text = document.createElement('button')
Btn_Text.innerText = 'ADD TO CART'
Banner_Btn.append(Btn_Text)
Banner_Info_Container.append(Banner_Info, Banner_Price_Box, Banner_Paragraph, Banner_Btn)
Banner_Box_Img.append(Banner_Info_Container)
//........................................................


const Categorise_Banner_Container = document.createElement('div')
Categorise_Banner_Container.classList.add('Categorise_Banner_Container')
const Categories_Tittle_Box = document.createElement('div')
const Categories_Tittle = document.createElement('h1')
Categories_Tittle.innerText = 'FEATURED'
Categories_Tittle_Box.append(Categories_Tittle)
const Banner_Categories_Box = document.createElement('div')
Banner_Categories_Box.classList.add('Banner_Categories_Box')
document.querySelector('main').append(Categorise_Banner_Container)

//..........................................................

const Banner_Category_Data = [
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-13.jpg',
        name: 'SPORT T-SHIRT',
        price: '$220',
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-14.jpg',
        name: 'RUNNING BRA',
        price: '$80',
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-15.jpg',
        name: 'RUNNING SHORTS',
        price: '$90',
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-16.jpg',
        name: 'LEGGINGS',
        price: '$80',
    }
];

Banner_Category_Data.map((item) => {
    const Banner_Category = document.createElement('div')
    Banner_Category.classList.add('Banner_Category')
    const Banner_Category_Img_Box = document.createElement('div')
    Banner_Category_Img_Box.classList.add('Banner_Category_Img_Box')
    const Banner_Category_Img = document.createElement('img')
    Banner_Category_Img.src = item.img
    Banner_Category_Img_Box.append(Banner_Category_Img)

    //............................................................

    const Banner_Category_Info = document.createElement('div')
    Banner_Category_Info.classList.add('Banner_Category_Info')
    const Banner_Category_Name = document.createElement('div')
    const Category_Name = document.createElement('h3')
    Category_Name.innerText = item.name
    Banner_Category_Name.append(Category_Name)


    //.....................................................

    const Banner_Category_Price = document.createElement('div')
    const Category_Price = document.createElement('span')
    Category_Price.innerText = item.price
    Banner_Category_Price.append(Category_Price)
    //...........................................................

    const Banner_Category_Btn = document.createElement('div')
    const Category_Btn = document.createElement('button')
    Category_Btn.innerText = 'ADD TO CART'
    Banner_Category_Btn.append(Category_Btn);
    Banner_Category_Info.append(Banner_Category_Name, Banner_Category_Price, Banner_Category_Btn)
    Banner_Category.append(Banner_Category_Img_Box, Banner_Category_Info)
    Banner_Categories_Box.append(Banner_Category)
}
)
Categorise_Banner_Container.append(Categories_Tittle_Box, Banner_Categories_Box)
//.................................................................................


const Banner_Trending_Container = document.createElement('div')
Banner_Trending_Container.classList.add('Banner_Trending_Container')
const Banner_Trending = document.createElement('div')
const Trending_Name = document.createElement('h1')
Trending_Name.innerText = 'TRENDING NOW'
Banner_Trending_Container.append(Banner_Trending)
Banner_Trending.append(Trending_Name)
document.querySelector('main').append(Banner_Trending_Container)
//...............................................................
const Trending_Container = document.createElement('div')
Trending_Container.classList.add('Trending_Container')
const Trending_Img = [
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/06/h1-image_3.jpg'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/06/h1-image_4.jpg'
    }
];
Trending_Img.map((item) => {
    const Trending_Img_Box = document.createElement('div')
    Trending_Img_Box.classList.add('Trending_Img_Box')
    const Trending_Img = document.createElement('img')
    Trending_Img.src = item.img
    Trending_Img_Box.append(Trending_Img)
    Trending_Container.append(Trending_Img_Box)
    //...............................................
    const Trending_Btn_Box = document.createElement('div')
    Trending_Btn_Box.classList.add('Trending_Btn_Box')
    const Trending_Btn = document.createElement('button')
    Trending_Btn.innerText = 'SHOP NOW'
    Trending_Btn_Box.append(Trending_Btn)
    Trending_Img_Box.append(Trending_Btn_Box)

})
Banner_Trending_Container.append(Trending_Container)
//.......................................................
const Slider_Container_Box = document.createElement('div');
Slider_Container_Box.classList.add('Slide_Container_Box');
Slider_Container_Box.innerHTML = `
<swiper-container class="mySwiper"  navigation="true" space-between="30"
centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
<swiper-slide>
<h1>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
luctus nec ullamcorper mattis, pulvinar dapibus. </h1>
<h4>Jan Pesten, Fitness Trainer</h4>
</swiper-slide>
<swiper-slide>
<h1>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
luctus nec ullamcorper mattis, pulvinar dapibus. </h1>
<h4>Anna West, Fitness Trainer</h4>
</swiper-slide>
<swiper-slide>
<h1>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
luctus nec ullamcorper mattis, pulvinar dapibus. </h1>
<h4>Janna Jhonson, Fitness Trainer</h4>
</swiper-slide>
</swiper-container>
`
document.querySelector('main').append(Slider_Container_Box)
//..............................................................

const Shop_Categories_Box = document.createElement('div')
Shop_Categories_Box.classList.add('Shop_Categories_Box')
const Shop_Name_Box = document.createElement('div')
const Shop_Name = document.createElement('h1')
Shop_Name.innerText = 'SHOP BY CATEGORY'
Shop_Name_Box.append(Shop_Name)
Shop_Categories_Box.append(Shop_Name_Box)
document.querySelector('main').append(Shop_Categories_Box)
//...............................................................

const Categories_Box = document.createElement('div')
Categories_Box.classList.add('Categories_Box')

const Shop_Category = [
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-5.jpg',
        name: 'MENS'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-6.jpg',
        name: 'WOMENS'
    },
    {
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-7.jpg',
        name: 'KIDS'
    }
]

Shop_Category.map((item) => {
    const Category = document.createElement('div')
    Category.classList.add('Category')
    const Category_Img_Box = document.createElement('div');
    Category_Img_Box.classList.add('Category_Img_Box')
    const Category_Img = document.createElement('img')
    Category_Img.src = item.img
    //.................................................
    Category_Img_Box.append(Category_Img)
    //..................................................
    const Category_Info_Box = document.createElement('div')
    Category_Info_Box.classList.add('Category_Info_Box')
    const Category_Info_Name = document.createElement('div')
    const Category_Info = document.createElement('h2')
    Category_Info.innerText = item.name
    Category_Info_Name.append(Category_Info)
    Category_Info_Box.append(Category_Info_Name)
    Category.append(Category_Img_Box, Category_Info_Box);
    Categories_Box.append(Category)
})

Shop_Categories_Box.append(Categories_Box)
//.................................................

const Partniors_Group_Container = document.createElement('div')
Partniors_Group_Container.classList.add('Partniors_Group_Container')
document.querySelector('main').append(Partniors_Group_Container)
//..........................................................
const Groups = [
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-1.png',

    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-2.png'

    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-3.png',

    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-4.png'
    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-5.png'
    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/2021/03/client-img-6.png'
    }
]

Groups.map((item) => {
    const Partniors_Group_Img_Box = document.createElement('a');
    Partniors_Group_Img_Box.href = item.href;
    Partniors_Group_Img_Box.classList.add('Partniors_Group_Img_Box')
    Partniors_Group_Img_Box.style.backgroundImage = `url(${item.img})`
    Partniors_Group_Container.append(Partniors_Group_Img_Box)
})

//................................................................

const Info_Web_Box_Container = document.createElement('div')
Info_Web_Box_Container.classList.add('Info_Web_Box_Container')
const Info_Web_Box = document.createElement('div')
const Info_Web_Box_Name = document.createElement('h1')
Info_Web_Box_Name.innerText = 'VIEW OUR INSTAGRAM'
Info_Web_Box.append(Info_Web_Box_Name)
Info_Web_Box_Container.append(Info_Web_Box)
document.querySelector('main').append(Info_Web_Box_Container)
//.............................................................


const Info_Box_Img_Container = document.createElement('div')
Info_Box_Img_Container.classList.add('Info_Box_Img_Container')
const Insta_Img = document.createElement('div')
Insta_Img.classList.add('Insta_Img')
Insta_Img.style.backgroundImage = 'url(https://qi17.qodeinteractive.com/wp-content/uploads/2020/10/insta-img-1.jpg)'
Info_Box_Img_Container.append(Insta_Img)
Info_Web_Box_Container.append(Info_Box_Img_Container)
///////////////////////////////////////////////////////////////////////////


const Web_Img_Product = [
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122956917_788616388387619_3839024295237056139_nfull.jpg'
    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122534890_2857436194533433_4794265323720873757_nfull.jpg'
    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122485356_2903423496611017_3174910379574264001_nfull.jpg'
    },
    {
        href: '#',
        img: 'https://qi17.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122554954_447696332876779_2657061631486845999_nfull.jpg'
    }
]
const Web_Img_Box_Container = document.createElement('div')
Web_Img_Box_Container.classList.add('Web_Img_Box_Container')
Web_Img_Product.map((item) => {
    const Web_Img_Box = document.createElement('a');
    Web_Img_Box.href = item.href
    Web_Img_Box.style.backgroundImage = `url(${item.img})`;
    Web_Img_Box_Container.append(Web_Img_Box)
    Info_Box_Img_Container.append(Web_Img_Box_Container)

}
)


































