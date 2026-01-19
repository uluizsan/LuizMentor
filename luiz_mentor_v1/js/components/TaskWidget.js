
import MockFirebase from '../services/MockFirebase.js';

export default {
    async render() {
        const container = document.createElement('div');
        container.className = 'card';
        // Add minimalist focus mode style
        container.style.borderLeft = '4px solid var(--color-accent)';

        const task = await MockFirebase.getNextTask();

        if (!task) {
            container.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i data-lucide="check-circle" style="color: var(--color-success); width: 48px; height: 48px; margin-bottom: 10px;"></i>
                    <h3 style="color: var(--color-text-primary)">Tudo Limpo</h3>
                    <p class="text-muted">Descanse, guerreiro.</p>
                </div>
            `;
            return container;
        }

        container.innerHTML = `
            <div style="margin-bottom: 15px;">
                <span class="text-xs font-bold" style="color: var(--color-accent); text-transform: uppercase; letter-spacing: 1px;">
                    PRÓXIMO DEGRAU
                </span>
                <h2 style="font-size: 1.5rem; margin-top: 5px; line-height: 1.2;">
                    ${task.title}
                </h2>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <span class="text-xs text-muted" style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px;">
                        ${task.context}
                    </span>
                </div>
            </div>
            <button id="btn-complete-task" class="btn btn-primary">
                EXECUTAR
                <i data-lucide="arrow-right" style="width: 18px;"></i>
            </button>
        `;

        // Event Listeners
        setTimeout(() => {
            const btn = container.querySelector('#btn-complete-task');
            if (btn) {
                btn.addEventListener('click', async () => {
                    await MockFirebase.completeTask(task.id);
                    // Simple re-render trigger (reload page or re-render dashboard)
                    // For now, reload app content
                    window.app.render();
                });
            }
        }, 0);

        return container;
    }
};
