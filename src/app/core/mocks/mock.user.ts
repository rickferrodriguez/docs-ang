import { ResUserData } from "../user.model";

export const mockUserData: ResUserData = {
    results: [
        {
            gender: "male",
            name: {
                title: "Monsieur",
                first: "Antoine",
                last: "Masson",
            },
            location: {
                street: {
                    number: 4067,
                    name: "Rue Baraban",
                },
                city: "Disentis/Mustér",
                state: "Genève",
                country: "Switzerland",
                postcode: 6139,
                coordinates: {
                    latitude: "-62.3061",
                    longitude: "-86.0266",
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima",
                },
            },
            email: "antoine.masson@example.com",
            login: {
                uuid: "1a366341-eabb-47e8-8e4b-2a8f99219a4e",
                username: "crazypanda247",
                password: "theboss",
                salt: "5QURE3GW",
                md5: "db0bfd19e174572f8a56bd721d0e21b2",
                sha1: "d088c85aef9b7fe829344d40fe75c915e493c20c",
                sha256: "d29be15a01873d28b9323770a48730dcc6327fde282ce1b500a63109351a61d0",
            },
            dob: {
                date: "1983-04-30T11:18:12.421Z",
                age: 42,
            },
            registered: {
                date: "2012-04-23T13:39:40.631Z",
                age: 13,
            },
            phone: "078 116 62 80",
            cell: "076 541 28 89",
            id: {
                name: "AVS",
                value: "756.2071.0697.02",
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/98.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/98.jpg",
            },
            nat: "CH",
        },
    ],
    info: {
        seed: "e00e2bd6d351abf1",
        results: 1,
        page: 1,
        version: "1.4",
    },
};
