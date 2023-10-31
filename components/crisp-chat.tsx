"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("bb1fcdb6-92e7-49d5-a1c9-711d8fd4dbed");
    }, []);
    return null;
}