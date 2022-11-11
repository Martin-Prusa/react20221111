import React from "react";
import Card from "./Card";

interface BookCardProps {
    title: string
    icon: string
}

function BookCard({ title, icon}: BookCardProps) {
    return (
        <Card>
            <div>
                <h2>{title}</h2>
                <div>{icon}</div>
            </div>
        </Card>
    )
}

export default BookCard;