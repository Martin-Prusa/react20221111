import React from "react";
import Card from "./Card";

interface UserCardProps {
    name: string
    age: number
    books: number
    level: number
    img: string
}

function UserCard({name, age, books, level, img}: UserCardProps) {
    return (
        <Card>
            <h2>{name}</h2>
            <div>Věk: {age}</div>
            <div>Moje knihy: {books}</div>
            <div>Level: {level}</div>
            <img src={img} alt={name} />
        </Card>
    )
}

export default UserCard;