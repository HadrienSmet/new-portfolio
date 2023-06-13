// eslint-disable-next-line import/no-anonymous-default-export
type HobbyData = {
    mediaUrl: string;
};
type HobbiesDataType = HobbyData[];
type MobileHobbyData = {
    mediaUrl: string;
    text: string;
};
export type MobileHobbyDataAsProps = {
    hobby: MobileHobbyData;
};
type MobileHobbiesData = MobileHobbyData[];
export const hobbiesData: HobbiesDataType = [
    {
        mediaUrl: "hobby-travel.webp",
    },
    {
        mediaUrl: "hobby-coding.webp",
    },
    {
        mediaUrl: "hobby-learn.webp",
    },
    {
        mediaUrl: "hobby-philo.webp",
    },
];
export const hobbyArray = [
    {
        index: 0,
        text: "Travelling alone with my backpack",
    },
    {
        index: 1,
        text: "Coding",
    },
    {
        index: 2,
        text: "Learning new things",
    },
    {
        index: 3,
        text: "Reading philosophy",
    },
];
export const mobileHobbies: MobileHobbiesData = [
    {
        mediaUrl: "hobby-travel.webp",
        text: "Travelling alone with my backpack",
    },
    {
        mediaUrl: "hobby-coding.webp",
        text: "Coding",
    },
    {
        mediaUrl: "hobby-learn.webp",
        text: "Learning new things",
    },
    {
        mediaUrl: "hobby-philo.webp",
        text: "Reading philosophy",
    },
];
