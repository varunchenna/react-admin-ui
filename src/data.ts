export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "profile.svg"
            }
        ]
    },
    {
        id: 2,
        title: "Lists",
        listItems: [
            {
                 id: 1,
                 title: "Users",
                 url: "/users",
                 icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
           },
           {
            id: 3,
            title: "Orders",
            url: "/orders",
            icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
           }
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
           },
           {
            id: 2,
            title: "Notes",
            url: "/",
            icon: "note.svg",
           },
           {
            id: 3,
            title: "Forms",
            url: "/",
            icon: "form.svg",
            },
            {
                id: 4,
                title: "Calender",
                url: "/",
                icon: "calendar.svg",
           }
        ]
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
           },
           {
            id: 2,
            title: "Backups",
            url: "/",
            icon: "backup.svg",
            }
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
           },
           {
            id: 2,
            title: "Logs",
            url: "/",
            icon: "log.svg",
            }
        ]
    }


]

export const topDealUsers = [
    {
        id: 1,
        img: "https://wallpapers.com/images/featured-full/pretty-profile-pictures-6x5bfef0mhb60qyl.jpg",
        username: "Tom Sara Rose",
        email: "tomsara@gamil.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
        username: "Tim Taylor",
        email: "timtailor@gmail.com",
        amount: "7.982",
    },
    {
        id: 3,
        img: "https://pics.craiyon.com/2023-10-22/99d3246491954754a58b767b247a94d3.webp",
        username: "Rahul Thavs",
        email: "rahultavs876@gamil.com",
        amount: "8.802",
    },
    {
        id: 4,
        img: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        username: "Sam heastling",
        email: "samheasling32@gamil.com",
        amount: "5.454",
    },
    {
        id: 5,
        img: "https://pics.craiyon.com/2023-10-22/95bbbe67fe014f92847d28f43bd24c5b.webp",
        username: "texas hape",
        email: "taxeshap21@gamil.com",
        amount: "3.802",
    },
    {
        id: 6,
        img: "https://pics.craiyon.com/2023-10-01/18c03353826b461f9c97b5c001e3921f.webp",
        username: "Ray doanlod",
        email: "raydoanlod32@gamil.com",
        amount: "2.454",
    },

]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400},
        { name: "Mon", users: 600},
        { name: "Tue", users: 500},
        { name: "Wed", users: 700},
        { name: "Thu", users: 400},
        { name: "Fri", users: 500},
        { name: "Sat", users: 450},
    ],
};

export const chartBoxProduct = {
    color:"skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400},
        { name: "Mon", products: 600},
        { name: "Tue", products: 500},
        { name: "Wed", products: 700},
        { name: "Thu", products: 400},
        { name: "Fri", products: 500},
        { name: "Sat", products: 450},
    ],
}


export const chartBoxRevenue = {
    color:"teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: 45,
    chartData: [
        { name: "Sun", revenue: 400},
        { name: "Mon", revenue: 600},
        { name: "Tue", revenue: 500},
        { name: "Wed", revenue: 700},
        { name: "Thu", revenue: 400},
        { name: "Fri", revenue: 500},
        { name: "Sat", revenue: 450},
    ],
}

export const chartBoxConversion = {
    color:"gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400},
        { name: "Mon", ratio: 600},
        { name: "Tue", ratio: 500},
        { name: "Wed", ratio: 700},
        { name: "Thu", ratio: 400},
        { name: "Fri", ratio: 500},
        { name: "Sat", ratio: 450},
    ],
}

export const barBoxVisit ={
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mun",
            visit: 3000,
        },        
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 5000,
        },
        {
            name: "Thr",
            visit: 1070,
        },
        {
            name: "Fri",
            visit: 5500,
        },        {
            name: "Sat",
            visit: 3450,
        }
    ]
}

export const barBoxRevenue ={
    title: "Total Revenue",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mun",
            profit: 5000,
        },        
        {
            name: "Tue",
            profit: 1400,
        },
        {
            name: "Wed",
            profit: 6000,
        },
        {
            name: "Thr",
            profit: 14070,
        },
        {
            name: "Fri",
            profit: 2500,
        },        {
            name: "Sat",
            profit: 3450,
        }
    ]
}


