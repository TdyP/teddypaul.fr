import {Ref} from 'vue';

export interface SidePanelState {
    isSidePanelOpen: Ref<boolean>;
    toggleSidePanel: () => void;
}
