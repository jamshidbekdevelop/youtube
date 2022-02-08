import JSh from '../assats/img/jsh.png'


const user={
        title: 'Yil talabasi',
        view: '122 view',
        src: JSh,
        user:{
            name: 'Jamshidbek',
            surname: 'Sharipov',
            img: 'http..'
    },
}
const user1={
    title: 'kino',
    view: '122 view',
    src: '',
    user:{
        name: 'Jamshidbek',
        surname: 'Sharipov',
        img: 'http..'
},
}

export const muvies=[
    { catagory: 'kino', id: 1, ...user},
    { catagory: 'live', id: 2, ...user1},
    { catagory: 'music', id: 3, ...user},
    { catagory: 'videos', id: 4, ...user},
    { catagory: 'multic', id: 5, ...user},
    { catagory: 'pubg', id: 6, ...user},
    { catagory: 'camediya', id: 7, ...user},
    { catagory: 'kino', id: 8, ...user},
    { catagory: 'live', id: 9, ...user},
    { catagory: 'music', id: 10, ...user1},
    { catagory: 'multic', id: 11, ...user},
    { catagory: 'pubg', id: 12, ...user},
    { catagory: 'kino', id: 13, ...user},
    { catagory: 'videos', id: 14, ...user},

]
export default muvies;