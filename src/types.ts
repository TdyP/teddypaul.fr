import {Ref} from 'vue';

export interface SidePanelState {
    isSidePanelOpen: Ref<boolean>;
    toggleSidePanel: () => void;
}

export interface Experience {
    from: string;
    to: string | null;
    title: string;
    location: string;
    company: string;
    description: string;
}
