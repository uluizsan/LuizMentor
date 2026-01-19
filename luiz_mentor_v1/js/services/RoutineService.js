
const CONTEXTS = {
    DARK_EMPIRE: { id: 'DarkEmpire', label: 'Visual Creativo', color: '#8B5CF6' }, // Purple
    TV_INDOOR: { id: 'TV_Indoor', label: 'Vendas Rua', color: '#EAB308' }, // Yellow
    FUNVAL: { id: 'Funval', label: 'Sobrevivência Inglês', color: '#10B981' }, // Green
    ANTIGRAVITY: { id: 'Dev_Antigravity', label: 'Construção Império', color: '#3B82F6' }, // Blue
    REST: { id: 'Rest', label: 'Descanso', color: '#737373' }
};

export default {
    init() {
        console.log('RoutineService Initialized');
    },

    getCurrentContext() {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const time = hour + (minutes / 60);

        // Schedule Logic
        if (time >= 6.5 && time < 8.5) return CONTEXTS.DARK_EMPIRE;
        if (time >= 8.5 && time < 10.5) return CONTEXTS.TV_INDOOR;
        if (time >= 11.0 && time < 20.0) return CONTEXTS.FUNVAL;
        if (time >= 20.5 && time < 22.5) return CONTEXTS.ANTIGRAVITY;

        return CONTEXTS.REST;
    },

    getContexts() {
        return CONTEXTS;
    }
};
