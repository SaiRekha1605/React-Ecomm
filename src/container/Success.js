import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const [count, setCount] = useState(15);
    const navigate = useNavigate();
    useEffect(() => {
        setInterval(() => setCount((count) => count - 1), 1000);
        setTimeout(() => navigate('/'), 15000);
     },
        [navigate]);

     return (
        <h5 className="h5 mt-5"> Your Order have been Placed Successfully.
            You will be redirected in {""} {count} seconds</h5>
    );
}