"use client"
import {useEffect, useState} from "react";
import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [ismounted, setIsmounted] = useState(false);
    useEffect(() => {
        setIsmounted(true)
    }, [])
    if (!ismounted) {
        return null;
    }
    return (
        <>
            <AuthModal/>
            <UploadModal/>
        </>
    )
}
export default ModalProvider;