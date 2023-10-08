import {create} from "zustand"

interface HomeModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

const useHomeModal = create<HomeModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useHomeModal;