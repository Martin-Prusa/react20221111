import React from "react";
import BookCardProps from "./BookCardProps";
import Card from "./Card";

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