export const userRows = [
    {
        id: 1,
        img: "https://media.istockphoto.com/id/537316838/photo/pharmacist-leaning-to-a-medicine-shelf-with-digital-tablet.jpg?s=612x612&w=0&k=20&c=GgyBBOF_sjvs1oXOdMpotttnHJ_Q7_S2jzdHorZRX9c=",
        lastName:"David",
        firstName:"Rahul",
        email:"davidrahul76@gmail.com",
        phone: "1223 234 876",
        createdAt: "01.02.2024",
        verified: true,
    },
    {
        id: 2,
        img: "https://www.pharmacyprofiles.com/wp-content/uploads/2017/06/hp-people.png",
        lastName:"Devi",
        firstName:"Moksha",
        email:"devimoksha654@gmail.com",
        phone: "987 212 876",
        createdAt: "15.10.2023",
        verified: false,
    },
    {
        id: 3,
        img: "https://www.shutterstock.com/image-photo/smiling-happy-confident-young-woman-600nw-318062558.jpg",
        lastName:"Sara",
        firstName:"Greg",
        email:"saragreg56@gmail.com",
        phone: "9879 234 324",
        createdAt: "12.01.2024",
        verified: true,
    },
    {
        id: 4,
        img: "https://static.toiimg.com/thumb/msid-107577886,width-1280,height-720,resizemode-4/107577886.jpg",
        lastName:"Virat",
        firstName:"Kohli",
        email:"viratkohli98@gmail.com",
        phone: "8768 234 654",
        createdAt: "02.01.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGSchlS7Mfzt2TaTb58_Nr4FLFWsVac2x_w&usqp=CAU",
        lastName:"Rohit",
        firstName:"Sharma",
        email:"rohitsharma8@gmail.com",
        phone: "997 765 876",
        createdAt: "15.12.2023",
        verified: true,
    },
    {
        id: 6,
        img: "https://c.ndtvimg.com/2020-03/9hbrmvqg_kl-rahul_625x300_09_March_20.jpg",
        lastName:"Trans",
        firstName:"Boll",
        email:"saragreg56@gmail.com",
        phone: "9879 234 777",
        createdAt: "10.07.2023",
        verified: false,
    },
]


export const ProductRows = [
    {
        id: 1,
        img: "https://5.imimg.com/data5/SELLER/Default/2021/2/FL/WK/KI/14630462/toshiba-2-ton-5-star-hi-walls-inverter-air-conditioner-500x500.jpg",
        title: "Toshiba Split AC 2",
        color: "white",
        producer:"Toshiba",
        price: "$970.50",
        createdAt: "01.02.2024",
        inStock: true,
    },
    {
        id: 2,
        img: "https://www.pharmacyprofiles.com/wp-content/uploads/2017/06/hp-people.png",
        title: "Sony Bravia KDL-47w805A",
        color: "black",
        producer:"Sony",
        price: "$500.50",
        createdAt: "05.02.2024",
        inStock: true,
    },
    {
        id: 3,
        img: "https://www.shutterstock.com/image-photo/smiling-happy-confident-young-woman-600nw-318062558.jpg",
        title: "Acer Laptop 16 LK-98",
        color: "black",
        producer:"Acer",
        price: "$599.50",
        createdAt: "05.08.2024",
        inStock: true,
    },
    {
        id: 4,
        img: "https://static.toiimg.com/thumb/msid-107577886,width-1280,height-720,resizemode-4/107577886.jpg",
        title: "Rode Podcast Microphone",
        color: "grayRode",
        producer:"Toshiba",
        price: "$119.49",
        createdAt: "04.06.2023",
        inStock: true,
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGSchlS7Mfzt2TaTb58_Nr4FLFWsVac2x_w&usqp=CAU",
        title: "Logitech MX Master 3",
        color: "black",
        producer:"Logitech",
        price: "$59.49",
        createdAt: "15.12.2023",
        inStock: true,
    },
    {
        id: 6,
        img: "https://c.ndtvimg.com/2020-03/9hbrmvqg_kl-rahul_625x300_09_March_20.jpg",
        title: "Philips Hue Play Gradient",
        color: "rainbow",
        producer:"Philips",
        price: "$33.99",
        createdAt: "11.04.2023",
        inStock: true,
    },
]



