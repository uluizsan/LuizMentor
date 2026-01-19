
export default {
    init() {
        if (!localStorage.getItem('tasks')) {
            const initialTasks = [
                { id: 1, title: 'Finalizar Proposta DarkEmpire', context: 'DarkEmpire', status: 'pending', scheduled: new Date().toISOString() },
                { id: 2, title: 'Visitar Cliente Rua A', context: 'TV_Indoor', status: 'pending', scheduled: new Date(Date.now() + 3600000).toISOString() }
            ];
            localStorage.setItem('tasks', JSON.stringify(initialTasks));
        }
        console.log('MockFirebase Initialized with LocalStorage');
    },

    async getNextTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return tasks.find(t => t.status === 'pending');
    },

    async completeTask(taskId) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(t => t.id === taskId ? { ...t, status: 'completed' } : t);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return true;
    },

    async analyzeAudio(prompt) {
        // Mock Gemini Analysis
        return new Promise((resolve) => {
            setTimeout(() => {
                const isInsight = Math.random() > 0.5;
                resolve({
                    tag: isInsight ? 'INSIGHT' : 'VITIMISMO',
                    message: isInsight ? 'Ideia Registrada no Backlog!' : 'Arquivo de choro ignorado.'
                });
            }, 1000);
        });
    }
};
