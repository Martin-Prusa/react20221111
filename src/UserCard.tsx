import React from "react";
import Card from "./Card";

interface UserCardProps {
    name: string
    age: number
    books: number
    level: number
}

function UserCard({name, age, books, level}: UserCardProps) {
    return (
        <Card>
            <h2>{name}</h2>
            <div>Věk: {age}</div>
            <div>Moje knihy: {books}</div>
            <div>Level: {level}</div>
        </Card>
    )
}

export default UserCard;