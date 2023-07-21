import {Song} from "@/types";

import usePlayer from "./usePlayer";
import {useUser} from "./useUser";
import useAuthModal from "@/hooks/UseAuthModal";
import useSubscribeModal from "@/hooks/useSubcribeModal";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const subscribeModal = useSubscribeModal();
    const authModal = useAuthModal();
    const {subscription, user} = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        if (!subscription) {
            return subscribeModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay;
};

export default useOnPlay;