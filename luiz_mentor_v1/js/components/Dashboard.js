
import RoutineService from '../services/RoutineService.js';
import TaskWidget from './TaskWidget.js';
import VoiceWidget from './VoiceWidget.js';
import PanicButton from './PanicButton.js';

export default {
    async render() {
        const container = document.createElement('div');
        container.className = 'dashboard animate-enter';

        // Header / Context Info
        const currentContext = RoutineService.getCurrentContext();

        const header = document.createElement('header');
        header.style.marginBottom = '20px';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span class="text-xs text-muted">CONTEXTO ATUAL</span>
                    <h1 style="font-size: 1.5rem; color: ${currentContext.color};">
                        ${currentContext.label}
                    </h1>
                </div>
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <img src="https://ui-avatars.com/api/?name=Luiz+Mentor&background=random" alt="Profile" style="width: 100%; height: 100%; border-radius: 50%; opacity: 0.8;">
                </div>
            </div>
        `;
        container.appendChild(header);

        // Widgets
        container.appendChild(await TaskWidget.render());

        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = '1fr 1fr';
        grid.style.gap = 'var(--spacing-md)';

        // Note: Standard layout, but maybe Stacked is better for Mobile? 
        // Let's stack Voice and Panic for now as they are distinct actions

        container.appendChild(VoiceWidget.render());
        container.appendChild(PanicButton.render());

        return container;
    }
};
