export const state = () => ({
    data: [
        {
            building_id: 73,
            building_name: "1 этап 1а корпуса",
            floor: 10,
            id: 23329,
            is_studio: 1,
            number: "163",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 2956317,
            rooms: 1,
            size: "XS",
            square: 23.66,
        },
        {
            building_id: 74,
            building_name: "1 этап 1а корпуса",
            floor: 4,
            id: 20822,
            is_studio: 1,
            number: "164",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 2992701,
            rooms: 1,
            size: "XS",
            square: 23.87,
        },
        {
            building_id: 75,
            building_name: "1 этап 1а корпуса",
            floor: 4,
            id: 20382,
            is_studio: 1,
            number: "165",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 4952721,
            rooms: 2,
            size: "2k",
            square: 42.87,
        },
        {
            building_id: 75,
            building_name: "1 этап 1а корпуса",
            floor: 4,
            id: 20332,
            is_studio: 1,
            number: "166",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 8862732,
            rooms: 3,
            size: "3k",
            square: 42.87,
        },
        {
            building_id: 32,
            building_name: "1 этап 1а корпуса",
            floor: 10,
            id: 20328,
            is_studio: 1,
            number: "167",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 3956317,
            rooms: 1,
            size: "1k",
            square: 24.99,
        },
        {
            building_id: 37,
            building_name: "1 этап 1а корпуса",
            floor: 10,
            id: 20320,
            is_studio: 1,
            number: "168",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 3956317,
            rooms: 1,
            size: "XS",
            square: 24.99,
        },
        {
            building_id: 17,
            building_name: "1 этап 1а корпуса",
            floor: 7,
            id: 33320,
            is_studio: 1,
            number: "169",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 5956317,
            rooms: 1,
            size: "2k",
            square: 45.36,
        },
        {
            building_id: 87,
            building_name: "1 этап 1а корпуса",
            floor: 3,
            id: 33321,
            is_studio: 1,
            number: "170",
            plan: "/static/appartments/3rooms.png",
            porch: 3,
            price: 9956317,
            rooms: 4,
            size: "4",
            square: 76.60,
        },
    ]
})

export const mutations = {
    //
}

export const actions = {
    //
}

export const getters = {
    appartments: state => {
        return state.data;
    },
    maxFloor: state => {
        let maxFloor = 1;
        state.data.forEach(appartment => {
            if (appartment.floor > maxFloor) maxFloor = appartment.floor
        })
        return maxFloor;
    },
    maxSquare: state => {
        let maxSquare = 1;
        state.data.forEach(appartment => {
            if (appartment.square > maxSquare) maxSquare = appartment.square
        })
        return maxSquare;
    },
    maxPrice: state => {
        let maxPrice = 1;
        state.data.forEach(appartment => {
            if (appartment.price > maxPrice) maxPrice = appartment.price
        })
        return maxPrice / 1000000;
    },

}