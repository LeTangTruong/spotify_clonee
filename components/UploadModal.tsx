"use client"

import Modal from "@/components/Modal";
import useUploadModal from "@/hooks/UseUploadModal";
import {FieldValue, FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import Input from "@/components/Input";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const [isLoading, setLoading] = useState();
    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null
        }
    })
    const onChange = (open: boolean) => {
        if (!open) {
            //reset the form
            reset();
            uploadModal.onClose();
        }
    }
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to supabase

    }
    return (
        <Modal
            title="Add a song"
            description="Upload an mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="
                flex flex-col gap-y-4
                "
            >
                <Input
                    id="title"
                    disabled={isLoading}
                    {...register('title', {required: true})}
                    placeholder="Song title"
                />
                <Input
                    id="author"
                    disabled={isLoading}
                    {...register('title', {required: true})}
                    placeholder="Song author"
                />
                <div>
                    <div>
                        Select a song file
                    </div>
                    <Input
                        id="song"
                        type="file"
                        disabled={isLoading}
                        accept=".mp3"
                        {...register('song', {required: true})}
                    />
                </div>
            </form>
        </Modal>
    )
}
export default UploadModal;