export const singleUser = {
    id: 1,
    img: "https://media.istockphoto.com/id/537316838/photo/pharmacist-leaning-to-a-medicine-shelf-with-digital-tablet.jpg?s=612x612&w=0&k=20&c=GgyBBOF_sjvs1oXOdMpotttnHJ_Q7_S2jzdHorZRX9c=",
    title: "John Doe",
    info: {
        username:"JohnDoe44",
        fullname: "John Doe",
        email: "johndoe@gmail.com",
        phone: "987 567 9079",
        status: "verified",
    },
    charts: {
        dataKeys: [
            { name: "visits", color:"#82ca9d" },
            { name: "clicks", color:"#8884d8" },
        ],
        data: [
            {
                name:"Sun",
                visits: 4000,
                clicks: 5400,
            },
            {
                name:"Mon",
                visits: 3000,
                clicks: 8400,
            },
            {
                name:"Tue",
                visits: 5000,
                clicks: 5400,
            },
            {
                name:"Wed",
                visits: 3000,
                clicks: 7400,
            },
            {
                name:"Thu",
                visits: 4000,
                clicks: 6000,
            },
            {
                name:"Fri",
                visits: 2000,
                clicks: 3400,
            },
            {
                name:"Sat",
                visits: 3800,
                clicks: 4000,
            },

        ]
    },
    activities: [
        {
            text:"John Doe purchaed Toshiba Split AC 2",
            time:"3 days ago",
        },
    
        {
            text:"John Doe added Toshiba Split AC 2 to wish-list",
            time:"1 week ago",
        },
        {
            text:"John added Baffalo shirt to wish-list",
            time:"3 weeks ago",
        },
        {
            text:"John Doe reviewed GM Cricket bat",
            time:"1 month ago",
        },
        {
            text:"John Doe added Acer laptop to wish-list",
            time:"1 month ago",
        },

    ]
}


export const singleProduct = {
    id: 1,
    img: "https://5.imimg.com/data5/SELLER/Default/2021/2/FL/WK/KI/14630462/toshiba-2-ton-5-star-hi-walls-inverter-air-conditioner-500x500.jpg",
    title: "Toshiba Split AC 2",
    info: {
        productId:"Ps55D1156d",
        color: "white",
        price: "$250.89",
        producer: "Toshiba",
        export: "Japan",
    },
    charts: {
        dataKeys: [
            { name: "visits", color:"#82ca9d" },
            { name: "orders", color:"#8884d8" },
        ],
        data: [
            {
                name:"Sun",
                visits: 4000,
                orders: 2400,
            },
            {
                name:"Mon",
                visits: 3000,
                orders: 3400,
            },
            {
                name:"Tue",
                visits: 5000,
                orders: 4400,
            },
            {
                name:"Wed",
                visits: 3000,
                orders: 1400,
            },
            {
                name:"Thu",
                visits: 4000,
                orders: 2000,
            },
            {
                name:"Fri",
                visits: 2000,
                orders: 1400,
            },
            {
                name:"Sat",
                visits: 3800,
                orders: 1800,
            },

        ]
    },
    activities: [
        {
            text:"John Doe purchaed Toshiba Split AC 2",
            time:"3 days ago",
        },
        {
            text:"Mike tes added Toshiba Split AC 2 to wish-list",
            time:"6 days ago",
        },
        {
            text:"John Doe added Toshiba Split AC 2 to wish-list",
            time:"1 week ago",
        },
        {
            text:"Revati reviewed the product",
            time:"3 weeks ago",
        },

    ]
}