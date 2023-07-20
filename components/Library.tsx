"use client"
import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";
import useAuthModal from "@/hooks/UseAuthModal";
import {useUser} from "@/hooks/useUser";
import useUploadModal from "@/hooks/UseUploadModal";

const Library = () => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const {user} = useUser();
    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }
        //check for subscription
        return uploadModal.onOpen();
    };
    return (
        <div>
            <div className="flex
           items-center
           justify-between
           px-5
           pt-4">
                <div
                    className="inline-flex
                items-center
                gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26}></TbPlaylist>
                    <p className="textneutral-400 font-medium text-md">Library</p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                cursor-pointer
                transition"/>
            </div>
            <div className="flex
            flex-col
            gap-y-2
            mt-4
            px-3">
                List of songs
            </div>
        </div>
    )
}
export default Library;